"use client";

import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import validateImageUrl from "@/utils/validateImageUrl";

type PropsType = Partial<{
  desktopBgImage?: string;
  mobileBgImage?: string;
  title?: string;
  description?: string;
  textPosition:
    | "center-center"
    | "center-left"
    | "center-right"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "top-center"
    | any;
  fullHeight?: boolean;
  scrollDown?: boolean;
  imageTitleUrl?: string;
  readMore?: string;
  isSeo?: boolean;
  imageContent?: string;
  button?: {
    text: string;
    url: string;
    isDownload: boolean;
  };
}>;

const Hero = (props: PropsType) => {
  const router = useRouter();
  const {
    desktopBgImage,
    mobileBgImage,
    title,
    description,
    fullHeight,
    textPosition,
    scrollDown,
    imageTitleUrl,
    readMore,
    imageContent,
    button,
    isSeo,
  } = props;

  return (
    <>
      <section
        className={` w-full relative ${!fullHeight && "h-[62vh]"} ${
          fullHeight && "h-[92vh]"
        } flex justify-center ${!desktopBgImage && "bg-black"}`}
      >
        {desktopBgImage && (
          <Image
            src={
              desktopBgImage.includes("/assets")
                ? desktopBgImage
                : validateImageUrl(desktopBgImage)
            }
            alt="banner"
            fill
            className={`brightness-[0.7] object-cover ${
              mobileBgImage && "hidden md:inline"
            }`}
          />
        )}

        {mobileBgImage && (
          <Image
            src={
              mobileBgImage.includes("/assets")
                ? mobileBgImage
                : validateImageUrl(mobileBgImage)
            }
            alt="banner"
            fill
            className={`brightness-[0.7] object-cover ${
              mobileBgImage && "inline md:hidden"
            }`}
          />
        )}
        {scrollDown && (
          <div className=" absolute bottom-16 z-20">
            <Link href={"#explore"}>
              <aside className=" flex items-center flex-col text-white">
                <IoIosArrowDown className=" text-[4rem] -mb-16" />
                <IoIosArrowDown className=" text-[7rem] -mb-12" />
              </aside>
            </Link>
          </div>
        )}

        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/30"></div>
        <div
          className={`relative h-full w-11/12 py-[5%] flex  z-10
            ${textPosition === "bottom-left" && "justify-start items-end"}
            ${textPosition === "bottom-right" && "justify-end items-end"}
            ${textPosition === "bottom-center" && "justify-center items-end"}
            ${textPosition === "top-left" && "justify-start items-start"}
            ${textPosition === "top-right" && "justify-end items-start"}
            ${textPosition === "top-center" && "justify-center items-start"}
            ${textPosition === "center-left" && "justify-start items-center"}
            ${textPosition === "center-right" && "justify-end items-center"}
            ${
              textPosition === "center-center" &&
              "justify-center items-center text-center"
            }
            `}
        >
          {imageContent ? (
            <Image
              src={validateImageUrl(imageContent)}
              alt="title"
              width={500}
              height={500}
            />
          ) : (
            <aside
              className={` relative z-10 text-white w-full max-w-[40rem] 3xl:max-w-[52rem]`}
            >
              {imageTitleUrl && (
                <Image
                  src={validateImageUrl(imageTitleUrl)}
                  alt="title"
                  width={300}
                  height={300}
                />
              )}
              {title && (
                <Heading
                  type={isSeo ? "h1" : "h3"}
                  className="text-[1.8rem] xl:text-[3rem] uppercase whitespace-pre-wrap"
                >
                  {title}
                </Heading>
              )}

              {description && (
                <p
                  className={classNames(
                    "mt-2 text-sm xl:text-base",
                    textPosition !== "bottom-left" && "whitespace-pre-wrap"
                  )}
                >
                  {description}
                </p>
              )}

              {/* {readMore && (
                <div className=" mt-5">
                  <Button appearance={"primary"} size={"medium"} url={readMore}>
                    Read More
                  </Button>
                </div>
              )} */}
              {!!(button?.url && button?.text) && (
                <div className=" mt-5">
                  <Button
                    onClick={() => router.push(button.url)}
                    appearance={"primary"}
                    size={"medium"}
                    download={button.isDownload}
                  >
                    {button.text}
                  </Button>
                </div>
              )}
            </aside>
          )}
        </div>
      </section>
      <div id="explore"></div>
    </>
  );
};

export default Hero;
