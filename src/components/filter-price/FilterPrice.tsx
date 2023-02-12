import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const FilterPrice = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const [price, setPrice] = useState(100);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const router = useRouter();

  const handleSliderChange = (val: number) => {
    setSliderValue(val);
    setPrice(val);
    setShouldUpdate(true);
  };

  useEffect(() => {
    if (shouldUpdate) {
      router.push({
        pathname: "/menu",
        query: { ...router.query, price: price },
      });
      setShouldUpdate(false);
    }
  }, [price, shouldUpdate, router]);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <>
      <div className="w-9/12 mx-auto">
        <h3 className="text-lg text-blac">Филтрирај по цена:</h3>
        <div className="py-5">
          <Box pt={6} pb={2}>
            <Slider
              defaultValue={100}
              min={100}
              max={400}
              step={30}
              aria-label="slider-ex-6"
              onChange={handleSliderChange}
            >
              <SliderMark value={100} {...labelStyles}>
                100ден
              </SliderMark>
              <SliderMark value={230} {...labelStyles}>
                250ден
              </SliderMark>
              <SliderMark value={350} {...labelStyles}>
                350ден
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign="center"
                bg="tomato"
                color="white"
                mt="-10"
                ml="-5"
                w="20"
              >
                {sliderValue}ден
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </div>
      </div>
      <div className="py-5">
        <hr className="w-11/12 mx-auto bottom-2 border-[#808080]" />
      </div>
    </>
  );
};

export default FilterPrice;
