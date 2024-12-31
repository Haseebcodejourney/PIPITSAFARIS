import React from "react";
import {
  Container,
  Wrapper,
  Top,
  H2,
  Text,
} from "../../src/styles/empty/Empty.js";

function EmptyPage({ theme }) {
  return (
    <Container theme={theme}>
      <Wrapper theme={theme}>
        <Top theme={theme}>
          <H2 theme={theme}>This is an Empty Page</H2>
          <Text theme={theme}>
            There is currently no content available here. Stay tuned for
            updates!
          </Text>
        </Top>
      </Wrapper>
    </Container>
  );
}

export default EmptyPage;
