import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/shared/Heading";

type MotorcycleCardType = {
  imageSrc: string;
  features: string[];
  url: string;
  inheritWidth?: boolean;
};

const MotorcycleCard = (props: MotorcycleCardType) => {
  const { imageSrc, features, url, inheritWidth } = props;
  return (
    <ul className={` relative flex flex-col ${!inheritWidth && "w-[300px]"}`}>
      <li className="w-full flex justify-center relative after:content-[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-[40%] after:bg-white after:rounded-tl-xl  after:rounded-tr-xl">
        <aside className=" w-[272px] aspect-square relative">
          <Image
            src={imageSrc}
            fill
            className="z-10 object-contain"
            alt="vehicle"
          />
        </aside>
      </li>
      <li className=" h-[18rem] flex flex-col justify-between rounded-br-md rounded-bl-md px-3 py-6 bg-secondary text-white">
        <aside className="space-y-2">
          <Heading type="h5">Mio Gravis</Heading>
          <p className=" font-medium">Product Feature:</p>
          <ul className=" space-y-2">
            {features?.map((feature, indx) => (
              <li key={indx} className=" text-[#FFFFFF] flex gap-2">
                <div className=" h-1 aspect-square bg-white rounded-full mt-2"></div>
                <p className="line-clamp-2 text-sm">{feature}</p>
              </li>
            ))}
          </ul>
        </aside>
        <aside className="flex w-full justify-center">
          <Link
            href={url}
            className="whitespace-nowrap inline-block duration-150 text-white rounded-3xl font-medium px-5 py-2 bg-tertiary hover:bg-hover-tertiary"
          >
            View Model
          </Link>
        </aside>
      </li>
    </ul>
  );
};

export default MotorcycleCard;
