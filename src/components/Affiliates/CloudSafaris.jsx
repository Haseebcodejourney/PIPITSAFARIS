import React from "react";
import { Button, Container, H2 } from "../../styles/Affiliates/CloudSafaris";

export default function CloudSafaris({ theme }) {
  return (
    <>
      <Container theme={theme}>
        <H2 theme={theme}>Become a PIPITSAFARIS Affiliate</H2>
        <Button theme={theme}>Apply Now </Button>
      </Container>
    </>
  );
}
