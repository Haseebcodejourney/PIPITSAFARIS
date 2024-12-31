import React from "react";
import Exclusive from "../components/Affiliates/Exclusive";
import BackGround from "../components/Affiliates/BackGround";
import Benefits from "../components/Affiliates/Benefits";
import Faqs from "../components/Affiliates/Faqs";
import CloudSafaris from "../components/Affiliates/CloudSafaris";
import HeroCommon from "../components/HeroCommon";

export default function AffiliatesPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
      <Exclusive theme={theme} />
      <BackGround theme={theme} />
      <Benefits theme={theme} />
      <Faqs theme={theme} />
      <CloudSafaris theme={theme} />
    </>
  );
}
