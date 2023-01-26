import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import FirstIcon from "/public/images/Icons/Group 13934.svg";
import SecondIcon from "/public/images/Icons/mdi_cook.svg";
import OfferIcon from "/public/images/Icons/Group 13930.svg";
import MenuIcon from "/public/images/Icons/fluent-emoji-high-contrast_fork-and-knife-with-plate.svg";
import ForumIcon from "/public/images/Icons/Vector.svg";
import UserIcon from "/public/images/Icons/mdi_user-alert-outline.svg";
import ShopingCard from "/public/images/Icons/korpa.svg";
import Logo from "/public/images/Icons/logo-jadi-domasno 1.svg";
import SearchIcon from "/public/images/Icons/ei_search.svg";
import HamburgerIcon from "/public/images/Icons/bars-solid.svg";
import CanselIcon from "/public/images/Icons/xmark-solid.svg";
import { useState } from "react";

export default function Header() {
  const { asPath } = useRouter();
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-[#F1F1F1] shadow-xl  p-2 flex w-screen xl:min-w-full items-center justify-center">
      <div className="w-12/12 flex justify-center items-center xl:min-w-full mx-auto xl:text-lg">
        <Link
          href="/"
          className="text-OrangePrimary xl:text-lg text-[10px] xl:ml-8 xl:mr-8"
        >
          <Logo className="mx-auto xl:w-12 xl:h-12 " width={42} height={42} />
          Јади Домашно
        </Link>
        <ul className="xl:flex xl:items-center pb-3 pr-52 sm:flex-wrap hidden">
          <li className="mr-4 pt-3">
            <Link
              href="/"
              className={`text-hederColor text-lg ${
                asPath === "/" ? "text-active" : ""
              }`}
            >
              <FirstIcon
                className={`mx-auto ${
                  asPath === "/"
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={39}
                height={35}
              />
              Како функционира
            </Link>
          </li>
          <li className="mr-4 pt-3">
            <Link
              href="/cooks"
              className={`text-hederColor text-lg ${
                asPath === "/cooks" ? "text-active" : ""
              }`}
            >
              <SecondIcon
                className={`mx-auto ${
                  asPath === "/cooks"
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
              href="/offer"
              className={`text-hederColor text-lg ${
                asPath === "/offer" ? "text-active" : ""
              }`}
            >
              <OfferIcon
                className={`mx-auto ${
                  asPath === "/offer"
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
              href="/forum"
              className={`text-hederColor text-lg ${
                asPath === "/forum" ? "text-active" : ""
              }`}
            >
              <ForumIcon
                className={`mx-auto ${
                  asPath === "/forum"
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
        <div className="flex items-center justify-center shedow-xl xl:pr-20">
          <form className="shedow-xl">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <SearchIcon className="mx-auto" width={28} height={28} />
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-hederColor rounded-[20px] pl-10 border border-hederColor focus:outline-none focus:bg-white focus:text-gray-900 xl:w-96 w-28 xl:h-10 placeholder:text-xs xl:placeholder:text-lg"
                placeholder="Пребарај..."
              />
            </div>
          </form>
        </div>

        <ul className="flex">
          <li className="xl:mr-4 mr-1 xl:pt-2">
            <Link
              href="/users"
              className={`text-hederColor xl:text-lg text-[10px] ${
                asPath === "/users"
                  ? "text-active  fill-active stroke-active stroke-2"
                  : undefined
              }`}
            >
              <UserIcon
                className={`mx-auto xl:w-12 h-12 ${
                  asPath === "/users"
                    ? " fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={47}
                height={47}
              />
              мој профил
            </Link>
          </li>
          <li className="xl:pt-5 pt-2 mr-1">
            <Link href="/shopingcard">
              <ShopingCard
                className={`mx-auto ${
                  asPath === "/shopingcard"
                    ? "text-active fill-active stroke-active stroke-2"
                    : "fill-none"
                }`}
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            className="p-2 text-FooterMainColor  rounded-md outline-none focus:border-gray-400 focus:border"
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
      </div>
    </nav>
  );
}
