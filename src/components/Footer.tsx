import Logo from "/public/images/Icons/logo-jadi-domasno 1.svg";
import Link from "next/link";
import Facebook from "/public/images/footer-icons/fb.svg";
import Twitter from "/public/images/footer-icons/twitter.svg";
import Linkedin from "/public/images/footer-icons/lingedin.svg";
import EmailIcon from "/public/images/footer-icons/Group322.svg";
import Youtube from "/public/images/footer-icons/youtube.svg";
export default function Footer() {
  return (
    <footer className=" bg-FooterMainColor">
      <div>
        <Link
          href="/"
          className="text-OrangePrimary xl:text-lg text-xs xl:ml-5 xl:mr-8"
        >
          <Logo className="mx-auto xl:w-12 xl:h-12" width={42} height={42} />
        </Link>
      </div>
      <div>
        <h3 className="text-foterText text-5xl">
          Јади<br></br>Домашно
        </h3>
        <p className="text-xl text-foterText pt-4">
          Јадете здраво. Јадете подобро.
        </p>
        <div>
          <Link href="https://www.facebook.com/">
            <Facebook width={35} height={35} />
          </Link>
          <Link href="https://twitter.com/">
            <Twitter width={35} height={35} />
          </Link>
          <Link href="https://www.linkedin.com/">
            <Linkedin width={35} height={35} />
          </Link>
          <Link href="https://www.youtube.com/">
            <Youtube width={35} height={35} />
          </Link>
        </div>
      </div>
      <div>
        <ul className="list-disc">
          <li>
            <Link href="/">За Нас</Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
}
