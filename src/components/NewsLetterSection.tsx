import React from "react";

// Components
import Container from "./Container.tsx";
import Button from "./Button.tsx";

const NewsLetterSection: React.FC = () => {
  return (
    <section className="bg-[#F6F6F6] mt-48">
      <Container>
        <div className="flex justify-between py-16">
          {/* left */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Join Our Newsletter</h2>
            <p className="text-[14px] font-normal text-[#5C5F6A]">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          {/* right */}
          <div className="flex gap-4 p-4">
            <div className="flex flex-grow gap-2 border-solid border-2 border-[#E6E7E8] rounded-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="border-none outline-none flex-grow pl-4 w-full mr-16 bg-inherit"
              />
            </div>
            {/* button */}
            <div>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetterSection;
