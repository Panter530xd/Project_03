import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Available = () => {
  const [value, setValue] = useState("Достапно веднаш");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, available: value },
    });
  };

  return (
    <RadioGroup onChange={setValue} value={value}>
      <div className=" flex justify-center items-center">
        <Stack>
          <div className="flex justify-between">
            <label htmlFor="1">Достапно веднаш</label>
            <Radio
              colorScheme="red"
              id="1"
              value="Достапно веднаш"
              onChange={handleChange}
            ></Radio>
          </div>
          <div className="flex justify-between">
            <label htmlFor="2">Достапно утре</label>
            <Radio
              colorScheme="red"
              id="2"
              value="Достапно утре"
              onChange={handleChange}
            ></Radio>
          </div>
          <div className="flex justify-between">
            <label htmlFor="3" className=" mr-5">
              Достапно по порачка
            </label>
            <Radio
              colorScheme="red"
              id="3"
              value="Достапно по порачка"
              onChange={handleChange}
            ></Radio>
          </div>
        </Stack>
      </div>
      <div className="py-5">
        <hr className="w-11/12 mx-auto bottom-2 border-[#808080]" />
      </div>
    </RadioGroup>
  );
};
export default Available;
