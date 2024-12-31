import React from "react";
import {
  Box,
  BoxWrapper,
  Container,
  H2,
  Text,
  Wrapper,
  Strong,
  Div,
} from "../styles/FindTrip/Style";
import HeroCommon from "../components/HeroCommon";

export default function FindTripPage({ theme }) {
  return (
    <>
      {/* <HeroCommon
               theme={theme}
               heading="We believe in getting you the best trip at the best price. Without making it complicated."
               subText="Coming from a background of 50 years in the safari industry, CloudSafaris is innovating to bring you the best Africa has to offer."
             /> */}
      <Container theme={theme}>
        <Wrapper theme={theme}>
          <H2 theme={theme}>PIPITSAFARIS, Inc. Concierge</H2>
          <Strong theme={theme}>Your personal safari planner</Strong>
          <Text theme={theme}>How long do you want to go for?</Text>
          <BoxWrapper theme={theme}>
            <Box theme={theme}>Under a week</Box>
            <Box theme={theme}>1 to 2 week</Box>
            <Box theme={theme}>More then 2 week</Box>
            <Box theme={theme}>I'm flexible</Box>
          </BoxWrapper>
        </Wrapper>
        <Div></Div>
      </Container>
    </>
  );
}
