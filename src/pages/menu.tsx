import CardRecipes from "@/components/card-profiles/CardRecipes";
import SliderFood from "@/components/slider/SliderFood";
import { Profiles, Recipes } from "@/types/profiles";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";
import Slider from "../components/slider/Slider";
import { useRef, useEffect, useState } from "react";
import SearchAddressMenu from "@/components/search-address/SearchAddresMenu";
import Available from "@/components/available/Available";
import FilterPrice from "@/components/filter-price/FilterPrice";
import Alergens from "@/components/alergeni/Alergens";
import StarRaitingFilter from "@/components/star-raiting/StarRaitingFilter";
import DiliveryFilter from "@/components/dilivery/DiliveryFilter";
import ResetButton from "@/components/reset-button/ResetButton";
import FilterSolidIcon from "../../public/images/Icons/filter-solid.svg";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

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
  const [showingRecipes, setShowingRecipes] = useState(12);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleShowMore = () => {
    setShowingRecipes(showingRecipes + 3);
    if (showingRecipes + 3 >= recipesData.length) {
      setShowMoreButton(false);
    }
  };

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
        className="xl:flex justify-center xl:w-11/12 mx-auto"
      >
        <div className="lg:hidden relative py-4">
          <button
            onClick={onOpen}
            className="text-white text-center  bg-OrangeSecondary rounded-[20px] px-8 py-2 ml-5 "
          >
            Покажи Филтри
          </button>
          <FilterSolidIcon
            width={20}
            height={20}
            className=" fill-white absolute top-[27px] left-7"
          />
        </div>

        <div className="shadow-lg bg-[#FFF2E2] grow rounded-t-2xl mt-4 md:block hidden h-3/6">
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
          <div>
            <DiliveryFilter />
          </div>
          <div className="flex justify-center pb-5">
            <ResetButton />
          </div>
        </div>
        <div className="lg:hidden">
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Филтрирај</ModalHeader>
              <ModalBody>
                <div className="shadow-lg bg-[#FFF2E2] grow rounded-t-2xl mt-4">
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
                  <div>
                    <DiliveryFilter />
                  </div>
                  <div className="flex justify-center pb-5">
                    <ResetButton />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onClick={onClose}>
                  Затвори
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="flex flex-wrap xl:w-10/12 w-12/12 xl:mx-auto xl:ml-5 justify-center pb-10  h-fit">
          {recipesData.slice(0, showingRecipes).map((recipe: Recipes) => {
            return <CardRecipes recipesData={recipe} key={recipe.id} />;
          })}
          <div className="flex justify-center py-8">
            {recipesData.length > showingRecipes && (
              <div className="text-center mt-4">
                <button
                  className="text-white text-center  bg-OrangeSecondary rounded-[20px] px-8 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={handleShowMore}
                >
                  Покажи Повеќе
                </button>
              </div>
            )}
            <h2 className="text-center text-2xl font-semibold">{message}</h2>
          </div>
        </div>
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
    delivery,
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

  if (delivery) {
    matchFilter.delivery = delivery;
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
