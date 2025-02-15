"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

import SearchModal from "../SearchModal";
import MobileMenu from "./MobileMenu";
import SubMenu from "./SubMenu";

export type MenuType = {
  id: number;
  label: string;
  url: string;
  parentId: string | null;
  children: MenuType[];
  withLinkIcon: boolean;
};

type PropsType = {
  menu: MenuType[];
};

const Header = (props: PropsType) => {
  const router = useRouter();
  const { menu } = props;
  const pathname = usePathname();
  const [clickedMenu, setClickedMenu] = useState<MenuType | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      {showSearchModal && (
        <SearchModal
          onClose={() => {
            setShowSearchModal(false);
          }}
        />
      )}
      <nav className="w-full sticky top-0 flex h-[10vh] md:h-auto justify-center bg-primary-2 text-white py-6 z-40">
        <div className=" w-11/12 flex items-center justify-between gap-5">
          <aside
            className=" cursor-pointer"
            onClick={() => {
              router.push("/");
              setClickedMenu(null);
              setMobileMenu(false);
            }}
          >
            <Image
              src="/assets/images/logo/logo.png"
              alt="logo"
              width={120}
              height={50}
            />
          </aside>
          <aside className=" flex items-center gap-5 text-textGray">
            <ul className="hidden xl:flex gap-7 3xl:gap-10 items-center text-center ">
              {menu
                .sort((a, b) => a.id - b.id)
                .map((item, indx) => (
                  <li key={indx} className=" text-sm 3xl:text-base">
                    {item?.children ? (
                      <div
                        className={` hover:text-white duration-150 cursor-pointer flex items-center gap-2 ${
                          (clickedMenu?.label === item.label ||
                            pathname.includes(item.url)) &&
                          "text-white"
                        }`}
                        onClick={() => {
                          item.url === clickedMenu?.url
                            ? setClickedMenu(null)
                            : setClickedMenu(item);
                        }}
                      >
                        {item.label === "More" ? (
                          <IoIosArrowDropdown className="text-2xl" />
                        ) : (
                          <>
                            {item.label} <IoIosArrowDown />
                          </>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={`${item?.url}`}
                        className={` hover:text-white duration-150 ${
                          (clickedMenu?.label === item.label ||
                            pathname.includes(item.url)) &&
                          "text-white"
                        }`}
                        onClick={() => {
                          setClickedMenu(null);
                          setMobileMenu(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
            <ul className="flex gap-5 items-center text-center">
              <li>
                <BiSearch
                  className=" text-2xl cursor-pointer"
                  onClick={() => setShowSearchModal(true)}
                />
              </li>
              <li>
                <div
                  className={` hover:text-white duration-150 cursor-pointer text-base flex items-center gap-2 `}
                >
                  <IoMenuSharp
                    className={` inline-block xl:hidden text-2xl ${
                      mobileMenu && "pointer-events-none"
                    }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                  />
                </div>
              </li>
            </ul>
          </aside>
        </div>
        {clickedMenu !== null && (
          <SubMenu clickedMenu={clickedMenu} setClickedMenu={setClickedMenu} />
        )}
        {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} menu={menu} />}
      </nav>
    </>
  );
};

export default Header;
