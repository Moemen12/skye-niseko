import React, { JSX } from "react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";
import {NAVLINKS} from "@/constants";
import {NavLink} from "@/types";

const AsideBar:React.FC = (): JSX.Element => {
  return <Sheet>
      <SheetTrigger className="lg:hidden">
          <Image
              src="/assets/images/menu.svg"
              width={20}
              height={20}
              alt="menu"

          />
      </SheetTrigger>
      <SheetContent side="left" className="w-[200px] bg-[#ddd]">
          <SheetHeader>
              <SheetTitle className="pb-12">
                  <Image
                      width={50}
                      height={50}
                      className="mx-auto"
                      src="/assets/images/skye-niseko-ring.svg"
                      alt="ring logo"
                  />
              </SheetTitle>
              <SheetDescription asChild={true}>
                  <nav>
                      <ul className="text-md capitalize text-nav flex-col flex gap-4">
                          {NAVLINKS.map(({id, title}: NavLink) => (
                              <li
                                  key={id}
                                  className="py-2.5 hover:text-sky hover:bg-[#92b6c8] hover:!text-white text-nav cursor-pointer"
                              >
                                  {title}
                              </li>
                          ))}
                      </ul>
                  </nav>
              </SheetDescription>
          </SheetHeader>
      </SheetContent>
  </Sheet>;
};
export default AsideBar;
