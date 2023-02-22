/* eslint-disable @next/next/no-img-element */
import { Profiles } from "@/types/profiles";
import { Key } from "react";
import LocationAddress from "../../../public/images/Icons/location.svg";
import Link from "next/link";
interface Props {
  profile: Profiles;
}

const CardCookSearch = ({ profile }: Props) => {
  console.log(profile);
  const cuisines = profile.user_cusine ? JSON.parse(profile.user_cusine) : [];

  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden shadow-lg relative -z-10">
        <img
          src={profile.avatar_url}
          alt={profile.full_name}
          className="h-56 w-full object-cover"
        />
      </div>
      <div className=" bg-[#FFF2E2] rounded-t-3xl -mt-6 shadow-lg ">
        <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
          <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
            {profile.full_name}
          </h2>
        </div>
        <div className="xl:px-8 px-3  flex justify-between">
          <div>
            {cuisines.map((cusine: Key | null | undefined) => (
              <p
                className="text-base font-medium text-OrangeSecondary text-ellipsis truncate"
                key={cusine}
              >
                {cusine}
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <LocationAddress className="mr-3" />
            <h3>{profile.user_adress}</h3>
          </div>
        </div>
        <div className="flex justify-end pr-4 pb-5 xl:pt-0 pt-3">
          <Link
            href={"/gotvachi"}
            className="text-right border-2 border-OrangePrimary rounded-[20px] px-4 py-1"
          >
            Дознај повеќе...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardCookSearch;
