import React from "react";
import {
  Container,
  Wrapper,
  Top,
  H2,
  Text,
  Button,
} from "../../styles/errorPage/ErrorPage";

function ErrorPage({ theme }) {
  return (
    <Container theme={theme}>
      <Wrapper theme={theme}>
        <Top theme={theme}>
          <H2 theme={theme}>Oops! Something went wrong.</H2>
          <Text theme={theme}>
            We couldn't find the page you were looking for. Please check the URL
            or try again later.
          </Text>
          <Button theme={theme} onClick={() => (window.location.href = "/")}>
            Go Back Home
          </Button>
        </Top>
      </Wrapper>
    </Container>
  );
}

export default ErrorPage;
