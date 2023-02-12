import CardRecipes from "@/components/card-profiles/CardRecipes";
import SliderFood from "@/components/slider/SliderFood";
import { Profiles, Recipes } from "@/types/profiles";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";
import Slider from "../components/slider/Slider";
import { useRef, useEffect } from "react";
import SearchAddressMenu from "@/components/search-address/SearchAddresMenu";
import Available from "@/components/available/Available";
import FilterPrice from "@/components/filter-price/FilterPrice";
import Alergens from "@/components/alergeni/Alergens";
import StarRaitingFilter from "@/components/star-raiting/StarRaitingFilter";

interface Props {
  recipesData: Recipes[];
  message: string;
  profilesAllData: Profiles[];
}

const MenuPage: NextPage<Props> = ({
  recipesData,
  message,
  profilesAllData,
}) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipesData]);

  return (
    <div>
      <div className="flex items-center justify-center py-10 relative">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">Мени</h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <Slider />
      <SliderFood />
      <section
        ref={resultsRef}
        className="flex justify-center xl:w-11/12 mx-auto"
      >
        <div className="shadow-lg bg-[#FFF2E2] grow rounded-t-2xl mt-4 md:block hidden">
          <div>
            <SearchAddressMenu profilesAllData={profilesAllData} />
          </div>
          <div>
            <Available />
          </div>
          <div>
            <FilterPrice />
          </div>
          <div>
            <Alergens />
          </div>
          <div>
            <StarRaitingFilter />
          </div>
        </div>
        <div className="flex flex-wrap xl:w-10/12 w-12/12 xl:mx-auto xl:ml-5">
          {recipesData?.map((recipe: Recipes) => {
            return <CardRecipes recipesData={recipe} key={recipe.id} />;
          })}
        </div>
        <h2 className="text-center text-2xl font-semibold">{message}</h2>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const { data: profilesAllData } = await supabase.from("profiles").select("*");
  // PARAMETERS FROM URL
  const {
    cuisine,
    selectedDate,
    address,
    available,
    price,
    allergens,
    rating,
  } = ctx.query;

  const matchFilter: Record<string, any> = {};

  if (selectedDate) {
    matchFilter.selected_date = selectedDate;
  }

  if (cuisine) {
    matchFilter.cuisine = cuisine;
  }

  if (address) {
    matchFilter.recipe_address = address;
  }

  if (available) {
    matchFilter.available = available;
  }

  if (price) {
    matchFilter.price = price;
  }

  if (allergens) {
    matchFilter.allergens = allergens;
  }
  if (rating) {
    matchFilter.raiting = rating;
  }

  let query = supabase.from("recipes").select(
    `
id,
 img,
title,
desc,
raiting,
price,
 delivery,
delivery_time,
cuisine,
selected_date,
available,
recipe_address,
allergens,
      profiles (
        avatar_url,
        user_adress
      )
    `
  );

  if (Object.keys(matchFilter).length > 0) {
    query = query.match(matchFilter);
  }

  let { data: recipesData } = await query;

  let message = "";
  if (recipesData?.length === 0) {
    message = "Извинете немаме такви рецепти.";
  }

  return {
    props: {
      recipesData,
      message,
      profilesAllData,
    },
  };
};

export default MenuPage;
