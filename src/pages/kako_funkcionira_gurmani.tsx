import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Logo from "../../public/images/Icons/logo-kako-funcionira.svg";
import Image from "next/image";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Profiles } from "@/types/profiles";
import CardCooks from "@/components/card-profiles/CardCooks";
import Acordion from "@/components/acordion/Acordion";
interface Props {
  userProfiles: Profiles[];
}

const Gurmani: NextPage<Props> = ({ userProfiles }) => {
  return (
    <div className="xl:py-16 py-7 relative">
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
          className=" -mr-32 text-2xl bg-[#BCBCBC] text-white xl:pl-10 xl:pr-48 xl:py-5 pr-36 pl-5 py-3 rounded-l-[100px] z-0"
          href={"/kako_funkcionira_gotvachi"}
        >
          Готвачи
        </Link>
        <Link
          className=" text-2xl bg-OrangePrimary text-white xl:px-20 xl:py-5 px-10 py-3 rounded-[100px] z-10"
          href={"/kako_funkcionira_gurmani"}
        >
          Гурмани
        </Link>
      </div>
      <div className="w-10/12 mx-auto xl:py-20">
        <p className="text-left xl:text-lg font-base">
          Јади домашно е платформа која ја спојува љубовта кон храната и
          готвењето на едно место! Тука може да најдете готвачи во близина на
          вашата локација и да нарачате вкусна, топла и домашна храна. Ние сме
          платформа која сака да ги поттикне соседите да ја споделат љубовта кон
          храната и да дадеме можност на сите љубители на готвењето да ја
          покажат својата умешност и да ја споделат со нивната околина. Ако
          готвењето нешто што те прави среќен и сакаш да си дел од нашата
          приказна. Ние ти ја даваме сета слобода да се изразиш, но и да
          заработиш.
        </p>
      </div>
      <div className="flex items-center justify-center py-10 w-10/12 text-center mx-auto">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Нашата мисија и визија
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
            src="/images/images-static/gurmani1.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">Поврзување!</h3>
          <p className="text-base font-light py-3">
            Вистински луѓе. Автентична љубов.
          </p>
        </div>
        <div>
          <Image
            src="/images/images-static/gurmani2.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">
            Споделување на радост!
          </h3>
          <p className=" text-base font-light py-3">
            Уживајте во заедницата преку храна.
          </p>
        </div>
        <div>
          <Image
            src="/images/images-static/gurmani3.png"
            alt={"domates"}
            className="mx-auto"
            width={402}
            height={350}
          />
          <h3 className="xl:text-3xl py-5 font-badscript">
            Кулинарски можности!
          </h3>
          <p className="text-base font-light py-3">
            Зајакнување на домашните готвачи.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-10 w-10/12 text-center mx-auto">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Како да станете дел од Јади домашно?
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <div className="relative">
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
                Регистрирај се на платформата како гурман!
              </h3>
              <p className=" xl:text-lg">
                Регистрирај се на платформата како гурман! Регистрирајте се! Со
                ова веќе станувате дел од нашето семејство и имате профил на
                гурман
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
                Нарачајте брзо и лесно!
              </h3>
              <p className=" xl:text-lg">
                Разгледајте ги нашите готвачи, менито коешто го нудат и одберете
                храна по ваш вкус.
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
              <h3 className=" xl:text-2xl font-bold pb-3">Јадете домашно!</h3>
              <p className=" xl:text-lg">
                Јадете домашно! Со достава или подигнување - ваш избор! Уживајте
                во вкусот на домашно приготвена храна од нашите незаменливи
                готвачи.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/images-static/gotvachi-levo.png"
          alt={"domates"}
          className=" absolute left-0 top-10  hidden lg:block"
          width={300}
          height={194}
        />
        <Image
          src="/images/images-static/gotvachi-desno.png"
          alt={"domates"}
          className=" absolute right-0 top-3 hidden lg:block"
          width={246}
          height={194}
        />
      </div>
      <div className="flex items-center justify-center xl:py-20 relative">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">
          Запознајте ги нашите готвачи
        </h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto">
        {userProfiles?.map((profile) => {
          return <CardCooks profile={profile} key={profile.id} />;
        })}
      </div>
      <div className="flex justify-center xl:py-20 py-10">
        <Link
          className=" bg-OrangeSecondary text-white py-2 px-16 rounded-[20px]"
          href={"/gotvachi"}
        >
          Дознај Повеќе
        </Link>
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
            Ви посакуваме уживање во храната од нашите готвачи и споделување
            убави моменти во соседството!
          </h5>
        </div>
        <div>
          <Link
            className=" bg-OrangeSecondary text-white py-3 px-16 rounded-[20px]"
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const { data: profilesAllData } = await supabase.from("profiles").select("*");
  const { data: profilesData } = await supabase
    .from("profiles")
    .select("*")
    .limit(3);
  const profilesId = profilesData?.map((profile) => profile.id);

  const { data: recipesData } = await supabase
    .from("recipes")
    .select("*")
    .in("profiles_id", [...(profilesId as string[])]);

  const accumulatedRatingsPerProfile: any = {};

  const numberOfRecipes: any = {};

  recipesData?.forEach((recipe) => {
    if (accumulatedRatingsPerProfile[recipe.profiles_id]) {
      accumulatedRatingsPerProfile[recipe.profiles_id] = Math.floor(
        (recipe.raiting + accumulatedRatingsPerProfile[recipe.profiles_id]) /
          numberOfRecipes[recipe.profiles_id] +
          1
      );
      numberOfRecipes[recipe.profiles_id] =
        numberOfRecipes[recipe.profiles_id] + 1;
    } else {
      accumulatedRatingsPerProfile[recipe.profiles_id] = recipe.raiting;
      numberOfRecipes[recipe.profiles_id] = 1;
    }
  });

  const userProfiles = profilesData?.map((profile) => {
    return {
      ...profile,
      averageRating: accumulatedRatingsPerProfile[profile.id]
        ? accumulatedRatingsPerProfile[profile.id]
        : null,
    };
  });

  return {
    props: {
      profilesData,
      recipesData,
      userProfiles,
      profilesAllData,
    },
  };
};

export default Gurmani;
