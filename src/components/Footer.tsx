import Logo from "/public/images/Icons/logo-jadi-domasno 1.svg";
import Link from "next/link";
import Facebook from "/public/images/footer-icons/fb.svg";
import Twitter from "/public/images/footer-icons/twitter.svg";
import Linkedin from "/public/images/footer-icons/lingedin.svg";
import EmailIcon from "/public/images/footer-icons/email.svg";
import Youtube from "/public/images/footer-icons/youtube.svg";
import LogoFooter from "/public/images/footer-icons/logo-footer.svg";
export default function Footer() {
  return (
    <footer className=" bg-FooterMainColor xl:flex xl:items-center xl:justify-between xl:pt-20 xl:pb-20 pb-10 pt-10">
      <div className="w-11/12 xl:flex xl:justify-between mx-auto grid grid-cols-1 gap-5">
        <div>
          <Link href="/">
            <LogoFooter className="mx-auto" width={92.41} height={97} />
          </Link>
        </div>
        <div className="mx-auto">
          <h3 className="text-foterText xl:text-5xl">
            Јади<br></br>Домашно
          </h3>
          <p className="text-xl text-foterText pt-4">
            Јадете здраво. Јадете подобро.
          </p>
          <div className="flex pt-5">
            <Link href="https://www.facebook.com/" className="mr-3">
              <Facebook
                width={37}
                height={37}
                className=" hover:stroke-OrangePrimary"
              />
            </Link>
            <Link href="https://twitter.com/" className="mr-3">
              <Twitter
                width={37}
                height={37}
                className=" hover:stroke-OrangePrimary"
              />
            </Link>
            <Link href="https://www.linkedin.com/" className="mr-3">
              <Linkedin
                width={37}
                height={37}
                className=" hover:stroke-OrangePrimary"
              />
            </Link>
            <Link href="https://www.youtube.com/">
              <Youtube
                width={37}
                height={37}
                className=" hover:stroke-OrangePrimary"
              />
            </Link>
          </div>
        </div>
        <div className="mx-auto">
          <ul className="list-disc list-inside underline text-foterText  text-xl font-light">
            <li className=" hover:text-OrangePrimary">
              <Link href="/">За Нас</Link>
            </li>

            <li className=" hover:text-OrangePrimary">
              <Link href="/">Мени</Link>
            </li>
            <li className=" hover:text-OrangePrimary">
              <Link href="/">Стани готвач</Link>
            </li>
            <li className=" hover:text-OrangePrimary">
              <Link href="/">Најави се</Link>
            </li>
            <li className=" hover:text-OrangePrimary">
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="font-light mx-auto">
          <p className=" text-xl text-foterText">Правни</p>
          <p className=" text-xl text-foterText">Политика за приватност</p>
          <p className=" text-xl text-foterText">Услови за веб-страница</p>
          <p className=" text-xl text-foterText">
            Прифатлива политика за користење
          </p>
          <p className=" text-xl text-foterText">Политика за колачиња</p>
          <p className=" text-xl text-foterText">Општи услови</p>
        </div>
        <div className="text-center">
          <p className="text-xl text-foterText font-light">
            Пратете ги новостите
          </p>
          <div className="xl:pt-5 xl:pb-5">
            <EmailIcon className="mx-auto" width={79} height={79} />
          </div>
          <form>
            <input
              type="text"
              placeholder="Електронска пошта"
              className="py-2 text-sm text-hederColor rounded-[20px]  border border-hederColor focus:outline-none focus:bg-white focus:text-gray-900 xl:w-96 w-48 xl:h-10 placeholder:text-xs xl:placeholder:text-lg placeholder:text-center"
            />
            <button
              type="submit"
              className=" py-2 bg-OrangePrimary text-foterText rounded-[20px] xl:w-96 w-48 xl:h-10 font-medium text-sm mt-5 xl:block"
            >
              ПРЕТПЛАТИ СЕ
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
