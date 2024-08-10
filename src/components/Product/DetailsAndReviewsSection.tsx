import React from "react";

// Components
import Container from "../Container.tsx";
import DetailsAndReviewsButtons from "./DetailsAndReviewsButtons.tsx";
import DetailsAndReviews from "./DetailsAndReviews.tsx";

const DetailsAndReviewsSection = () => {
  return (
    <section className="mt-48">
      <Container>
        <div className="flex gap-24 items-center">
          <DetailsAndReviewsButtons />
          <DetailsAndReviews />
        </div>
      </Container>
    </section>
  );
};

export default DetailsAndReviewsSection;
