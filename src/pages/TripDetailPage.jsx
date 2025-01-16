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

const TripDetailPage = ({ theme }) => (
  <>
    {/* Hero Section */}
    <HeroCommon
      theme={theme}
      heading="We believe in getting you the best trip at the best price, without making it complicated."
      subText="With over 50 years of experience in the safari industry, PIPITSAFARIS is here to bring you the best Africa has to offer."
    />

    {/* Main Content Section */}
    <PageWrapper theme={theme}>
      <Components theme={theme}>
        <About theme={theme} />
        <WhenToGo theme={theme} />
        <WhatToDo theme={theme} />
        <WideLife theme={theme} />
        <WhatToKnow theme={theme} />
      </Components>

      {/* Chat With Expert */}
      <Div>
        <ChatWithExpert theme={theme} />
      </Div>
    </PageWrapper>

    {/* Frequently Asked Questions */}
    <FAQS theme={theme} />
  </>
);

export default TripDetailPage;
