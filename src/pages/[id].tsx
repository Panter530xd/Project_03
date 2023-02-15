/* eslint-disable @next/next/no-img-element */
import { supabase } from "../pages/utils/suapbase";
import { GetServerSideProps, NextPage } from "next";
import { Profiles } from "@/types/profiles";
import Image from "next/image";
import MessageIcon from "../../public/images/Icons/message-icon.svg";
import ShareIcon from "../../public/images/Icons/share-icon.svg";
import { Key } from "react";
import LocationAddress from "../../public/images/Icons/location-big.svg";
import Location from "../../public/images/Icons/entypo_location-pin.svg";
import Link from "next/link";
import ShareButton from "@/components/shared/ShareButton";
import SingleStarIcon from "../../public/images/Icons/star.svg";
import PreglediIcon from "../../public/images/Icons/pregledi.svg";
import DostaviiIcon from "../../public/images/Icons/dostavi.svg";
interface Props {
  Cooks: Profiles;
}

const CooksPage: NextPage<Props> = ({ Cooks }) => {
  const { recipes } = Cooks;
  const cuisines = JSON.parse(Cooks.user_cusine);
  console.log(Cooks);
  return (
    <div>
      <div>
        <Image
          src="/images/background-images/cover-cook.png"
          alt="Cover-Cook"
          width={1917}
          height={509}
          className="object-cover w-full"
        />
      </div>
      <div className=" pb-28">
        <div>
          <div className=" xl:grid xl:grid-cols-4 xl:gap-2 w-11/12 mx-auto py-7 justify-end items-center">
            <div>
              <img
                src={Cooks.avatar_url}
                alt="avatar"
                className=" xl:w-64 xl:h-64 w-40 h-40 object-cover rounded-full"
              />
            </div>

            <div className="flex justify-start py-5">
              <h2 className="xl:text-5xl text-xl font-semibold text-black text-left">
                {Cooks.full_name}
              </h2>
            </div>

            <div className="flex xl:justify-center items-center pb-5 xl:py-7">
              <ShareButton />
            </div>
            <div>
              <div>
                <h3 className="xl:text-2xl text-lg text-black pb-1 font-semibold">
                  ИМАТЕ ПРАШАЊА?
                </h3>
                <div className=" relative">
                  <button className="text-lg font-semibold xl:mb-2 rounded-lg py-2 pl-16 pr-5 bg-white text-black border border-OrangePrimary text-ellipsis truncate">
                    Прати порака на Готвачот
                  </button>
                  <MessageIcon className=" absolute top-2  left-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:w-7/12 mx-auto xl:-mt-20 w-11/12 ">
          <div className="xl:grid xl:grid-cols-3  xl:gap-1 xl:justify-center">
            <div className="flex justify-start items-center pb-5 xl:pb-0 pr-3 xl:col-span-1">
              {cuisines.map((cusine: Key | null | undefined) => (
                <p
                  className=" text-left text-xl font-semibold text-OrangeSecondary text-ellipsis truncate hover:text-clip"
                  key={cusine}
                >
                  {cusine}
                </p>
              ))}
              <div>
                <img src="/images/images-static/chorba.png" alt="chorba" />
              </div>
            </div>

            <div className="flex xl:justify-center items-center pb-5 xl:pb-0 xl:col-span-1">
              <LocationAddress width={28} height={30} />
              <h3 className="pl-3">{Cooks.user_adress}</h3>
            </div>

            <div className="xl:col-span-1">
              <Link
                href="/https://www.google.com/maps"
                className="flex justify-start items-center text-black hover:underline text-lg xl:whitespace-nowrap whitespace-normal"
              >
                <Location />
                Види точна адреса
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:justify-start xl:w-7/12 w-11/12 grid gap-3 mx-auto py-7">
          <div className="relative mr-4">
            <button className="text-black bg-[#ECDB9D] py-2 px-14 border border-hederColor rounded-[15px]">
              {Cooks.averageRating.toFixed(1)}
            </button>
            <SingleStarIcon className="absolute top-2 left-4" />
          </div>
          <div className="relative mr-4">
            <button className="text-black bg-[#ECDB9D] py-2 px-14 border border-hederColor rounded-[15px]">
              38 прегледи
            </button>
            <PreglediIcon className="absolute top-3 left-4" />
          </div>
          <div className="relative">
            <button className="text-black bg-[#ECDB9D] py-2 px-14 border border-hederColor rounded-[15px]">
              25 достави
            </button>
            <DostaviiIcon className="absolute top-2 left-4" />
          </div>
        </div>
        <div className="flex justify-start xl:w-7/12 w-11/12 mx-auto py-7 ">
          <p>
            Израснав со традиционалната храна која секојдневно ни ја
            приготвуваше мајка ми во семејството. Оттаму и мојата љубов и желба
            да ја продолжам фамилијарната традиција, притоа додавајќи намирници
            и зачини кои доловуваат уникатен вкус на секој оброк кој го
            приготвувам...
            <span className=" text-OrangePrimary">дознај повеќе</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const { data: cooksData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return {
      notFound: true,
    };
  }

  const { data: recipesData, error: recipeError } = await supabase
    .from("recipes")
    .select("raiting")
    .eq("profiles_id", id);

  if (recipeError) {
    return {
      notFound: true,
    };
  }

  const { data: recipesAllData, error: recipesError } = await supabase
    .from("recipes")
    .select("*")
    .eq("profiles_id", id);

  if (recipesError) {
    return {
      notFound: true,
    };
  }

  const ratings = recipesData?.map((recipe) => recipe.raiting);
  const numberOfRatings = ratings?.length || 0;
  const totalRatings = ratings?.reduce((sum, rating) => sum + rating, 0) || 0;
  const averageRating = totalRatings / numberOfRatings || 0;

  return {
    props: {
      Cooks: {
        ...cooksData,
        averageRating,
        recipes: recipesAllData,
      },
    },
  };
};

export default CooksPage;
