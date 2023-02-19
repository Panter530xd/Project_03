import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Recipes } from "@/types/profiles";

type CartItem = {
  recipe: Recipes;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (recipe: Recipes, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const cartFromStorage = window.localStorage.getItem("cart");
      if (cartFromStorage) {
        return JSON.parse(cartFromStorage);
      }
    }
    return [];
  });

  const addToCart = (recipe: Recipes, quantity: number) => {
    const itemIndex = cart.findIndex((item) => item.recipe.id === recipe.id);
    console.log(`Adding ${quantity} of recipe ${recipe.id} to cart`);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { recipe, quantity }]);
      console.log(`Cart updated:`, cart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const cartItem of cart) {
      totalPrice += cartItem.recipe.price * cartItem.quantity;
    }
    return totalPrice;
  };

  useEffect(() => {
    console.log("Cart updated, recalculating total price");
  }, [cart]);

  console.log(`Cart provider initialized with cart:`, cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
      {cart.length > 0 && (
        <div>
          Total Price: ${getTotalPrice().toFixed(2)}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </CartContext.Provider>
  );
};
