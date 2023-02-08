/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Profiles } from "@/types/profiles";
import { useRouter } from "next/router";
import CheckIcon from "../../../public/images/Icons/inputcheck.svg";
import LocationIcon from "../../../public/images/Icons/inputlocation.svg";
interface Props {
  profilesAllData: Profiles[];
}

const searchAddress: NextPage<Props> = ({ profilesAllData }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Profiles[]>([]);
  const [profilesData, setProfilesData] = useState<Profiles[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const uniqueAddresses = Array.from(
      new Set(profilesAllData.map((profile) => profile.user_adress))
    );
    const uniqueProfiles = uniqueAddresses
      .map((address) =>
        profilesAllData.find((profile) => profile.user_adress === address)
      )
      .filter((profile) => profile !== undefined) as Profiles[];
    setProfilesData(uniqueProfiles);
  }, [profilesAllData]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const filteredProfiles = profilesData.filter((profile) =>
      profile.user_adress.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSuggestions(filteredProfiles);
    setShowSuggestions(filteredProfiles.length > 0);
  };

  const onBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 200);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const handleSelect = (address: string) => {
    setValue(address);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/results",
      query: { address: value },
    });
  };

  return (
    <div className="pt-10 pb-10">
      <form
        onSubmit={handleSubmit}
        className="xl:flex items-center mx-auto justify-between"
      >
        <div className="relative xl:flex items-center  ">
          <input
            type="text"
            placeholder="Внеси адреса"
            className="py-2 text-sm bg-GreyPrimary shadow-lg text-black rounded-[20px] placeholder:text-black  focus:outline-none focus:bg-white focus:text-gray-900 xl:w-80 w-full xl:h-12 h-10 placeholder:text-xs xl:placeholder:text-lg pl-14"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <CheckIcon
            width={24}
            height={24}
            className=" absolute  right-4 xl:bottom-[9px] bottom-[7px] mr-2"
          />
          <LocationIcon
            width={24}
            height={30}
            className=" absolute left-4 xl:bottom-[9px] bottom-[3px]"
          />
          {showSuggestions && focused && (
            <ul className="bg-white absolute w-64 z-50 overflow-auto shadow-lg">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="p-2 hover:bg-gray-200"
                  onClick={() => handleSelect(suggestion.user_adress)}
                >
                  {suggestion.user_adress}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-5 xl:pt-0 flex justify-center">
          <button
            type="submit"
            className=" py-2 bg-OrangePrimary shadow-lg text-white rounded-[20px]  xl:w-72 w-40 xl:h-10 font-medium text-sm xl:block text-center cursor-pointer"
          >
            Погледни резултати
          </button>
        </div>
      </form>
    </div>
  );
};

export default searchAddress;
