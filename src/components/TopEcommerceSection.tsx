import React from "react";

// Components
import Container from "../components/Container.tsx";

// Icons
import ChevronRight from "../icons/ChevronRight.tsx";

type Props = {
  nameOfPage: string;
  search: string;
};

const TopEcommerceSection: React.FC<Props> = ({ nameOfPage, search }) => {
  return (
    <section className="bg-[#F6F6F6]">
      <Container>
        <div className="flex flex-col gap-2 py-9">
          <div>
            <h3 className="font-bold text-2xl text-[#0E1422]">{nameOfPage}</h3>
          </div>
          <div className="flex">
            <span className="font-medium text-base text-[#5C5F6A]">Ecommerce</span>
            <ChevronRight />
            <span className="font-medium text-base text-[#0E1422]">{search}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopEcommerceSection;
