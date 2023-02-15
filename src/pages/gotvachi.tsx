/* eslint-disable react-hooks/rules-of-hooks */
import CardCooks from "@/components/card-profiles/CardCooks";
import { Profiles } from "@/types/profiles";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
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
import SearchAddressMenu from "@/components/search-address/SearchAddresMenu";
import StarRaitingFilter from "@/components/star-raiting/StarRaitingFilter";
import ResetButton from "@/components/reset-button/ResetButton";
import CusineCooks from "@/components/cusine-type/CusineCooks";

interface Props {
  filteredProfiles: Profiles[];
  message: string;
  filteredProfilesByQuery: Profiles[];
}

const cooksPageOfficial: NextPage<Props> = ({ filteredProfiles, message }) => {
  const [showingRecipes, setShowingRecipes] = useState(6);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleShowMore = () => {
    setShowingRecipes(showingRecipes + 3);
    if (showingRecipes >= filteredProfiles?.length) {
      setShowMoreButton(false);
    }
  };

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [filteredProfiles]);
  return (
    <div>
      <div className="flex items-center justify-center py-20 relative">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Нашите Готвачи
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <Image
          src="/images/background-images/slika-golema-gotvaci.png"
          className=" absolute top-0 right-0 hidden lg:block"
          alt="Food"
          width={250}
          height={300}
        />
      </div>
      <div className=" w-9/12 mx-auto text-center pb-10">
        <p className="pb-5">
          Јади Домашно поврзува талентирани готвачи со локални клиенти.
        </p>
        <p>
          Ние веруваме во обезбедувањето на шефовите во нашата заедница -
          поединци кои отсекогаш сонувале да градат сопствен бизнис со храна -
          можност да заработат значаен приход правејќи го она што го сакаат!
          Ние, исто така, веруваме дека секој човек треба да има пристап до
          здрав, домашен оброк по прифатлива цена. Градење заедница посветена на
          економско зајакнување и културна инклузивност - затоа почнавме да го
          градиме нашето семејство Јади Домашно.
        </p>
      </div>
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

        <div className="shadow-lg bg-[#FFF2E2] grow rounded-t-2xl mt-4 md:block hidden w-1/5 h-3/6">
          <div>
            <SearchAddressMenu profilesAllData={filteredProfiles} />
          </div>

          <div>
            <StarRaitingFilter />
          </div>
          <div>
            <CusineCooks />
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
                    <SearchAddressMenu profilesAllData={filteredProfiles} />
                  </div>
                  <div>
                    <StarRaitingFilter />
                  </div>
                  <div>
                    <CusineCooks />
                  </div>
                  <div className="flex justify-center pb-5">
                    <ResetButton />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="flex flex-wrap xl:w-10/12 w-12/12 xl:mx-auto xl:ml-5 justify-center pb-10  h-fit">
          {filteredProfiles &&
            filteredProfiles
              .slice(0, showingRecipes)
              .map((profile: Profiles) => {
                return <CardCooks profile={profile} key={profile.id} />;
              })}
          <div className="flex justify-center py-8">
            {filteredProfiles?.length > showingRecipes && (
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

  const { data: profilesData } = await supabase.from("profiles").select("*");

  const profilesId = profilesData?.map((profile) => profile.id);

  const { data: recipesData } = await supabase
    .from("recipes")
    .select("*")
    .in("profiles_id", [...(profilesId as string[])]);

  const accumulatedRatingsPerProfile: any = {};

  const numberOfRecipes: any = {};

  recipesData?.forEach((recipe) => {
    if (accumulatedRatingsPerProfile[recipe.profiles_id]) {
      accumulatedRatingsPerProfile[recipe.profiles_id] = Math.floor(
        (recipe.raiting + accumulatedRatingsPerProfile[recipe.profiles_id]) /
          numberOfRecipes[recipe.profiles_id] +
          1
      );
      numberOfRecipes[recipe.profiles_id] =
        numberOfRecipes[recipe.profiles_id] + 1;
    } else {
      accumulatedRatingsPerProfile[recipe.profiles_id] = recipe.raiting;
      numberOfRecipes[recipe.profiles_id] = 1;
    }
  });

  const { address, rating, cusines } = ctx.query;

  const matchFilter: Record<string, any> = {};

  if (address) {
    matchFilter.user_adress = address;
  }

  let query = supabase.from("profiles").select("*");

  if (Object.keys(matchFilter).length > 0) {
    query = query.match(matchFilter);
  }

  let { data: filteredProfilesByQuery } = await query;

  const userProfiles = filteredProfilesByQuery?.map((profile) => {
    return {
      ...profile,
      averageRating: accumulatedRatingsPerProfile[profile.id]
        ? accumulatedRatingsPerProfile[profile.id]
        : null,
    };
  });

  let filteredProfiles = userProfiles
    ? userProfiles.filter((profile) => profile.user_tipe === "cook")
    : [];

  if (cusines) {
    filteredProfiles = filteredProfiles.filter((item) =>
      item.user_cusine.includes(cusines)
    );
  }

  if (rating) {
    filteredProfiles = filteredProfiles.filter(
      (item: Profiles) => item.averageRating.toString() === rating
    );
  }

  let message = "";
  if (filteredProfiles?.length === 0) {
    message = "Извинете немаме такви готвачи.";
  }

  return {
    props: {
      filteredProfiles,
      message,
    },
  };
};

export default cooksPageOfficial;
