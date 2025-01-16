import React, { useState } from "react";
import About from "../components/VisitDetail/About";
import HeroCommon from "../components/HeroCommon";
import { Components, Div, PageWrapper } from "../styles/DetailPage/About";
import ChatWithExpert from "../components/VisitDetail/ChatWithExpert";
import WhenToGo from "../components/VisitDetail/WhenToGo";
import WhatToDo from "../components/VisitDetail/WhatToDo";
import WideLife from "../components/VisitDetail/WideLife";
import WhatToKnow from "../components/VisitDetail/WhatToKnow";
import FAQS from "../components/VisitDetail/FAQS";
import { Tab, TabWrapper, InnerTabWrapper } from "../styles/DetailPage/Tabs";

const TripDetailPage = ({ theme }) => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab);
    if (section) {
      const offset = 70; // Adjust scroll position to stop 30px before the section
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price, without making it complicated."
        subText="With over 50 years of experience in the safari industry, PIPITSAFARIS is here to bring you the best Africa has to offer."
      />

      {/* Tab Navigation */}
      <TabWrapper>
      <InnerTabWrapper>
        <Tab
          onClick={() => handleTabClick("about")}
          style={{
            background: activeTab === "about" ? "#276749" : "#e2e8f0",
            color: activeTab === "about" ? "#fff" : "#000",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          About
        </Tab>
        <Tab
          onClick={() => handleTabClick("when-to-go")}
          style={{
            background: activeTab === "when-to-go" ? "#276749" : "#e2e8f0",
            color: activeTab === "when-to-go" ? "#fff" : "#000",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          When to Go
        </Tab>
        <Tab
          onClick={() => handleTabClick("what-to-do")}
          style={{
            background: activeTab === "what-to-do" ? "#276749" : "#e2e8f0",
            color: activeTab === "what-to-do" ? "#fff" : "#000",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          What to Do
        </Tab>
        <Tab
          onClick={() => handleTabClick("wide-life")}
          style={{
            background: activeTab === "wide-life" ? "#276749" : "#e2e8f0",
            color: activeTab === "wide-life" ? "#fff" : "#000",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Wildlife
        </Tab>
        <Tab
          onClick={() => handleTabClick("what-to-know")}
          style={{
            background: activeTab === "what-to-know" ? "#276749" : "#e2e8f0",
            color: activeTab === "what-to-know" ? "#fff" : "#000",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          What to Know
        </Tab>
      </InnerTabWrapper>
      </TabWrapper>

      {/* Main Content Section */}
      <PageWrapper theme={theme}>
        <Components theme={theme}>
          <div id="about">
            <About theme={theme} />
          </div>
          <div id="when-to-go">
            <WhenToGo theme={theme} />
          </div>
          <div id="what-to-do">
            <WhatToDo theme={theme} />
          </div>
          <div id="wide-life">
            <WideLife theme={theme} />
          </div>
          <div id="what-to-know">
            <WhatToKnow theme={theme} />
          </div>
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
};

export default TripDetailPage;
