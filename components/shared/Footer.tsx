import React, { JSX } from "react";
import { Input } from "../ui/input";
import { FOOTERICONS, INFOLINKS, NAVLINKS } from "@/constants";
import { FooterIcon, NavLink } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer
      className="bg-[#F7F6F6] py-16 w-full"
      style={{ overflowWrap: "break-word" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold">Skye Niseko Mailing List</h2>
            <p className="text-xs text-gray-400">
              Be the first to receive exclusive offers and the latest news from
              Skye Niseko
            </p>
            <div className="space-y-4">
              <Input
                className="w-full rounded-sm focus-visible:ring-0 focus:shadow-orange-950 bg-white"
                placeholder="Given Name"
              />
              <Input
                className="w-full rounded-sm focus-visible:ring-0 focus:shadow-orange-950 bg-white"
                placeholder="Family Name"
              />
              <Input
                className="w-full rounded-sm focus-visible:ring-0 focus:shadow-orange-950 bg-white"
                placeholder="Email Address"
              />
              <Button className="bg-[#b45e30]">Subscribe</Button>
            </div>
          </div>

          <div className="space-y-4">
            {NAVLINKS.map(({ title, id }: NavLink) => (
              <div
                className="cursor-pointer hover:text-[#b45e30] text-[#666666] text-sm capitalize"
                key={id}
              >
                {title}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="grid grid-flow-col gap-3 auto-cols-auto">
              {FOOTERICONS.map(({ icon, id, alt }: FooterIcon) => (
                <div
                  className="cursor-pointer hover:text-[#b45e30] text-[#666666]"
                  key={id}
                >
                  <Image src={icon} alt={alt} width={18} height={18} />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {INFOLINKS.map(({ title, id }: NavLink) => (
                <div
                  className="cursor-pointer hover:text-[#b45e30] text-[#666666] text-sm capitalize"
                  key={id}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[#666666] text-sm space-y-4">
            <Image
              src="/assets/images/skye-niseko-logo.svg"
              width={120}
              height={74}
              alt="skye-niseko-logo"
              className="mb-4"
            />
            <div className="space-y-4">
              <p>
                Niseko Hirafu 1-jo 3-chome 11-4,
                <br />
                Kutchan-cho, Abuta-gun
                <br />
                Hokkaido 044-0080
                <br />
                JAPAN
              </p>
              <p>
                Reservations:&nbsp;
                <a href="tel:+81 (0) 136 55 5123">+81 (0) 136 55 5123</a>
                <br />
                Front Desk:&nbsp;
                <a href="tel:+81 (0) 136 55 6414">+81 (0) 136 55 6414</a>
                <br />
                Email:&nbsp;
                <a href="mailto:enjoy@skyeniseko.com">enjoy@skyeniseko.com</a>
              </p>
              <p className="space-x-4">
                <small>
                  <a
                    href="https://www.skyeniseko.com/terms-and-conditions"
                    rel="noopener noreferrer"
                    target="_self"
                  >
                    Terms &amp; Conditions
                  </a>
                </small>
                <small>
                  <a
                    href="https://www.skyeniseko.com/privacy-policy"
                    rel="noopener noreferrer"
                    target="_self"
                  >
                    Privacy Policy
                  </a>
                </small>
              </p>
              <p>
                <small>© 2024 Skye Niseko.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
