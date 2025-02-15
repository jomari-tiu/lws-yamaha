import React, { ComponentProps } from "react";

import AccessoryCard from "@/components/shared/AccessoryCard";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  onClick?: () => void;
  accessories: Array<ComponentProps<typeof AccessoryCard>>;
  hideButton?: Boolean;
};

const AccessoriesSection = (props: PropsType) => {
  const { accessories } = props;
  return (
    <SectionContainer
      className=" flex flex-col justify-center items-center space-y-10"
      bgColor="#1f1f1f"
      width="wide"
    >
      <Heading type={"h3"} className=" text-white">
        Accessories
      </Heading>
      <ul className="flex flex-wrap justify-center gap-10">
        {accessories.map((accessory, indx) => (
          <li key={indx} className="">
            <AccessoryCard
              accessoryImage={accessory.accessoryImage}
              title={accessory.title}
              url={accessory.url}
            />
          </li>
        ))}
      </ul>

      {!props.hideButton && (
        <Button appearance={"primary"} size={"large"} onClick={props.onClick}>
          Other Accessories
        </Button>
      )}
    </SectionContainer>
  );
};

export default AccessoriesSection;
