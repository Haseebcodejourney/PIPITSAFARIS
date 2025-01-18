import React from "react";
import Terms from "../components/terms/Terms";
import HeroCommon from "../components/HeroCommon";

export default function TermsPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="“Your perfect trip is one click away—book now for a seamless, stress-free experience!”"
        subText=""
      />
      <Terms theme={theme} />
    </>
  );
}
