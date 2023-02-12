import CusineIcon from "../../../public/images/Icons/restoran.svg";
import SaladsIcon from "../../../public/images/Icons/cusine-all.svg";
import BurgerIcon from "../../../public/images/Icons/burger-solid.svg";
import SoupIcon from "../../../public/images/Icons/corbi-supi.svg";
import HomeMadeIcon from "../../../public/images/Icons/peciva.svg";
import VegeHeltyIcon from "../../../public/images/Icons/zdrava-hrana.svg";
import CokeeIcon from "../../../public/images/Icons/deserti.svg";
import GlutenIcon from "../../../public/images/Icons/gluten-free.svg";
import LowFetIcon from "../../../public/images/Icons/nisko-kaloricna.svg";
import ItalianIcon from "../../../public/images/Icons/italian-food.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

const icons = {
  CusineIcon: <CusineIcon width={50} height={50} />,
  SaladsIcon: <SaladsIcon width={50} height={50} />,
  BurgerIcon: <BurgerIcon width={50} height={50} />,
  SoupIcon: <SoupIcon width={50} height={50} />,
  HomeMadeIcon: <HomeMadeIcon width={50} height={50} />,
  VegeHealthyIcon: <VegeHeltyIcon width={50} height={50} />,
  CokeeIcon: <CokeeIcon width={50} height={50} />,
  GlutenIcon: <GlutenIcon width={50} height={50} />,
  LowFatIcon: <LowFetIcon width={50} height={50} />,
  ItalianIcon: <ItalianIcon width={50} height={50} />,
};

interface CusineTypes {
  id: number;
  name: string;
  icon: ReactNode;
}

const cusines: CusineTypes[] = [
  {
    id: 1,
    name: "Традиционална кујна",
    icon: icons.CusineIcon,
  },

  { id: 2, name: "Десерти", icon: icons.CokeeIcon },
  { id: 3, name: "Пецива", icon: icons.HomeMadeIcon },
  {
    id: 4,
    name: "Италијанска кујна",
    icon: icons.ItalianIcon,
  },
  {
    id: 5,
    name: "Здрава храна",
    icon: icons.VegeHealthyIcon,
  },
  {
    id: 6,
    name: "Безглутенска храна",
    icon: icons.GlutenIcon,
  },
  { id: 7, name: "Чорби и супи", icon: icons.SoupIcon },
  { id: 8, name: "Raw храна", icon: icons.VegeHealthyIcon },
  {
    id: 9,
    name: "Домашни бургери и пици",
    icon: icons.BurgerIcon,
  },
  {
    id: 10,
    name: "Нискокалорична храна",
    icon: icons.LowFatIcon,
  },
  {
    id: 11,
    name: "Мексиканска кујна",
    icon: icons.SaladsIcon,
  },
  {
    id: 12,
    name: "Вегетаријанска кујна",
    icon: icons.VegeHealthyIcon,
  },
];

const SliderFood = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const router = useRouter();

  const handleCuisineClick = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    router.push({
      pathname: "/menu",
      query: { ...router.query, cuisine },
    });
  };
  return (
    <div className="w-11/12 mx-auto xl:py-20 pb-10">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 2,
          mediaQuery: "min",
          breakpoints: {
            640: {
              perPage: 5,
            },
          },
        }}
        aria-label="My Favorite Dates"
      >
        {cusines.map((cuisine) => (
          <SplideSlide key={cuisine.id}>
            <div
              className={`text-center bg-white rounded-xl shadow-lg border-b-2 border-gray-400  py-4 xl:px-4 hover:text-OrangePrimary hover:fill-OrangePrimary flex justify-center items-center ${
                selectedCuisine === cuisine.name
                  ? " text-OrangePrimary fill-OrangePrimary"
                  : ""
              }`}
              onClick={() => handleCuisineClick(cuisine.name)}
            >
              <h2 className="mr-2 hover:fill-OrangePrimary hover:text-OrangePrimary">
                {cuisine.icon}
              </h2>
              <h2 className="pb-1 xl:text-lg font-normal truncate">
                {cuisine.name}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderFood;
