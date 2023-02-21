import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

import SearchIcon from "../../../public/images/Icons/ei_search.svg";

const SearchAll = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Redirect to search page with search query as parameter
    router.push(`/search?searchQuery=${searchQuery}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center shedow-xl xl:pr-20 xl:pl-56 pt-4 xl:pt-0">
        <form className="shedow-xl" onSubmit={handleSubmit}>
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
              type="text"
              name=""
              value={searchQuery}
              onChange={handleChange}
              className="py-2 text-sm text-hederColor rounded-[20px] pl-10 border border-hederColor focus:outline-none focus:bg-white focus:text-gray-900 xl:w-96 w-28 xl:h-10 placeholder:text-xs xl:placeholder:text-lg"
              placeholder="Пребарај..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchAll;
