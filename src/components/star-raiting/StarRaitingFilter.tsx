import StarThreeIcon from "../../../public/images/Icons/3-stars.svg";
import FiveStarIcon from "../../../public/images/Icons/5-stars.svg";
import FourStarIcon from "../../../public/images/Icons/4-stars.svg";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
const StarRaitingFilter = () => {
  const [value, setValue] = useState("3");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, rating: value },
    });
  };
  return (
    <>
      <div className="mx-auto flex justify-center">
        <div className="grid grid-cols-2 mx-auto justify-center items-center">
          <div>
            <div className="pb-3">
              <StarThreeIcon />
            </div>

            <div className="pb-3">
              <FourStarIcon />
            </div>

            <div>
              <FiveStarIcon />
            </div>
          </div>
          <div>
            <RadioGroup onChange={setValue} value={value}>
              <div className=" flex justify-center items-center">
                <Stack>
                  <div className="flex justify-between">
                    <label htmlFor="1" className="text-lg">
                      3+
                    </label>
                    <Radio
                      colorScheme="red"
                      id="1"
                      value="3"
                      onChange={handleChange}
                    ></Radio>
                  </div>
                  <div className="flex justify-between">
                    <label htmlFor="2" className=" text-lg">
                      4+
                    </label>
                    <Radio
                      colorScheme="red"
                      id="2"
                      value="4"
                      onChange={handleChange}
                    ></Radio>
                  </div>
                  <div className="flex justify-between">
                    <label htmlFor="3" className=" mr-10 text-lg">
                      5
                    </label>
                    <Radio
                      colorScheme="red"
                      id="3"
                      value="5"
                      onChange={handleChange}
                    ></Radio>
                  </div>
                </Stack>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="py-5">
        <hr className="w-11/12 mx-auto bottom-2 border-[#808080]" />
      </div>
    </>
  );
};

export default StarRaitingFilter;
