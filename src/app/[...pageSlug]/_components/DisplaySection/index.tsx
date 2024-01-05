"use client";

import React from "react";

import dynamic from "next/dynamic";

import GridEmbedSocialSection from "@/app/components/_components/GridEmbedSocialSection";
import BlogSection from "@/components/sections/BlogSection";
import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";
import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";
import PrivacyPolicySection from "@/components/sections/PrivacyPolicySection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import VideoSection from "@/components/sections/VideoSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

import YamahaHistorySection from "@/components/sections/YamahaHistorySection";
import YamahalubeCharacteristicSection from "@/components/sections/YamahalubeCharacteristicSection";

import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";

import YdtSection from "@/components/sections/YdtSection";

import ArrowTitle from "@/components/shared/ArrowTitle";

import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";

import OurServicesComponent from "../OurServicesComponent";
import PageSectionType from "../PageSectionType";
import { SectionTypes } from "./sectionTypes";
import ImageTwoColParagraph from "../ImageTwoColParagraphSection";
import AnnouncementModal from "@/components/shared/modals/AnnouncementModal";

const NewsGridSectionComponent = dynamic(
  () => import("../NewsGridSectionComponent")
);
const MotorcycleCarouselSectionComponent = dynamic(
  () => import("../MotorcycleCarouselSectionComponent")
);
const Hero = dynamic(() => import("@/components/sections/Hero"));
const ImageLinks = dynamic(() => import("@/components/sections/ImageLinks"));
const Loading = dynamic(() => import("@/components/shared/Loading"));

const YamahaLifestyleStudioPageSection = dynamic(
  () => import("../YamahaLifestyleStudioPageSection")
);
type PropsType = {
  endpoint: string;
  queryName: string;
  slug: string;
};

const DisplaySection = (props: PropsType) => {
  const { endpoint, queryName } = props;
  const { useGet }: any = useAPI(endpoint);
  const { data: page, isLoading: pageLoading }: any = useGet(queryName);
  const pageSections: any = page?.data;

  if (pageLoading) {
    return <Loading />;
  }

  const renderSection = (section: any) => {
    switch (section.sectionType) {
      case PageSectionType.lifestyleStudio:
        return (
          <YamahaLifestyleStudioPageSection
            {...section}
            url={section.url}
            key={section.id}
          />
        );
      case PageSectionType.imageTwoColParagraph:
        return <ImageTwoColParagraph {...section} key={section.id} />;
    }
  };

  const renderAnnoucementModal = () => {
    if (!["home", "", "/"].includes(props.slug)) return;

    return (
      <AnnouncementModal desktopImage={"/assets/images/announcement.jpg"} />
    );
  };

  return (
    <>
      {renderAnnoucementModal()}
      {pageSections?.map((section: SectionTypes, index: number) => (
        <section key={section?.id}>
          {section?.sectionType === "hero-section" && (
            <Hero
              fullHeight={section?.fullScreen}
              button={{
                text: section.urlLabel,
                url: section.url,
                isDownload: section.isUrlDownload,
              }}
              desktopBgImage={
                section?.backgroundImage
                  ? validateImageUrl(section?.backgroundImage)
                  : ""
              }
              isSeo={index === 0}
              mobileBgImage={
                section?.backgroundImage
                  ? validateImageUrl(section?.backgroundImage)
                  : ""
              }
              title={section?.title}
              description={section?.description}
              textPosition={
                section?.alignContentHorizontal && section?.alignContentVertical
                  ? `${section?.alignContentVertical}-${section?.alignContentHorizontal}`
                  : "center-center"
              }
              imageTitleUrl={section?.image}
              scrollDown={section?.scrollDown}
              imageContent={
                section?.imageContent
                  ? validateImageUrl(section?.imageContent)
                  : ""
              }
            />
          )}
          {section?.sectionType === "vehicle-section" && (
            <MotorcycleCarouselSectionComponent
              vehicleIds={section?.vehicleIds?.join(",")}
              title={section?.title}
              description={section?.description}
              image={validateImageUrl(section?.backgroundImage)}
              url={section?.url}
            />
          )}
          {section?.sectionType === "news-section" && (
            <NewsGridSectionComponent
              newsIds={section?.newsArticleIds?.join(",")}
            />
          )}

          {section?.sectionType === "button-cards-section" && (
            <ImageLinks imageLinks={section?.buttonCards} />
          )}
          {section?.sectionType === "text-section" && (
            <ParagraphAndDownloadSection
              title={section?.title}
              paragraph={section?.description}
              textAlignment={section?.alignContentHorizontal}
              downloadLink={section?.url}
              labelUrl={section?.urlLabel}
            />
          )}
          {section?.sectionType === "warranty-guide-book-section" && (
            <PolicyAndGuidedbookSection
              image={validateImageUrl(section?.image)}
              warrantyList={section?.contents}
            />
          )}
          {section?.sectionType === "service-detail-section" && (
            <ServiceDetailSection
              image={validateImageUrl(section?.image)}
              contentAlignment={section?.alignContentHorizontal}
              title={section?.title}
              description={section?.description}
              content={[
                {
                  type: "list",
                  value: section?.contents?.map(
                    (content: { title: string; description: string }) => {
                      return {
                        title: content.title,
                        description: content.description,
                      };
                    }
                  ),
                },
                {
                  type: "icons",
                  value: section?.contents?.map((content: any) => {
                    return {
                      icon: content.image
                        ? validateImageUrl(content.image)
                        : "",
                      title: content.label,
                    };
                  }),
                },
              ]}
              url={section?.url}
              urlTitle={section?.urlLabel}
            />
          )}
          {section?.sectionType === "yamaha-technical-academy-section" && (
            <YamahaTechnicalAcademySection
              icon={"/assets/images/samples/sample-academy-star.png"}
              title={section?.title}
              description={section?.description}
              boxes={section?.contents}
            />
          )}
          {section?.sectionType === "yamalube-characteristic-section" && (
            <YamahalubeCharacteristicSection
              title={section?.title}
              image={validateImageUrl(section?.image)}
              characteristics={section?.contents}
              url={section?.url}
            />
          )}
          {section?.sectionType === "video-section" && (
            <VideoSection
              youtubeUrl={section?.video}
              description={section?.description}
              title={section?.title}
              imagePreview={section?.image}
            />
          )}
          {section?.sectionType === "ydt-section" && (
            <YdtSection
              icon={"/assets/images/ydt/ydt-icon.png"}
              title={section?.title}
              image={validateImageUrl(section?.image)}
              content={section?.contents}
            />
          )}
          {section?.sectionType === "our-service-section" && (
            <OurServicesComponent />
          )}
          {section?.sectionType === "why-choose-us-section" && (
            <WhyChooseUsSection
              features={section?.contents.map(
                (
                  item: { image: string; title: string; description: string },
                  indx
                ) => {
                  return {
                    id: indx,
                    image: validateImageUrl(item?.image),
                    title: item?.title,
                    description: item?.description,
                  };
                }
              )}
            />
          )}

          {section?.sectionType === "blog-section" && (
            <BlogSection
              blog={{
                id: Number(section?.id),
                backgroundImage: validateImageUrl(section?.backgroundImage),
                title: section?.title,
                description: section?.description,
              }}
            />
          )}

          {section?.sectionType === "yamaha-history-section" && (
            <YamahaHistorySection newsData={section?.contents} />
          )}

          {section?.sectionType === "privacy-policy-section" && (
            <PrivacyPolicySection
              title={section?.title}
              content={section?.contents}
            />
          )}

          {section?.sectionType === "embed-social-section" && (
            <section className=" mt-10 lg:mt-20">
              <ArrowTitle title={section?.title} />
              {section?.contents.map((item, indx) => (
                <GridEmbedSocialSection key={indx} embedId={item} />
              ))}
            </section>
          )}

          {renderSection(section)}
        </section>
      ))}
      {/* <InquieryAndFindDealerButtons /> */}
    </>
  );
};

export default DisplaySection;
