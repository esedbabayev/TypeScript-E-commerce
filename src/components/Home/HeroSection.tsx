import React from "react";

// Components
import Button from "../Button.tsx";

// Icons
import ArrowRight from "../icons/ArrowRight.tsx"

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F6F6F6]">
      {/* letfside */}
      <div>
        {/* texts */}
        <div>
            <h2>Fresh Arrivals Online</h2>
            <p>Discover Our Newest Collection Today.</p>
        </div>
        <Button>View Collection
            <ArrowRight />
        </Button>
      </div>
      {/* rightside image */}
      <div>

      </div>
    </section>
  );
};

export default HeroSection;
