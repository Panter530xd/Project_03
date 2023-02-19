import Logo from "../../public/images/Icons/logo-kako-funcionira.svg";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Acordion from "@/components/acordion/Acordion";

const CooksHow: NextPage = () => {
  return (
    <div className=" xl:py-16 py-7 relative">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="flex items-center justify-center xl:py-10">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Како функционира?
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <div className="flex justify-center py-10">
        <Link
          className=" text-2xl bg-OrangePrimary text-white xl:px-20 xl:py-5 px-10 py-3 rounded-[100px] z-10"
          href={"/kako_funkcionira_gotvachi"}
        >
          Готвачи
        </Link>
        <Link
          className=" -ml-32 text-2xl bg-[#BCBCBC] text-white xl:pl-48 xl:pr-10 xl:py-5 pl-36 pr-5 py-3 rounded-r-[100px] z-0"
          href={"/kako_funkcionira_gurmani"}
        >
          Гурмани
        </Link>
      </div>
      <div className="w-10/12 mx-auto xl:py-20">
        <p className="text-left xl:text-lg font-base">
          Јади Домашно поврзува талентирани готвачи со локални клиенти. Ние
          веруваме во обезбедувањето на шефовите во нашата заедница - поединци
          кои отсекогаш сонувале да градат сопствен бизнис со храна - можност да
          заработат значаен приход правејќи го она што го сакаат! Ние, исто
          така, веруваме дека секој човек треба да има пристап до здрав, домашен
          оброк по прифатлива цена. Градење заедница посветена на економско
          зајакнување и културна инклузивност - затоа го започнавме Јади
          Домашно.
        </p>
      </div>
      <div className="flex items-center justify-center py-10 w-10/12 text-center mx-auto">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Зошто да станете готвач на Јади домашно?
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <Image
        src="/images/images-static/gotvachi-levo.png"
        alt={"domates"}
        className=" absolute left-0 top-0 hidden lg:block"
        width={246}
        height={194}
      />
      <Image
        src="/images/images-static/gotvachi-desno.png"
        alt={"domates"}
        className=" absolute right-0 top-3 hidden lg:block"
        width={246}
        height={194}
      />
      <div className="grid xl:grid-cols-3 gap-3 w-10/12 mx-auto justify-center text-center xl:py-20 ">
        <div>
          <Image
            src="/images/images-static/1.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">Заработи чесно</h3>
          <p className="text-base font-light py-3">
            Сосема е бесплатна за аплицирање. Многу шефови заработуваат околу
            5000 денари неделно.
          </p>
        </div>
        <div>
          <Image
            src="/images/images-static/2.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">Биди свој готвач</h3>
          <p className=" text-base font-light py-3">
            Дизајнирајте сопствено мени, поставете свои цени и работете кога
            сакате. Ќе ви помогнеме со плаќања, логистика и поддршка на
            клиентите.
          </p>
        </div>
        <div>
          <Image
            src="/images/images-static/3.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">
            Послужи среќни клиенти
          </h3>
          <p className="text-base font-light py-3">
            Добијте можност да ги зготвите вашите омилени рецепти и со тоа да
            усреќите гурмани кои секогаш сакаат да пробаат нешто ново.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center py-10 w-10/12 mx-auto text-center ">
          <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
          <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
            Кои критериуми треба да ги исполнува еден готвач?
          </h2>
          <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
          <Image
            src="/images/images-static/domates.png"
            alt={"domates"}
            className=" absolute left-0 hidden lg:block"
            width={246}
            height={194}
          />
          <Image
            src="/images/images-static/piper.png"
            alt={"domates"}
            className=" absolute right-0  hidden lg:block"
            width={246}
            height={194}
          />
        </div>
      </div>
      <div className=" grid xl:grid-cols-2 xl:gap-28 w-10/12 mx-auto xl:py-10">
        <div className="grid xl:grid-cols-2 items-center">
          <Image
            src="/images/images-static/kako-govac1.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="pl-3 pt-3 xl:pt-0">
            Вашата кујна треба да биде чиста и уредна!
          </p>
        </div>
        <div className="grid xl:grid-cols-2 items-center">
          <Image
            src="/images/images-static/kako-govac2.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="pt-3 xl:pt-0">
            Намирниците со кои ја готвите храната треба да се истите што се
            наведени во вашето мени!
          </p>
        </div>
      </div>
      <div className=" grid xl:grid-cols-2 xl:gap-28 w-10/12 mx-auto xl:py-10">
        <div className="grid xl:grid-cols-2 items-center">
          <Image
            src="/images/images-static/kako-govac3.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="pl-3 pt-3 xl:pt-0">
            Секогаш треба да ги измиете рацете темелно, пред да започнете со
            подготвување оброци!
          </p>
        </div>
        <div className="grid xl:grid-cols-2 items-center">
          <Image
            src="/images/images-static/kako-govac4.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="pl-3 pt-3 xl:pt-0">
            Намирниците треба да се чуваат во соодветни услови! Проверувајте го
            редовно рокот пред да почнете да готвите.
          </p>
        </div>
      </div>
      <div className=" grid xl:grid-cols-2 xl:gap-28 w-10/12 mx-auto xl:py-10">
        <div className="grid xl:grid-cols-2   items-center">
          <Image
            src="/images/images-static/kako-govac5.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="py-3 xl:py-0">
            Нека вашите миленичиња ве почекаат надвор од кујната. Некои клиенти
            не сакаат кога се готви во присуство на домашно милениче!
          </p>
        </div>
        <div className="grid xl:grid-cols-2 items-center">
          <Image
            src="/images/images-static/kako-govac6.png"
            alt={"domates"}
            className="mx-auto"
            width={292}
            height={260}
          />
          <p className="xl:pl-4 pt-3 xl:pt-0 ">
            Бидете секогаш професионални и пријателски насочени кон клиентите
            кон нарачуваат храна од вас!
          </p>
        </div>
      </div>
      <div className="xl:py-10 w-10/12 mx-auto">
        <div className="xl:flex xl:items-center ">
          <div>
            <Image
              src="/images/images-static/kako-govac7.png"
              alt={"domates"}
              width={292}
              height={260}
              className="mx-auto"
            />
          </div>
          <div className="xl:w-3/12">
            <p className="pl-3 pt-3 xl:pt-0">
              Ние сме едно големо семејство! Секогаш обидете се несогласувањата
              да ги решите директно со вашите клиенти. Сослушајте ги нивните
              критики - тоа ќе ве направи подобар готвач!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10 w-10/12 text-center mx-auto">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Како да станете готвач на Јади домашно?
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <div className="xl:w-7/12 w-10/12 mx-auto xl:py-20">
        <div className="xl:flex xl:flex-row flex-col xl:justify-evenly justify-center items-center">
          <div>
            <Image
              src="/images/images-static/luge1.png"
              alt={"domates"}
              width={109}
              height={127}
            />
          </div>
          <div className="xl:w-7/12 py-5 xl:py-0">
            <h3 className=" xl:text-2xl font-bold pb-3">
              Добијте одобрение за готвење
            </h3>
            <p className=" xl:text-lg">
              Регистрирајте се. Прочитајте и пополнете регулативи за безбедност
              на храната и изберете го вашето мени со јадења.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-7/12 w-10/12 mx-auto xl:py-20  py-10">
        <div className="xl:flex xl:flex-row flex-col xl:justify-evenly justify-center items-center">
          <div>
            <Image
              src="/images/images-static/luge2.png"
              alt={"domates"}
              width={109}
              height={127}
            />
          </div>
          <div className="xl:w-7/12 py-5 xl:py-0">
            <h3 className=" xl:text-2xl font-bold pb-3">
              Изберете го вашиот распоред
            </h3>
            <p className=" xl:text-lg">
              Изберете ги деновите што сакате да ги готвите. Малку или колку што
              сакате.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-7/12 w-10/12 mx-auto xl:py-20 py-10">
        <div className="xl:flex xl:flex-row flex-col xl:justify-evenly justify-center items-center">
          <div>
            <Image
              src="/images/images-static/luge3.png"
              alt={"domates"}
              width={109}
              height={127}
            />
          </div>
          <div className="xl:w-7/12 py-5 xl:py-0">
            <h3 className=" xl:text-2xl font-bold pb-3">
              Подгответе ги вашите нарачки
            </h3>
            <p className=" xl:text-lg">
              Клиентите можат да почнат да нарачуваат од вас на платформата.
              Освен за нарачки спремни веднаш за во текот на денот, тие ќе
              нарачаат барем еден ден однапред за да имате доволно време да ги
              набавите состојките и да ги подготвите нивните јадења.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="xl:w-7/12 w-10/12 mx-auto xl:py-20 py-10">
          <div className="xl:flex xl:flex-row flex-col xl:justify-evenly justify-center items-center">
            <div>
              <Image
                src="/images/images-static/luge4.png"
                alt={"domates"}
                width={109}
                height={127}
              />
            </div>
            <div className="xl:w-7/12 py-5 xl:py-0">
              <h3 className=" xl:text-2xl font-bold pb-3">
                Подгответе ги за испорака
              </h3>
              <p className=" xl:text-lg">
                Откако ќе ја подготвите нарачката, известете го клиентот дека
                истата е спремна за достава.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/images-static/levo-food.png"
          alt={"domates"}
          className=" absolute left-0 top-0  hidden lg:block"
          width={400}
          height={300}
        />
        <Image
          src="/images/images-static/kromid-luk-desno.png"
          alt={"domates"}
          className=" absolute right-0 top-36 hidden lg:block"
          width={246}
          height={194}
        />
      </div>
      <div className="relative">
        <div className="xl:w-7/12 w-10/12 mx-auto xl:py-20 py-10">
          <div className="xl:flex xl:flex-row flex-col xl:justify-evenly justify-center items-center">
            <div>
              <Image
                src="/images/images-static/luge5.png"
                alt={"domates"}
                width={109}
                height={127}
              />
            </div>
            <div className="xl:w-7/12 py-5 xl:py-0">
              <h3 className=" xl:text-2xl font-bold pb-3">
                Услужете ги вашите клиенти
              </h3>
              <p className=" xl:text-lg">
                Ќе ви помогнеме да го идентификувате најдобриот достапен метод
                за испорака за вашите клиенти да можат безбедно и навреме да ја
                добијат храната.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center py-10 w-10/12 text-center mx-auto">
          <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
          <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
            Што рекоа нашите задоволни гурмани?
          </h2>
          <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 xl:gap-10 xl:content-center gap-10 xl:py-40 py-10 items-end w-11/12 mx-auto">
        <div className="shadow-2xl rounded p-4 ">
          <Image
            src="/images/images-static/gurman1.png"
            alt={"gurman"}
            width={262}
            height={262}
            className="mx-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="py-4 xl:text-lg">
              ,,Највкусната домашна храна што сум ја пробала! Едвај чекам да
              пробам уште многу вкусни јадења.’’
            </h3>
            <h3 className="py-4 xl:text-2xl">Мила Крстева, 32 години</h3>
          </div>
        </div>
        <div className="shadow-2xl rounded p-4 ">
          <Image
            src="/images/images-static/gurman2.png"
            alt={"gurman"}
            width={262}
            height={262}
            className="mx-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="py-4 xl:text-lg">
              ,,Јади домашно е најдобро нешто од мојот студенски живот во
              Скопје.Браво Јади домашно!!!’’
            </h3>
            <h3 className="py-4 xl:text-2xl">Лара Миланова, 22 години</h3>
          </div>
        </div>
        <div className="shadow-2xl rounded p-4">
          <Image
            src="/images/images-static/gurman3.png"
            alt={"gurman"}
            width={262}
            height={262}
            className="mx-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="py-4 xl:text-lg">
              ,Ни еден ресторан не може да го замени вкусот на домашно тавче
              гравче. Браво Јади домашно!!! ’’
            </h3>
            <h3 className="py-4 xl:text-2xl">Миле Венковски, 40 години</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-11/12 flex items-center justify-center">
          <hr className=" xl:w-[601px] w-20 border-2 border-OrangeSecondary" />
          <Image
            src="/images/images-static/домат1.png"
            alt={"gurman"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <hr className=" xl:w-[601px] w-20 border-2 border-OrangeSecondary" />
        </div>
      </div>
      <div className="grid xl:gap-20 gap-10 justify-items-center xl:py-20 py-10 w-10/12 mx-auto text-center">
        <div>
          <h2 className=" font-badscript xl:text-5xl text-lg">
            Ви благодариме и добредојдовте!
          </h2>
        </div>
        <div>
          <h5>
            Ви посакуваме успешна работа, многу готвење и споделување убави
            моменти со храната!
          </h5>
        </div>
        <div>
          <Link
            className=" bg-OrangeSecondary text-white py-2 px-16 rounded-[20px]"
            href={"/signup"}
          >
            Регистрирај се
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-11/12 flex items-center justify-center">
          <hr className=" xl:w-[601px] w-20 border-2 border-OrangeSecondary" />
          <Image
            src="/images/images-static/livche.png"
            alt={"gurman"}
            width={169}
            height={77}
            className="mx-auto"
          />
          <hr className=" xl:w-[601px] w-20 border-2 border-OrangeSecondary" />
        </div>
      </div>
      <div className="flex items-center justify-center xl:py-20 py-10 w-10/12 text-center mx-auto">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Најчесто поставувани прашања
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <div className=" xl:pb-40 pb-10 relative">
        <div className=" w-10/12 mx-auto">
          <Acordion />
        </div>
        <Image
          src="/images/images-static/kako-footer-levo.png"
          alt={"domates"}
          className=" absolute left-0 top-64 hidden lg:block -z-10"
          width={400}
          height={300}
        />
        <Image
          src="/images/images-static/kako-footer-desno.png"
          alt={"domates"}
          className=" absolute right-0 top-52 hidden lg:block -z-10"
          width={400}
          height={300}
        />
        <Image
          src="/images/images-static/livche.png"
          alt={"gurman"}
          width={169}
          height={77}
          className="mx-auto absolute left-[40%] bottom-0 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default CooksHow;
