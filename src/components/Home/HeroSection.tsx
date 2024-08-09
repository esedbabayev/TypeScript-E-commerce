import React from "react";

// Components
import Button from "../Button.tsx";
import Container from "../Container.tsx";

// Icons
import ArrowRight from "../icons/ArrowRight.tsx"

// Images
import Hero from "../../images/Hero.tsx";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F6F6F6]">
      <Container>
        <div className="flex justify-between items-center pt-24 pb-[10px]">
          {/* letfside */}
          <div className="flex flex-col gap-12">
            {/* texts */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold">Fresh Arrivals Online</h2>
              <p className="text-[14px] font-normal text-[#5C5F6A]">Discover Our Newest Collection Today.</p>
            </div>
            <Button>
              View Collection<span></span>{"-->"}
              {/* <ArrowRight /> */}
            </Button>
          </div>
          {/* rightside image */}
          <div className="">
            <div className="w-[500px] h-[500px] rounded-full bg-[#E9E9EB] relative">
              <Hero />
            </div>
          </div>
        </div>
      </Container >
    </section>
  );
};

export default HeroSection;
