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
            src="/images/images-static/gurabii.png"
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
                Гурабии
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
                1чаша кисело млеко 1чаша свинска маст или маргарин 1чаша шекер 2
                јајца 3-4чаши брашно 1 пециво 1 ванила
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
            src="/images/images-static/oblandi.png"
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
                Обланди
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
                300 мл вода 200 грама шеќер 100 грама чоколада за готвење 250
                грама маргарин 400 грама ореви 400 грама бисквити 2 лажици какао
                1 паковање обланди
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
            src="/images/images-static/baklavi.png"
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
                Баклава
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
                1кг шеќер 200гр гриз 100гр чоколадо 250 гр мелени ореви 500гр
                кори оризарски 800 мл вода 100 мл масло
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
