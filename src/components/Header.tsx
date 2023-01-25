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

export default function Header() {
  const { asPath } = useRouter();
  return (
    <nav className="bg-[#F1F1F1] shadow-xl w-full p-2 flex">
      <ul className="flex items-center my-auto pb-3 pr-52">
        <li className="ml-8 mr-8 ">
          <Link href="/" className="text-OrangePrimary text-lg">
            <Logo className="mx-auto" width={48} height={48} />
            Јади Домашно
          </Link>
        </li>
        <li className="mr-4 pt-3">
          <Link
            href="/"
            className={`text-hederColor text-lg ${
              asPath === "/" ? "text-active" : undefined
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
              asPath === "/cooks" ? "text-active" : undefined
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
              asPath === "/offer" ? "text-active" : undefined
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
              asPath === "/menu" ? "text-active" : undefined
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
              asPath === "/forum" ? "text-active" : undefined
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
      <div className="flex items-center justify-center shedow-xl pr-20">
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
              className="py-2 text-sm text-hederColor rounded-[20px] pl-10 border border-hederColor focus:outline-none focus:bg-white focus:text-gray-900 w-96 h-10"
              placeholder="Пребарај..."
            />
          </div>
        </form>
      </div>
      <ul className="flex">
        <li className="mr-4 pt-2">
          <Link
            href="/users"
            className={`text-hederColor text-lg ${
              asPath === "/users"
                ? "text-active  fill-active stroke-active stroke-2"
                : undefined
            }`}
          >
            <UserIcon
              className={`mx-auto ${
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
        <li className="pt-5">
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
    </nav>
  );
}
