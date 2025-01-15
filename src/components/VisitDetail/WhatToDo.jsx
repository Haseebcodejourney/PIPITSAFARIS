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

export default function WhatToDo() {
  return (
    <>
      <Wrapper>
        <H2>What to do</H2>
        <H3>Featured Experiences</H3>
        <Box>
          <Left>
            <H4>My Great Migration</H4>
            <Text>
              Witnessing The Great Migration is a spectacle that tops many
              wildlife enthusiasts' bucket lists. This annual journey,
              undertaken by over two million wildebeest, zebras, and gazelles,
              is one of the mos...
            </Text>
          </Left>
          <Right>
            <Figure>
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
