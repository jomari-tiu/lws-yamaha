import React from "react";
import Image from "next/image";

import Link from "next/link";
import { PiShareBold } from "react-icons/pi";

import SocialMediaIcons from "../SocialMediaIcons";
import NavBar from "./NavBar";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <main>
      <NavBar />
      {children}
      <footer className="w-full flex justify-center items-center flex-col bg-primary text-white pb-5 pt-10 pb-15 space-y-20">
        <ul className=" flex items-center w-full gap-5">
          <li className=" border border-white flex-1"></li>
          <li>
            <Image
              src={"/images/footer/footer-quote.png"}
              width={700}
              height={200}
              alt={"footer-quote"}
            />
          </li>
          <li className=" border border-white flex-1"></li>
        </ul>
        <ul className=" flex gap-14">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className=" flex gap-2 items-center">
              Yamaha Motor Global <PiShareBold className=" text-1-2rem" />
            </Link>
          </li>
        </ul>
        <p>Copyright {"©"} 2023 Yamaha Motors Philippines Inc.</p>
        <SocialMediaIcons />
      </footer>
    </main>
  );
}

export default Layout;
