import React from 'react';
import { Box, Container, DateDetailWapper, DatePaper, DateStrong, DateWapper, H2, List, ListItems, LocationWrapper, TabsWrapper } from '../../styles/FindTrip/Itinerary';
import BasicTabs from './BasicTabs'; // Importing the Tabs component

export default function Itinerary() {
  return (
    <Container>
      <H2>Itinerary</H2>
      <List>
        <ListItems>2 Travellers</ListItems>
        <ListItems>January 28, 2025 - February 3, 2025</ListItems>
      </List>
      <Box>
        <DateDetailWapper>
          <DateWapper>
            <DatePaper>Jan 28</DatePaper>
            <DateStrong>Day 1</DateStrong>
          </DateWapper>
          <LocationWrapper>
            <DateWapper>
              <DatePaper>Pick-up</DatePaper>
              <DateStrong>Pick-up Location</DateStrong>
            </DateWapper>
          </LocationWrapper>
         
        </DateDetailWapper>
        <TabsWrapper>
            <BasicTabs /> {/* Rendering the Tabs component here */}
          </TabsWrapper>
      </Box>
    </Container>
  );
}
