import React from "react";
import About from "../components/VisitDetail/About";
import HeroCommon from "../components/HeroCommon";
import { Components, Div, PageWrapper } from "../styles/DetailPage/About";
import ChatWithExpert from "../components/VisitDetail/ChatWithExpert";
import WhenToGo from "../components/VisitDetail/WhenToGo";
import WideLife from "../components/VisitDetail/WideLife";

export default function TripDetailPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
      <PageWrapper>
        <Components>
          <About />
          <WhenToGo />
          <WideLife/>
        </Components>
        <Div>
          <ChatWithExpert />
        </Div>
      </PageWrapper>
    </>
  );
}
