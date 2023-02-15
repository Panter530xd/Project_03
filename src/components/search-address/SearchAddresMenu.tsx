import { useEffect, useState } from "react";
import { Profiles } from "@/types/profiles";
import { useRouter } from "next/router";
import CheckIcon from "../../../public/images/Icons/inputcheck.svg";
import LocationIcon from "../../../public/images/Icons/inputlocation.svg";

interface Props {
  profilesAllData: Profiles[];
}

const SearchAddressMenu = ({ profilesAllData }: Props) => {
  console.log(profilesAllData);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Profiles[]>([]);
  const [profilesData, setProfilesData] = useState<Profiles[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (profilesAllData) {
      const uniqueAddresses = Array.from(
        new Set(profilesAllData?.map((profile) => profile.user_adress))
      );
      const uniqueProfiles = uniqueAddresses
        .map((address) =>
          profilesAllData.find((profile) => profile.user_adress === address)
        )
        .filter((profile) => profile !== undefined) as Profiles[];
      setProfilesData(uniqueProfiles);
    }
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
      setShowSuggestions(false);
    }, 200);
  };

  const onFocus = () => {
    setFocused(true);
    if (value) {
      setShowSuggestions(true);
    }
  };

  const handleSelect = (address: string) => {
    setValue(address);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      router.push({
        pathname: router.pathname,
        query: { address: value },
      });
    }
  };

  return (
    <div className="pt-10 pb-10 px-4">
      <form
        className="xl:flex items-center mx-auto justify-center"
        onSubmit={handleSubmit}
      >
        <div className="relative xl:flex items-center justify-center">
          <input
            type="text"
            placeholder="Локација"
            className="py-2 text-sm bg-GreyPrimary shadow-lg text-black rounded-[20px] placeholder:text-black placeholder:text-center  focus:outline-none focus:bg-white focus:text-gray-900 px-12 w-full"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onClick={() => setShowSuggestions(true)}
          />
          <button type="submit">
            <CheckIcon
              width={24}
              height={24}
              className=" absolute  right-4 xl:bottom-[5px] bottom-[7px] mr-2"
              onClick={() => setShowSuggestions(true)}
            />
          </button>

          <LocationIcon
            width={24}
            height={30}
            className=" absolute left-4 xl:bottom-[4px] bottom-[3px]"
            onClick={() => setShowSuggestions(true)}
          />
        </div>
        {showSuggestions && focused && (
          <div className="shadow-lg bg-white rounded-lg mt-2">
            <ul className=" bg-white absolute  w-64 z-50 overflow-auto shadow-lg">
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
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchAddressMenu;
