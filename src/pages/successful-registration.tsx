import { NextPage } from "next";
import Link from "next/link";
import Logo from "/public/images/Icons/logo-jadi-domasno 1.svg";
const SuccessfullReg: NextPage = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <Logo />
      <div className="py-3 text-center grid grid-cols-1 gap-3">
        <h3 className="xl:text-5xl">E-mail верификација!</h3>
        <p className="xl:text-2xl">
          Проверете ја вашата електронска пошта за да ја комплетирате вашата
          регистрација.
        </p>
        <p className="xl:text-2xl">Ви благодариме!</p>
      </div>
      <div className="grid grid-cols-2 gap-6  py-5">
        <Link
          href="/"
          className="py-2 border-2 border-OrangePrimary shadow-lg text-OrangePrimary rounded-[20px]  xl:w-72 w-40 xl:h-10 font-medium text-sm xl:block text-center cursor-pointer"
        >
          кон почетна
        </Link>
        <Link
          href="/signup"
          className="py-2 bg-OrangePrimary shadow-lg text-white rounded-[20px]  xl:w-72 w-40 xl:h-10 font-medium text-sm xl:block text-center cursor-pointer"
        >
          кон мојот профил
        </Link>
      </div>
    </div>
  );
};

export default SuccessfullReg;
