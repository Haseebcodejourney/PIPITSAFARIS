import React from "react";
import Privacy from "../components/privacy/Privacy";
import HeroCommon from "../components/HeroCommon";

export default function PrivacyPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
      <Privacy theme={theme} />
    </>
  );
}
