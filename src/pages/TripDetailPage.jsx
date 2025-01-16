import React, { useState, useEffect, useRef } from "react";
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
  const sectionRefs = useRef({}); // To store references to sections

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab);
    if (section) {
      const offset = 150; // Adjust scroll position to stop 30px before the section
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when the section is roughly in the middle of the viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.keys(sectionRefs.current).forEach((key) => {
      const section = sectionRefs.current[key];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price, without making it complicated."
        subText="With over 50 years of experience in the safari industry, PIPITSAFARIS is here to bring you the best Africa has to offer."
      />

      {/* Tab Navigation */}
      <TabWrapper theme={theme}>
        <InnerTabWrapper theme={theme}>
          {["about", "when-to-go", "what-to-do", "wide-life", "what-to-know"].map((tab) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => handleTabClick(tab)}
              theme={theme}
            >
              {tab.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </Tab>
          ))}
        </InnerTabWrapper>
      </TabWrapper>

      {/* Main Content Section */}
      <PageWrapper theme={theme}>
        <Components theme={theme}>
          <div id="about" ref={(el) => (sectionRefs.current["about"] = el)}>
            <About theme={theme} />
          </div>
          <div id="when-to-go" ref={(el) => (sectionRefs.current["when-to-go"] = el)}>
            <WhenToGo theme={theme} />
          </div>
          <div id="what-to-do" ref={(el) => (sectionRefs.current["what-to-do"] = el)}>
            <WhatToDo theme={theme} />
          </div>
          <div id="wide-life" ref={(el) => (sectionRefs.current["wide-life"] = el)}>
            <WideLife theme={theme} />
          </div>
          <div id="what-to-know" ref={(el) => (sectionRefs.current["what-to-know"] = el)}>
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
