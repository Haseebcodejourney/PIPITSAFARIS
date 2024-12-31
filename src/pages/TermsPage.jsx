import React from "react";
import Terms from "../components/terms/Terms";
import HeroCommon from "../components/HeroCommon";

export default function TermsPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
      <Terms theme={theme} />
    </>
  );
}
