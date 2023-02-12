import { useRouter } from "next/router";
import { useState } from "react";
import DiliveryIconFilter from "../../../public/images/Icons/dilivery-filters.svg";
import NodiliveryIconFilter from "../../../public/images/Icons/no-dilivery-filters.svg";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
const DiliveryFilter = () => {
  const [value, setValue] = useState("true");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, delivery: value },
    });
  };
  return (
    <>
      <div className="mx-auto flex justify-center pb-10">
        <div className="grid grid-cols-2 mx-auto justify-center items-center">
          <div>
            <div className="pb-3">
              <h4>Достава</h4>
            </div>

            <div className="pb-3">
              <h4>Подигање</h4>
            </div>
          </div>
          <div>
            <RadioGroup onChange={setValue} value={value}>
              <div className=" flex justify-center items-center">
                <Stack>
                  <div className="flex justify-between">
                    <label htmlFor="delivery" className="text-lg">
                      <DiliveryIconFilter onChange={handleChange} />
                    </label>
                    <Radio
                      colorScheme="red"
                      id="delivery"
                      value="true"
                      onChange={handleChange}
                    ></Radio>
                  </div>
                  <div className="flex justify-between">
                    <label htmlFor="pickup" className="mr-10 text-lg">
                      <NodiliveryIconFilter onChange={handleChange} />
                    </label>
                    <Radio
                      colorScheme="red"
                      id="pickup"
                      value="false"
                      onChange={handleChange}
                    ></Radio>
                  </div>
                </Stack>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiliveryFilter;
