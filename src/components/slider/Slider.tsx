import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import dayjs from "dayjs";
import "dayjs/locale/mk";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const today = dayjs();

const nextMonth = [...Array(31)].map((_, index) => {
  return {
    day: today.add(index, "day").locale("mk").format("ddd"),
    month: today.add(index, "day").format("MMM"),
    name: today.add(index, "day").format("D"),
  };
});

const Slider = () => {
  const router = useRouter();
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>("0");

  useEffect(() => {
    const selectedDate = (router.query.selectedDate as string) || "0";
    setSelectedRecipeId(selectedDate);
  }, []);

  const handleSlideClick = (index: number) => {
    setSelectedRecipeId(index.toString());
    router.push({
      pathname: router.pathname,
      query: { selectedDate: index.toString() },
    });
  };

  return (
    <div className=" xl:w-5/12 w-10/12 mx-auto py-20">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 3,
          mediaQuery: "min",
          breakpoints: {
            640: {
              perPage: 7,
            },
          },
        }}
        aria-label="My Favorite Dates"
      >
        {nextMonth.map((next, index) => (
          <SplideSlide key={index} onClick={() => handleSlideClick(index)}>
            <div
              className={`text-center bg-white rounded-xl shadow-lg border-b-2 hover:text-OrangePrimary border-gray-400  py-2 xl:px-4 w-12/12 mx-auto ${
                selectedRecipeId === index.toString()
                  ? "text-OrangePrimary font-semibold"
                  : ""
              }`}
            >
              <h2 className=" uppercase pb-1 text-lg font-normal">
                {next.day}
              </h2>
              <h2 className="pb-1 text-lg font-normal">{next.name}</h2>
              <h2 className="uppercase text-lg font-normal">{next.month}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
