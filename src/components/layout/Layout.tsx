import { Roboto } from "@next/font/google";
import { Bad_Script } from "@next/font/google";
import Header from "../heder-components/Header";
import Footer from "../footer-components/Footer";
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
const badscript = Bad_Script({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-badscript",
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <Header />
      <main
        {...props}
        className={`${badscript.variable} ${roboto.variable} font-roboto`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
