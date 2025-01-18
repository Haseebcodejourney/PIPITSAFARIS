import React from "react";
import {
  H3,
  H2,
  Wrapper,
  Box,
  Right,
  Left,
  H4,
  Text,
  Figure,
  Image,
} from "../../styles/DetailPage/WhatToDo";

export default function WhatToDo({theme}) {
  return (
    <>
      <Wrapper theme={theme}>
        <H2 theme={theme}>What to do</H2>
        <H3 theme={theme}>Featured Experiences</H3>
        <Box theme={theme}>
          <Left theme={theme}>
            <H4 theme={theme}>My Great Migration</H4>
            <Text theme={theme}>
              Witnessing The Great Migration is a spectacle that tops many
              wildlife enthusiasts' bucket lists. This annual journey,
              undertaken by over two million wildebeest, zebras, and gazelles,
              is one of the mos...
            </Text>
          </Left>
          <Right theme={theme}>
            <Figure theme={theme}>
              <Image
                src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                alt=""
                width={326}
                height={163}
              />
            </Figure>
          </Right>
        </Box>
      </Wrapper>
    </>
  );
}
