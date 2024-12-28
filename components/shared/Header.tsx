import React, { JSX } from "react";
import Image from "next/image";
import { NAVLINKS } from "@/constants";
import { NavLink } from "@/types";
import AsideBar from "@/components/shared/Asidebar";
import Link from "next/link";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between max-w-6xl lg:mx-auto py-6 mx-3.5">
      <AsideBar />
      <Link className="mx-auto nano:w-16 sm:w-36" href={"/"}>
        <Image
          src="/assets/images/logo.svg"
          priority={true}
          width={140}
          height={57}
          className="lg:mx-0"
          alt="logo"
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="text-lg capitalize centerize-flex gap-7">
          {NAVLINKS.map(({ id, title }: NavLink) => (
            <li
              key={id}
              className="py-2.5 hover:text-sky text-nav cursor-pointer"
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
