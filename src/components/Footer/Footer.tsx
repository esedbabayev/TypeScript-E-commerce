import React from "react";

// Link
import { Link } from "react-router-dom";

// Components
import Container from "../Container.tsx";

// Images
import FooterLogo from "../../images/FooterLogo.tsx";

// Icons
import Github from "../../icons/Github.tsx";
import Instagram from "../../icons/Instagram.tsx";
import Youtube from "../../icons/Youtube.tsx";
import MasterCard from "../../icons/MasterCard.tsx";
import Amex from "../../icons/Amex.tsx";
import Visa from "../../icons/Visa.tsx";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col">
          <div className="flex justify-between py-20">
            {/* left */}
            <div className="flex flex-col gap-6">
              {/* logo */}
              <div>
                <FooterLogo />
              </div>
              {/* text */}
              <div>
                <p className="text-left text-base">
                  DevCut is a YouTube channel for <br /> practical project-based
                  learning.
                </p>
              </div>
              {/* social media icons */}
              <div className="flex gap-10">
                <Link to="">
                  <Github />
                </Link>
                <Link to="">
                  <Instagram />
                </Link>
                <Link to="">
                  <Youtube />
                </Link>
              </div>
            </div>
            {/* middle */}
            <div className="flex gap-16">
              <div className="flex flex-col gap-8">
                <h3 className="font-medium text-base text-[#878A92]">
                  SUPPORT
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    FAQ
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Terms of use
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Privacy Policy
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-medium text-base text-[#878A92]">
                  COMPANY
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    About us
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Contact
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Careers
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-medium text-base text-[#878A92]">SHOP</h3>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    My Account
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Checkout
                  </p>
                  <p className="font-medium text-base text-[#5C5F6A] cursor-pointer hover:underline">
                    Cart
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col gap-7">
              <p className="uppercase">ACCEPTED PAYMENTS</p>
              <div className="flex gap-10">
                <MasterCard />
                <Amex />
                <Visa />
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="border-t-2 flex justify-center py-6">
            <p className="font-normal text-base text-[#5C5F6A]">
              © 2023 DevCut. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
