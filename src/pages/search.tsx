import CardCookSearch from "@/components/card-profiles/CardCookSearch";
import CardRecipeSearch from "@/components/card-profiles/CardRecipeSearch";
import { Profiles, Recipes } from "@/types/profiles";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, NextPage } from "next";

type SearchProps = {
  searchResults: (Profiles & Recipes)[];
  query: string;
};

const Search: NextPage<SearchProps> = ({ searchResults, query }) => {
  return (
    <div className=" xl:py-40 py-20">
      <div className=" flex justify-center">
        <h2 className=" xl:text-3xl text-lg font-semibold text-black pb-5">
          {searchResults.length > 0
            ? "Резултати од Пребарување"
            : "Нема резултати за " + query}
        </h2>
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto">
        {searchResults?.map((result) => {
          if (Object.keys(result).includes("user_adress")) {
            return <CardCookSearch profile={result} key={result.id} />;
          } else {
            return <CardRecipeSearch recipe={result} key={result.id} />;
          }
        })}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { searchQuery } = ctx.query;

  if (!searchQuery) {
    return { props: { searchResults: [] } };
  }

  const supabase = createServerSupabaseClient(ctx);

  const { data: profilesData, error: profilesError } = await supabase
    .from("profiles")
    .select()
    .eq("user_tipe", "cook")
    .textSearch(
      "user_adress, user_name, user_age, user_cuisine, avatar_url",
      searchQuery as string
    );

  const { data: recipesData, error: recipesError } = await supabase
    .from("recipes")
    .select()
    .textSearch(
      "title, img, desc, rating, profiles_id, delivery, delivery_time, cuisine, selected_date, allergens, recipe_address, available",
      searchQuery as string
    );

  if (profilesError || recipesError) {
    console.error(profilesError || recipesError);
    return {
      notFound: true,
    };
  }

  const searchResults = [...profilesData, ...recipesData];

  return {
    props: {
      searchResults,
      query: ctx.query.searchQuery,
    },
  };
};

export default Search;
