import React from "react";

import Image from "next/image";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";
import config from "@/utils/config";

type PropsType = {
  image: string;
  warrantyList?: {
    url: string;
    title: string;
    urlLabel: string;
    isUrlDownload: true;
  }[];
};

const PolicyAndGuidedbookSection = (props: PropsType) => {
  const { image, warrantyList } = props;
  return (
    <SectionContainer width="narrow">
      <section className=" flex flex-wrap md:flex-nowrap justify-center items-center gap-10 text-white">
        <aside>
          <Image src={image} alt="image-warranty" width={350} height={350} />
        </aside>
        <ul className=" w-full md:w-10/12">
          {warrantyList?.map((warranty, indx) => (
            <li
              key={indx}
              className={`flex flex-col md:flex-row items-left gap-5 justify-between md:text-start ${
                indx > 0 && "pt-10"
              } ${warrantyList?.length !== indx + 1 && "border-b pb-5"}`}
            >
              <div className="min-w-sm">
                {" "}
                <Heading type={"h5"} className=" font-medium">
                  {warranty?.title}
                </Heading>
              </div>
              {warranty?.isUrlDownload && (
                <div className="w-fit">
                  <Button
                    appearance="primary"
                    size={"medium"}
                    url={
                      /^documents\/+/.test(warranty?.url)
                        ? `${config.imageBaseUrl}${warranty?.url}`
                        : warranty?.url
                    }
                    download={true}
                  >
                    {warranty?.urlLabel}
                  </Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </SectionContainer>
  );
};

export default PolicyAndGuidedbookSection;
