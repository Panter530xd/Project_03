/* eslint-disable @next/next/no-img-element */
import FourStar from "../../../public/images/Icons/four-star-static.svg";
import FiveStar from "../../../public/images/Icons/5-stars.svg";
import DiliveryIcon from "../../../public/images/Icons/dilivery.svg";
import NoDiliveryIcon from "../../../public/images/Icons/no-dilivery.svg";
import HeratIcon from "../../../public/images/Icons/heart.svg";
import ClockIcon from "../../../public/images/Icons/clock.svg";
import Link from "next/link";

const CardStaticDeserds = () => {
  return (
    <>
      <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden  relative ">
          <img
            src="/images/images-static/shopska.png"
            alt="Shopska"
            className="h-56 w-full object-cover"
          />

          <div className="absolute top-2 right-2">
            <HeratIcon />
          </div>

          <DiliveryIcon className="absolute top-2 left-2" />
        </div>
        <div className=" bg-white shadow-lg rounded-b-xl ">
          <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
            <div>
              <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
                Шопска салата
              </h2>
              <div className="flex">
                <FourStar />
              </div>
            </div>
            <div className=" text-OrangeSecondary font-semibold">110ден</div>
          </div>
          <div className="xl:px-8 px-3 pt-3">
            <h5 className="truncate font-semibold">
              Состав на порцијата:
              <br />
              <span className="font-normal">
                Шопската салата е една од најубавите македонски традиционални
                салати. Името го добила според словенското Шопи.
              </span>
            </h5>
          </div>
          <div className="flex xl:px-8 px-3 pt-3">
            <ClockIcon />
            <h3 className="pl-3">до 1 час</h3>
          </div>

          <div className="flex justify-center py-5 ">
            <Link
              href={`/`}
              className="text-white bg-OrangeSecondary rounded-[20px] px-4 py-2"
            >
              Додај во кошничка
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden  relative ">
          <img
            src="/images/images-static/ajvar.png"
            alt="Shopska"
            className="h-56 w-full object-cover"
          />

          <div className="absolute top-2 right-2">
            <HeratIcon />
          </div>

          <NoDiliveryIcon className="absolute top-2 left-2" />
        </div>
        <div className=" bg-white shadow-lg rounded-b-xl ">
          <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
            <div>
              <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
                Ајвар
              </h2>
              <div className="flex">
                <FiveStar />
              </div>
            </div>
            <div className=" text-OrangeSecondary font-semibold">150ден</div>
          </div>
          <div className="xl:px-8 px-3 pt-3">
            <h5 className="font-semibold truncate text-ellipsis">
              Состав на порцијата:
              <br />
              <span className=" font-normal">
                500 милилитри масло; 1 голема лажица шеќер Сол по вкус. Испечете
                ги пиперките, па потоа излупете им ја кората и исчистете.
              </span>
            </h5>
          </div>
          <div className="flex xl:px-8 px-3 pt-3">
            <ClockIcon />
            <h3 className="pl-3">40-45 мин</h3>
          </div>

          <div className="flex justify-center py-5 ">
            <Link
              href={`/`}
              className="text-white bg-OrangeSecondary rounded-[20px] px-4 py-2"
            >
              Додај во кошничка
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex-1 rounded-t-3xl rounded-b-none overflow-hidden  relative ">
          <img
            src="/images/images-static/vitaminska.png"
            alt="Shopska"
            className="h-56 w-full object-cover"
          />

          <div className="absolute top-2 right-2">
            <HeratIcon />
          </div>

          <DiliveryIcon className="absolute top-2 left-2" />
        </div>
        <div className=" bg-white shadow-lg rounded-b-xl ">
          <div className="xl:px-8 px-3 pt-3 flex justify-between rounded-t-2xl ">
            <div>
              <h2 className="text-lg title-font font-medium text-gray-900 mb-3">
                Витаминска салата
              </h2>
              <div className="flex">
                <FourStar />
              </div>
            </div>
            <div className=" text-OrangeSecondary font-semibold">200ден</div>
          </div>
          <div className="xl:px-8 px-3 pt-3">
            <h5 className=" font-semibold truncate">
              Состав на порцијата:
              <br />
              <span className=" font-normal">
                Исклучително здрава и вкусна мешавина од цвекло, морков,
                роквица, и слатка пченка. И сето тоа зачинето со свеж лук и сок
                од лимон.
              </span>
            </h5>
          </div>
          <div className="flex xl:px-8 px-3 pt-3">
            <ClockIcon />
            <h3 className="pl-3">до 1 час</h3>
          </div>

          <div className="flex justify-center py-5 ">
            <Link
              href={`/`}
              className="text-white bg-OrangeSecondary rounded-[20px] px-4 py-2"
            >
              Додај во кошничка
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStaticDeserds;
