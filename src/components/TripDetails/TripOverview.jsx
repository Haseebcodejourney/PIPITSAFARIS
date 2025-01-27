import React from 'react';
import { Button, Container, H2, Text } from '../../styles/FindTrip/TripOverview';

export default function TripOverview({theme}) {
  return (
    <Container theme={theme}>
      <H2 theme={theme}>Trip Overview</H2>
      <Text theme={theme}>
        Embark on the adventure of a lifetime and conquer the roof of Africa by taking the Marangu Route to the summit of Mount Kilimanjaro. Known affectionately as the "Coca-Cola" route, Marangu offers a unique blend of breathtaking landscapes, rich cultural experiences, and the comfort of sleeping huts along the way—a distinguishing feature that sets it apart from other routes...
      </Text>
      <Button theme={theme}>Show more</Button>
    </Container>
  );
}
