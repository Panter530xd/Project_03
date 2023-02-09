import { Profiles } from "@/types/profiles";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";
import Slider from "../components/slider/Slider";

interface Props {
  recipesData: Profiles[];
}

const MenuPage: NextPage<Props> = ({ recipesData }) => {
  return (
    <div>
      <div className="flex items-center justify-center xl:py-10 relative">
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
        <h2 className=" font-badscript xl:text-[40px] pl-4 pr-4">Мени</h2>
        <hr className=" xl:w-32 w-16 border-2 border-OrangeSecondary" />
      </div>
      <Slider />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const { data: recipesData } = await supabase.from("recipes").select("*");

  return {
    props: {
      recipesData,
    },
  };
};

export default MenuPage;
