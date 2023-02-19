/* eslint-disable @next/next/no-img-element */

import { Recipes } from "@/types/profiles";
import StarOutline from "../../../public/images/Icons/starborder.svg";
import StarIconFull from "../../../public/images/Icons/fullstar.svg";
import LocationAddress from "../../../public/images/Icons/location.svg";
import Link from "next/link";
import ShopingIcon from "../../../public/images/Icons/korpa-button.svg";
import DiliveryIcon from "../../../public/images/Icons/dilivery.svg";
import NoDiliveryIcon from "../../../public/images/Icons/no-dilivery.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCart } from "../context/context";
import dayjs from "dayjs";

interface Props {
  recipesData: Recipes;
}

const today = dayjs();
const nextMonth = [...Array(31)].map((_, index) => {
  return {
    month: today.add(index, "day").locale("mk").format("MMMM, D"),
  };
});

const CardCooks = ({ recipesData }: Props) => {
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
    <div className="w-full md:w-1/3 p-4 flex flex-col xl:flex-grow-0 xl:flex-shrink-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden shadow-lg relative -z-10 ">
        <img
          src={recipesData.img}
          alt={recipesData.title}
          className="h-56 w-full object-cover"
        />
        {recipesData.delivery ? (
          <DiliveryIcon className="absolute top-0 left-0" />
        ) : (
          <NoDiliveryIcon className="absolute top-0 left-0" />
        )}
      </div>
      <div className=" bg-[#FFF2E2] rounded-t-[35px] rounded-b-[35px] -mt-6 shadow-lg  ">
        <div className="pr-3 xl:pl-0 grid grid-cols-3 justify-between items-center ">
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src={recipesData.profiles.avatar_url}
              alt="avatar"
            />
          </div>
          <div>
            <div>
              <h4 className="text-lg -ml-7 font-medium text-gray-900 truncate text-ellipsis -mt-2 pb-1">
                {recipesData.title}
              </h4>
            </div>
            <div className="flex -ml-7 -mt-2">
              {[...Array(5)].map((_, index) =>
                index < recipesData?.raiting ? (
                  <StarIconFull key={index} width={22} height={23} />
                ) : (
                  <StarOutline key={index} width={22} height={23} />
                )
              )}
            </div>
            <div className="flex justify-between -ml-7">
              <div className="flex justify-between items-center ">
                <LocationAddress className="mr-3" />
                <h4 className=" text-sm text-black">
                  {recipesData.recipe_address}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-base text-right font-medium xl:mb-3  text-OrangeSecondary pr-3">
                {recipesData.price}ден
              </h4>
            </div>
            <div className="flex justify-center pr-8 xl:pt-0 pt-3 relative">
              <button
                onClick={handleOpen}
                className="  bg-OrangeSecondary  text-white rounded-[20px] xl:pl-[20px] xl:pr-10 pl-[15px] pr-10 py-[5px] text-sm whitespace-nowrap"
              >
                Во кошничка
              </button>

              <ShopingIcon className="absolute xl:top-[7px] top-[18px] xl:right-[12px] right-[15px]" />
              <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{recipesData.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <img
                      src={recipesData.img}
                      alt={recipesData.title}
                      className="h-56 w-full object-cover"
                    />
                    <p className="py-4">{recipesData.desc}</p>
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
                        <span className="text-2xl font-semibold">
                          {quantity}
                        </span>
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
                        handleAddToCart(recipesData, quantity);
                        handleClose();
                        console.log(
                          "recipe",
                          recipesData,
                          "quantity",
                          quantity
                        );
                      }}
                      className=" w-full rounded-xl bg-OrangeSecondary text-white py-2 px-4"
                    >
                      Додади во кошничка - {recipesData.price}
                    </button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCooks;
