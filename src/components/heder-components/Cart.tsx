/* eslint-disable @next/next/no-img-element */
import { useCart } from "../context/context";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import ShopingCard from "/public/images/Icons/shopping-bag-svgrepo-com.svg";

import { Recipes } from "@/types/profiles";
import Link from "next/link";

interface Props {
  recipe: Recipes;
  quantity: number;
  onClick: () => void;
}

export default function Card() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, clearCart } = useCart();
  const numItemsInCart = cart.length;
  const getItemQuantity = (id: number): number => {
    const cartItem = cart.find((item) => item.recipe.id === id);
    return cartItem?.quantity || 0;
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.recipe.price * item.quantity,
    0
  );

  return (
    <>
      <div className=" relative">
        <button onClick={onOpen}>
          <ShopingCard width={40} height={40} />
          {numItemsInCart > 0 && (
            <Badge
              colorScheme="red"
              borderRadius="full"
              position="absolute"
              fontSize="0.8em"
              top="-5px"
              right="-5px"
            >
              {numItemsInCart}
            </Badge>
          )}
        </button>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Детали за кошничката</DrawerHeader>

          <DrawerBody>
            {cart.length === 0 ? (
              <p>Кошничката е Празна.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.recipe.id} className="py-2">
                    <hr />
                    <div className="grid grid-cols-2 py-4 items-center">
                      <div>
                        <img
                          src={item.recipe.img}
                          alt={item.recipe.title}
                          className="w-28 h-28"
                        />
                      </div>
                      <div>
                        <p className="pb-3">{item.recipe.title}</p>
                        <p className="pb-3">
                          Количина {getItemQuantity(item.recipe.id)}
                        </p>
                        <p className="font-semibold text-black">
                          Цена {item.recipe?.price} ден
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}
            {cart.length > 0 && (
              <div className="text-center pt-3 font-bold pb-5">
                Вкупно: {totalPrice.toFixed(2)} ден
              </div>
            )}
          </DrawerBody>

          {cart.length > 0 && (
            <DrawerFooter>
              <div>
                <div className="pb-5">
                  <button
                    className="bg-OrangePrimary w-full text-white font-semibold py-2 px-4 flex justify-center no-underline rounded-xl"
                    onClick={() => clearCart()}
                  >
                    Отстрани ги сите
                  </button>
                </div>

                <div>
                  <button className="bg-OrangePrimary w-full text-white font-semibold py-2 px-4 flex justify-center no-underline rounded-xl">
                    <Link href="/checkout" className="no-underline">
                      Продолжете кон наплата
                    </Link>
                  </button>
                </div>
              </div>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
