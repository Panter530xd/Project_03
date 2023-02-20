import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface Props {
  id: number;
  open: any;
}

function Icon({ id, open }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="orange"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Acordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="border border-OrangeSecondary px-8 rounded-[20px] mb-3"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          1. Како да се регистрирам?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus
          pellentesque nibh neque, vel placerat sapien hendrerit vel.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="border border-OrangeSecondary px-8  rounded-[20px] mb-3"
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          2. Како да променам коментар?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus
          pellentesque nibh neque, vel placerat sapien hendrerit vel.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border border-OrangeSecondary px-8 rounded-[20px] mb-3"
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          3. Како да променам слика на рецепт?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus
          pellentesque nibh neque, vel placerat sapien hendrerit vel.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border border-OrangeSecondary px-8 rounded-[20px] mb-3"
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          4. Како да променам слика на рецепт?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus
          pellentesque nibh neque, vel placerat sapien hendrerit vel.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border border-OrangeSecondary px-8 rounded-[20px]"
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          5. Како да променам слика на рецепт?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus
          pellentesque nibh neque, vel placerat sapien hendrerit vel.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
