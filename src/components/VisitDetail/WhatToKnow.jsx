import React from "react";
import { Box, ComponentWrapper, Figure, H2, H3, Image, Left, Right, Strong, Text } from "../../styles/DetailPage/WhatToKnow";

export default function WhatToKnow({theme}) {
  return (
    <>
    <ComponentWrapper theme={theme}>
      <H2 theme={theme}>What to know</H2>
      <H3 theme={theme}>Safety & Vaccinations</H3>
      <Text theme={theme}>
        The Western Corridor is safe for travel with experienced guides.
        Vaccinations for Hepatitis A, Typhoid, Yellow Fever, and malaria
        prophylaxis are recommended for visitors to Tanzania.
      <br></br>
      <br></br>
      <Text theme={theme}>For more information regarding vaccinations and health notices, view the CDC’s page :</Text>
      <br></br>
      </Text>
      <Box theme={theme}>
        <Left theme={theme}>
            <Figure theme={theme}>
                <Image src='https://static.cloudsafaris.com/public/cdc.jpg?action=get' alt='' width={96} height={58} />
            </Figure>
        </Left>
        <Right>
            <Strong theme={theme}>Travelers</Strong>
            <Text theme={theme}>CDC Travel health notices and vaccination recommendations</Text>
        </Right>
      </Box>
      <br></br>
      <br></br>
      <H3 theme={theme}>Getting There</H3>
      <Text theme={theme}>Moru Kopjes is accessible by road, with most visitors arriving as part of a safari tour from lodges and camps within the Serengeti.
      </Text>
      <br></br>
      <br></br>
      <H3 theme={theme}>Getting Around</H3>
      <Text theme={theme}>Safari vehicles are essential for exploring the kopjes and the surrounding wildlife-rich areas, with guides providing invaluable insights.</Text>
      <br></br>
      <br></br>

      <H3 theme={theme}>Visas</H3>
      <Text theme={theme}>Visitors to Tanzania require a visa, obtainable on arrival or online through the eVisa system, ensuring access to national parks and wildlife reserves.</Text>
      </ComponentWrapper>
    </>
  );
}
