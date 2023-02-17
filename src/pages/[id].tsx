/* eslint-disable @next/next/no-img-element */

import { GetServerSideProps, NextPage } from "next";
import { GurmanInterface, Profiles, Recipes } from "@/types/profiles";
import Image from "next/image";
import MessageIcon from "../../public/images/Icons/message-icon.svg";
import { Key } from "react";
import LocationAddress from "../../public/images/Icons/location-big.svg";
import Location from "../../public/images/Icons/entypo_location-pin.svg";
import Link from "next/link";
import ShareButton from "@/components/shared/ShareButton";
import SingleStarIcon from "../../public/images/Icons/star.svg";
import PreglediIcon from "../../public/images/Icons/pregledi.svg";
import DostaviiIcon from "../../public/images/Icons/dostavi.svg";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Slider from "@/components/slider/Slider";
import CardRecipesCook from "@/components/card-profiles/CardRecipesCook";
import CardRecipesStatic from "@/components/card-profiles/CardRecipesStatic";
import CardStaticDeserds from "@/components/card-profiles/CardStaticDeserds";
import SliderComments from "@/components/slider/SliderComments";
import ResetDateCook from "@/components/reset-button/ResetDateCook";

interface Props {
  Cooks: Profiles;
  recipes: Recipes[];
  gurmansWithReviews: GurmanInterface[];
}

const CooksPage: NextPage<Props> = ({ Cooks, gurmansWithReviews }) => {
  const { filterMessage, filteredRecipes } = Cooks;
  const cuisines = JSON.parse(Cooks.user_cusine);

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
      <div className="pb-10">
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
      <div className="text-center ">
        <h3 className="xl:text-2xl font-bold text-black pb-4 xl:pb-0">
          Одбери датум:
        </h3>
        <Slider />
      </div>
      <div className="  bg-[#f8f1e9] py-20">
        <div className="xl:w-10/12 mx-auto">
          <h3 className="xl:text-2xl font-semibold text-OrangeSecondary pl-7">
            ДОСТАПНИ ЈАДЕЊА ЗА НЕДЕЛА
          </h3>
          <div className="flex flex-wrap py-10">
            {filteredRecipes?.slice(0, 3).map((recipe: Recipes) => {
              return <CardRecipesCook recipe={recipe} key={recipe.id} />;
            })}
            <div className=" w-7/12 mx-auto">
              <h2 className="flex justify-center xl:text-2xl text-OrangeSecondary font-semibold">
                {filterMessage}
              </h2>
              <div className="flex justify-center pt-3">
                <ResetDateCook />
              </div>
            </div>
          </div>

          <h3 className="xl:text-2xl font-semibold text-black pl-7">
            ПРЕДЛОГ ДОДАТОЦИ КОН ЈАДЕЊАТА ЗА НЕДЕЛА
          </h3>
          <div className="flex flex-wrap py-10">
            <CardRecipesStatic />
          </div>
          <h3 className="xl:text-2xl font-semibold text-black pl-7">
            ПРЕДЛОГ ДЕСЕРТИ ЗА НЕДЕЛА
          </h3>
          <div className="flex flex-wrap py-10">
            <CardStaticDeserds />
          </div>
          <div>
            <h3 className="xl:text-2xl font-semibold text-black pl-7">
              ПРЕПОРАКИ ЗА ЈАДЕЊАТА НА ГОТВАЧОТ ОД ПРЕТХОДНИ КОРИСНИЦИ (12)
            </h3>
            {<SliderComments gurmansWithReviews={gurmansWithReviews} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const { id } = ctx.query;
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

  const { data: gurmanData, error: gurmanDataError } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_tipe", "gurman");

  if (gurmanDataError) {
    return {
      notFound: true,
    };
  }

  const gurmanIds = gurmanData.map((gurman) => gurman.id);

  const { data: reviewsData, error: reviewsError } = await supabase
    .from("reviews")
    .select("*")
    .in("profile_id", gurmanIds);

  if (reviewsError) {
    return {
      notFound: true,
    };
  }

  const gurmansWithReviews = gurmanData.map((gurman) => {
    const gurmanReviews = reviewsData.filter(
      (review) => review.profile_id === gurman.id
    );

    console.log("gurman", gurman);
    console.log("gurmanReviews", gurmanReviews);

    return {
      ...gurman,
      reviews: gurmanReviews,
    };
  });

  const ratings = recipesData?.map((recipe) => recipe.raiting);
  const numberOfRatings = ratings?.length || 0;
  const totalRatings = ratings?.reduce((sum, rating) => sum + rating, 0) || 0;
  const averageRating = totalRatings / numberOfRatings || 0;

  const { selectedDate } = ctx.query;
  let query = supabase.from("recipes").select("*").eq("profiles_id", id);
  const matchFilter: Record<string, any> = {};

  if (selectedDate) {
    matchFilter.selected_date = selectedDate;
  }

  if (Object.keys(matchFilter).length > 0) {
    query = query.match(matchFilter);
  }

  let { data: recipesFilteredData } = await query;

  let message = "";

  if (recipesFilteredData?.length === 0) {
    message = "Нема достапни рецепти за избраниот датум.";
  }

  console.log("filter", recipesFilteredData);
  return {
    props: {
      Cooks: {
        ...cooksData,
        averageRating,
        recipes: recipesAllData,
        filteredRecipes: recipesFilteredData,
        filterMessage: message,
      },
      gurmansWithReviews,
    },
  };
};

export default CooksPage;
