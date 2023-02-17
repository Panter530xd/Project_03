/* eslint-disable @next/next/no-img-element */
import StarOutline from "../../../public/images/Icons/starborder.svg";
import StarIconFull from "../../../public/images/Icons/fullstar.svg";
import DiliveryIcon from "../../../public/images/Icons/dilivery.svg";
import NoDiliveryIcon from "../../../public/images/Icons/no-dilivery.svg";
import HeratIcon from "../../../public/images/Icons/heart.svg";
import ClockIcon from "../../../public/images/Icons/clock.svg";
import Link from "next/link";
import { Recipes } from "@/types/profiles";

interface Props {
  recipe: Recipes;
}
const CardRecipesCook = ({ recipe }: Props) => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden  relative ">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute top-2 right-2">
          <HeratIcon />
        </div>

        {recipe.delivery ? (
          <DiliveryIcon className="absolute top-2 left-2" />
        ) : (
          <NoDiliveryIcon className="absolute top-2 left-2" />
        )}
      </div>
      <div className=" bg-white shadow-lg rounded-b-xl ">
        <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
          <div>
            <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
              {recipe.title}
            </h2>
            <div className="flex">
              {[...Array(5)].map((_, index) =>
                index < recipe.raiting ? (
                  <StarIconFull key={index} width={22} height={23} />
                ) : (
                  <StarOutline key={index} width={22} height={23} />
                )
              )}
            </div>
          </div>
          <div className=" text-OrangeSecondary font-semibold">
            {recipe.price}ден
          </div>
        </div>
        <div className="xl:px-8 px-3 pt-3">
          <h5 className=" truncate text-ellipsis">{recipe.desc}</h5>
        </div>
        <div className="flex xl:px-8 px-3 pt-3">
          <ClockIcon />
          <h3 className="pl-3">{recipe.delivery_time}</h3>
        </div>

        <div className="flex justify-center py-5 ">
          <Link
            href={`/${recipe.id}`}
            className="text-white bg-OrangeSecondary rounded-[20px] px-4 py-2"
          >
            Додај во кошничка
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRecipesCook;
