import Link from "next/link";
import { useRouter } from "next/router";
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
    <nav className="bg-[#F1F1F1] shadow-xl p-2 flex xl:min-w-full min-w-max xl:items-center xl:justify-center">
      <Link
        href="/"
        className="text-OrangePrimary xl:text-lg text-xs xl:ml-5 xl:mr-8"
      >
        <Logo className="mx-auto xl:w-12 xl:h-12" width={42} height={42} />
        Јади Домашно
      </Link>
      <div
        className={`mt-36 md:mt-0 xl:mt-0 md:block  ${
          navbar ? "md:p-0 block pb-40 md:pb-0 xl:pb-0" : "hidden"
        }`}
      >
        <ul className="h-screen md:h-auto justify-center md:flex text-center xl:items-center">
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
      </div>
      <div className="flex justify-center shedow-xl xl:pr-20 xl:pl-56 pt-4 xl:pt-0">
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
        <li className="xl:mr-4 mr-1">
          <Link
            href="/users"
            className={`text-hederColor xl:text-lg text-xs ${
              asPath === "/users"
                ? "text-active  fill-active stroke-active stroke-2"
                : ""
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
        <li className="xl:pt-5 pt-3 mr-2">
          <Link href="/shopingcard">
            <ShopingCard
              className={`mx-auto ${
                asPath === "/shopingcard"
                  ? "text-active fill-active stroke-active stroke-2"
                  : "fill-none"
              }`}
              width={40}
              height={40}
            />
          </Link>
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
