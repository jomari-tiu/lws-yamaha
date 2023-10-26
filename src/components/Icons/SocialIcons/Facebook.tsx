import React from "react";
import Link from "next/link";

type IconsPropType = {
  width: number;
  height: number;
  color: string;
  link: string;
};

const Facebook = (props: IconsPropType) => {
  const { width, height, color, link } = props;
  return (
    <Link href={link}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 41"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3751 23.563H18.0877L19.9728 15.6282H13.3751V11.6609C13.3751 9.61768 13.3751 7.69351 17.1452 7.69351H19.9728V1.02833C19.3583 0.943028 17.0378 0.75061 14.5872 0.75061C9.46925 0.75061 5.83486 4.03757 5.83486 10.0739V15.6282H0.179688V23.563H5.83486V40.4243H13.3751V23.563Z"
          fill={color}
        />
      </svg>
    </Link>
  );
};

export default Facebook;
