import { GurmanInterface, ReviewInterface } from "@/types/profiles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeartIcon from "../../../public/images/Icons/heart.svg";
interface Props {
  gurmansWithReviews: GurmanInterface[];
}

const SliderComments = ({ gurmansWithReviews }: Props) => {
  return (
    <div className="w-11/12 mx-auto xl:py-20 pb-10">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 2,
          mediaQuery: "min",
          breakpoints: {
            640: {
              perPage: 3,
            },
          },
        }}
        aria-label="My Favorite Dates"
      >
        {gurmansWithReviews?.map((gurman) =>
          gurman.reviews?.map((review: ReviewInterface) => (
            <SplideSlide key={review.id}>
              <div className="text-center bg-white rounded-xl shadow-lg border-b-2 border-gray-400   hover:text-OrangePrimary hover:fill-OrangePrimary xl:py-4 xl:px-4 py-7 px-7 grid h-44 relative">
                <h2 className="xl:text-2xl font-semibold hover:fill-OrangePrimary hover:text-OrangePrimary">
                  {gurman.full_name}
                </h2>
                <h2 className="pb-1 xl:text-lg font-normal">
                  {review.comment}
                </h2>
                <HeartIcon className="absolute xl:top-2 xl:left-2 top-0 left-0" />
              </div>
            </SplideSlide>
          ))
        )}
      </Splide>
    </div>
  );
};

export default SliderComments;
