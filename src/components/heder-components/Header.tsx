import Link from "next/link";
import { useRouter } from "next/router";
import FirstIcon from "/public/images/Icons/Group 13934.svg";
import SecondIcon from "/public/images/Icons/mdi_cook.svg";
import OfferIcon from "/public/images/Icons/Group 13930.svg";
import MenuIcon from "/public/images/Icons/fluent-emoji-high-contrast_fork-and-knife-with-plate.svg";
import ForumIcon from "/public/images/Icons/Vector.svg";
import Logo from "/public/images/Icons/logo-jadi-domasno 1.svg";
import SearchIcon from "/public/images/Icons/ei_search.svg";
import HamburgerIcon from "/public/images/Icons/bars-solid.svg";
import CanselIcon from "/public/images/Icons/xmark-solid.svg";
import { useState } from "react";
import UserCreateAccount from "./UserCreateAccount";
import Card from "./Cart";
import { Recipes } from "@/types/profiles";
import SearchAll from "./SearchAll";

interface Props {
  recipe: Recipes;
  quantity: number;
  onClick: () => void;
}

export default function Header({ recipe, quantity, onClick }: Props) {
  const { asPath } = useRouter();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-[#F1F1F1] shadow-xl p-3 flex xl:min-w-full w-full  xl:items-center xl:justify-center ">
      <Link
        href="/"
        className="text-OrangePrimary xl:text-lg text-xs xl:ml-5 xl:mr-8 whitespace-nowrap xl:whitespace-normal"
      >
        <Logo className="mx-auto xl:w-12 xl:h-12" width={42} height={42} />
        Јади Домашно
      </Link>
      <div
        className={`mt-36 md:mt-0 xl:mt-0 md:block  ${
          navbar
            ? "md:p-0 block pb-40 md:pb-0 xl:pb-0 overflow-y-hidden w-screen h-screen"
            : "hidden"
        }`}
      >
        <ul className="h-screen md:h-auto justify-center md:flex text-center xl:items-center absolute xl:static ">
          <li className="mr-4 pt-3">
            <Link
              href="/kako_funkcionira_gotvachi"
              className={`text-hederColor text-lg ${
                asPath === "/kako_funkcionira_gotvachi" ? "text-active" : ""
              }`}
            >
              <FirstIcon
                className={`mx-auto ${
                  asPath === "/kako_funkcionira_gotvachi"
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={39}
                height={35}
              />
              Како функционира
            </Link>
          </li>
          <li className="mr-4 pt-3 ">
            <Link
              href="/gotvachi"
              className={`text-hederColor text-lg  ${
                asPath === "/gotvachi" ? "text-active" : ""
              }`}
            >
              <SecondIcon
                className={`mx-auto ${
                  asPath === "/gotvachi"
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={38}
                height={38}
              />
              Готвачи
            </Link>
          </li>
          <li className="mr-4 pt-3">
            <Link
              href=""
              className={`text-hederColor text-lg ${
                asPath === "" ? "text-active" : ""
              }`}
            >
              <OfferIcon
                className={`mx-auto ${
                  asPath === ""
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={35}
                height={38.81}
              />
              Побарај понуда
            </Link>
          </li>
          <li className="mr-4 pt-5">
            <Link
              href="/menu"
              className={`text-hederColor text-lg ${
                asPath === "/menu" ? "text-active" : ""
              }`}
            >
              <MenuIcon
                className={`mx-auto ${
                  asPath === "/menu"
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={36}
                height={32}
              />
              Мени
            </Link>
          </li>
          <li className="pt-5">
            <Link
              href=""
              className={`text-hederColor text-lg ${
                asPath === "" ? "text-active" : ""
              }`}
            >
              <ForumIcon
                className={`mx-auto ${
                  asPath === ""
                    ? " fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={42.86}
                height={30}
              />
              Форум
            </Link>
          </li>
        </ul>
      </div>
      <SearchAll />

      <ul className="flex">
        <li className="xl:mr-4">
          <UserCreateAccount />
        </li>
        <li className="xl:pt-5 pt-3 mr-2">
          <Card recipe={recipe} quantity={quantity} onClick={onClick} />
        </li>
      </ul>

      <div className="md:hidden pt-4 xl:pt-0">
        <button
          className=" text-FooterMainColor outline-none"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <CanselIcon width={30} height={30} alt="logo" />
          ) : (
            <HamburgerIcon
              width={30}
              height={30}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          )}
        </button>
      </div>
    </nav>
  );
}
