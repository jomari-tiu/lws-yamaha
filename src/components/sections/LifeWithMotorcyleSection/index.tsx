import React from "react";
import Image from "next/image";

import SectionContainer from "../SectionContainer";

type PropsType = {
  imageTitle: string;
  desktopBgImage: string;
  mobileBgImage?: string;
  description: string;
};

const LifeWithMotorcycleSection = (props: PropsType) => {
  const { imageTitle, desktopBgImage, mobileBgImage, description } = props;
  return (
    <SectionContainer className=" flex items-end flex-col" width="widest">
      <section className=" min-h-[80vh] flex items-center relative w-[95.83%]">
        <aside className=" absolute right-0 top-0 w-[85%] h-full">
          <div className=" absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#131313] via-[#13131399] to-[#13131300] z-10"></div>
          <Image
            src={desktopBgImage}
            alt={"background"}
            fill
            className={` object-cover ${mobileBgImage && "hidden md:inline"}`}
          />
          {mobileBgImage && (
            <Image
              src={mobileBgImage}
              alt="banner"
              fill
              className={` object-cover ${mobileBgImage && "inline md:hidden"}`}
            />
          )}
        </aside>
        <aside className=" relative z-10 space-y-10">
          <Image
            src={imageTitle}
            width={400}
            height={300}
            alt="Be One With Speed"
            className="object-contain"
          />
          <p className=" text-xl text-white w-full md:w-[50%] lg:w-[40%] xl:w-[25%] ">
            {description}
          </p>
        </aside>
      </section>
    </SectionContainer>
  );
};

export default LifeWithMotorcycleSection;
