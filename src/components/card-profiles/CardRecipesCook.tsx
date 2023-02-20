/* eslint-disable @next/next/no-img-element */
import StarOutline from "../../../public/images/Icons/starborder.svg";
import StarIconFull from "../../../public/images/Icons/fullstar.svg";
import DiliveryIcon from "../../../public/images/Icons/dilivery.svg";
import NoDiliveryIcon from "../../../public/images/Icons/no-dilivery.svg";
import HeratIcon from "../../../public/images/Icons/heart.svg";
import ClockIcon from "../../../public/images/Icons/clock.svg";
import dayjs from "dayjs";
import "dayjs/locale/mk";
import { Recipes } from "@/types/profiles";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useCart } from "../context/context";

const today = dayjs();
const nextMonth = [...Array(31)].map((_, index) => {
  return {
    month: today.add(index, "day").locale("mk").format("MMMM, D"),
  };
});

interface Props {
  recipe: Recipes;
  quantity: number;
  onClick: () => void;
}
const CardRecipesCook = ({ recipe }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleQuantityChange = (value: number) => {
    setQuantity((prevQuantity) => prevQuantity + value);
  };

  const { addToCart } = useCart();

  const handleAddToCart = (recipe: Recipes, quantity: number) => {
    addToCart(recipe, quantity);
  };

  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden  relative ">
        <img
          src={recipe?.img}
          alt={recipe?.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute top-2 right-2">
          <HeratIcon />
        </div>

        {recipe?.delivery ? (
          <DiliveryIcon className="absolute top-2 left-2" />
        ) : (
          <NoDiliveryIcon className="absolute top-2 left-2" />
        )}
      </div>
      <div className=" bg-white shadow-lg rounded-b-xl ">
        <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
          <div>
            <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
              {recipe?.title}
            </h2>
            <div className="flex">
              {[...Array(5)].map((_, index) =>
                index < recipe?.raiting ? (
                  <StarIconFull key={index} width={22} height={23} />
                ) : (
                  <StarOutline key={index} width={22} height={23} />
                )
              )}
            </div>
          </div>
          <div className=" text-OrangeSecondary font-semibold">
            {recipe?.price}ден
          </div>
        </div>
        <div className="xl:px-8 px-3 pt-3">
          <h5 className=" truncate text-ellipsis">{recipe?.desc}</h5>
        </div>
        <div className="flex xl:px-8 px-3 pt-3">
          <ClockIcon />
          <h3 className="pl-3">{recipe?.delivery_time}</h3>
        </div>

        <div className="flex justify-center py-5 ">
          <button
            onClick={handleOpen}
            className="text-white bg-OrangeSecondary rounded-[20px] px-4 py-2"
          >
            Додај во кошничка
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{recipe?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src={recipe?.img}
              alt={recipe?.title}
              className="h-56 w-full object-cover"
            />
            <p className="py-4">{recipe?.desc}</p>
            <div className="flex justify-between border-t border-gray-500 border-b py-7">
              <div>
                <h3 className="">Одбери датум и време на нарачка:</h3>
              </div>
              <div>
                <div>
                  <select className=" block w-32 p-2  text-sm text-gray-900 border  border-gray-400 rounded-xl bg-gray-50 focus:ring-OrangeSecondary focus:border-OrangeSecondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-OrangeSecondary  ">
                    {nextMonth.map((next, index) => (
                      <option key={index} value={next.month}>
                        {next.month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="py-2">
                  <select className=" block w-32 p-2  text-sm text-gray-900 border  border-gray-400 rounded-xl bg-gray-50 focus:ring-OrangeSecondary focus:border-OrangeSecondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-OrangeSecondary  ">
                    <option value="9:00">9:00 часот</option>
                    <option value="10:00">10:00 часот</option>
                    <option value="11:00">11:00 часот</option>
                    <option value="12:00">12:00 часот</option>
                    <option value="13:00">13:00 часот</option>
                    <option value="14:00">14:00 часот</option>
                    <option value="15:00">15:00 часот</option>
                    <option value="16:00">16:00 часот</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-5">
              <div>
                <h3>Одбери количина</h3>
              </div>
              <div className="flex justify-evenly border border-gray-400 rounded-xl px-7 py-1">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="text-2xl font-semibold mr-3"
                >
                  -
                </button>
                <span className="text-2xl font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="text-2xl font-semibold ml-3 "
                >
                  +
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => {
                handleAddToCart(recipe, quantity);
                handleClose();
              }}
              className=" w-full rounded-xl bg-OrangeSecondary text-white py-2 px-4"
            >
              Додади во кошничка - {recipe?.price}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardRecipesCook;
