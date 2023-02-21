/* eslint-disable @next/next/no-img-element */
import { Recipes } from "@/types/profiles";
import Link from "next/link";
import LocationAddress from "../../../public/images/Icons/location.svg";
interface Props {
  recipe: Recipes;
}
const CardRecipes = ({ recipe }: Props) => {
  return (
    <div className="w-full md:w-1/3 p-4 flex flex-col xl:flex-grow-0 xl:flex-shrink-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <div className="flex-1 rounded-t-3xl overflow-hidden shadow-lg relative -z-10 ">
        <img
          src={recipe?.img}
          alt={recipe?.title}
          className="h-56 w-full object-cover"
        />
      </div>
      <div className=" bg-[#FFF2E2]  rounded-b-[35px] py-5 shadow-lg  ">
        <div className=" px-5 grid grid-cols-2  ">
          <div>
            <h4 className="text-lg font-medium text-gray-900 pb-1 xl:whitespace-nowrap truncate">
              {recipe?.title}
            </h4>
            <div className="flex justify-between ">
              <div className="flex justify-between items-center ">
                <LocationAddress className="mr-3" />
                <h4 className=" text-sm text-black">
                  {recipe?.recipe_address}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-base text-right font-medium xl:mb-3  text-OrangeSecondary pr-3 pb-3 xl:pb-0">
                {recipe?.price}ден
              </h4>
            </div>
            <div className="flex justify-end">
              <Link
                className="  bg-OrangeSecondary py-1 px-5 text-white rounded-[20px]  text-sm whitespace-nowrap"
                href={"/menu"}
              >
                Дознај Повеќе
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardRecipes;
