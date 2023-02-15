/* eslint-disable @next/next/no-img-element */

import { Recipes } from "@/types/profiles";
import StarOutline from "../../../public/images/Icons/starborder.svg";
import StarIconFull from "../../../public/images/Icons/fullstar.svg";
import LocationAddress from "../../../public/images/Icons/location.svg";
import Link from "next/link";
import ShopingIcon from "../../../public/images/Icons/korpa-button.svg";
import DiliveryIcon from "../../../public/images/Icons/dilivery.svg";
import NoDiliveryIcon from "../../../public/images/Icons/no-dilivery.svg";
interface Props {
  recipesData: Recipes;
}

const CardCooks = ({ recipesData }: Props) => {
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
              <Link href="/gotvaci">
                <button className="  bg-OrangeSecondary  text-white rounded-[20px] xl:pl-[20px] xl:pr-10 pl-[15px] pr-10 py-[5px] text-sm whitespace-nowrap">
                  Во кошничка
                </button>
              </Link>
              <ShopingIcon className="absolute xl:top-[7px] top-[18px] xl:right-[12px] right-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCooks;
