import React from "react";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  content: {
    type?: "contact-info" | undefined;
    title?: string;
    description?: string;
    email?: string;
    address?: string;
    contact?: string;
  }[];
};

const PrivacyPolicySection = (props: PropsType) => {
  const { title, content } = props;
  return (
    <SectionContainer width={"wide"} className=" space-y-10">
      <article className=" space-y-5 text-[#FFFFFF]">
        <Heading type="h2" className=" font-medium text-center mb-10 lg:mb-20">
          {title}
        </Heading>
        <div className="space-y-16 two-col-paragraph">
          {content?.map((item, indx) => (
            <article key={indx} className=" space-y-5">
              {item.type === "contact-info" ? (
                <div>
                  <p className=" font-medium mb-5">Data Protection Office</p>
                  <p className=" font-medium whitespace-pre-wrap">
                    {item?.address}
                  </p>
                  <p className=" font-medium whitespace-pre-wrap">
                    {item?.contact}
                  </p>
                  <p className=" font-medium whitespace-pre-wrap">
                    {item?.email}
                  </p>
                </div>
              ) : (
                <>
                  <p className=" font-medium">{item?.title}</p>
                  <p className=" whitespace-pre-wrap text-textGray">
                    {item?.description}
                  </p>
                </>
              )}
            </article>
          ))}
        </div>
      </article>
    </SectionContainer>
  );
};

export default PrivacyPolicySection;
