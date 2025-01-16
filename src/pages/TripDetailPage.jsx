import React from "react";
import About from "../components/VisitDetail/About";
import HeroCommon from "../components/HeroCommon";
import { Components, Div, PageWrapper } from "../styles/DetailPage/About";
import ChatWithExpert from "../components/VisitDetail/ChatWithExpert";
import WhenToGo from "../components/VisitDetail/WhenToGo";
import WhatToDo from "../components/VisitDetail/WhatToDo";
import WideLife from "../components/VisitDetail/WideLife";
import WhatToKnow from "../components/VisitDetail/WhatToKnow";
import FAQS from "../components/VisitDetail/FAQS";

export default function TripDetailPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
      <PageWrapper theme={theme}>
        <Components theme={theme}>
          <About theme={theme}/>
          <WhenToGo theme={theme}/>
          <WhatToDo theme={theme}/>
          <WideLife theme={theme}/>
          <WhatToKnow theme={theme}/>
        </Components>
        <Div>
          <ChatWithExpert theme={theme}/>
        </Div>
      </PageWrapper>
      <FAQS theme={theme}/>
    </>
  );
}
