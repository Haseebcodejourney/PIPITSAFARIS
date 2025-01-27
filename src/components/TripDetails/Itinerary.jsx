import React from 'react';
import { Box, Container, DateDetailWapper, DatePaper, DateStrong, DateWapper, H2, List, ListItems, LocationWrapper, TabsWrapper } from '../../styles/FindTrip/Itinerary';
import BasicTabs from './BasicTabs'; // Importing the Tabs component

export default function Itinerary({theme}) {
  return (
    <Container theme={theme}>
      <H2 theme={theme}>Itinerary</H2>
      <List theme={theme}>
        <ListItems theme={theme}>2 Travellers</ListItems>
        <ListItems theme={theme}>January 28, 2025 - February 3, 2025</ListItems>
      </List>
      <Box theme={theme}>
        <DateDetailWapper theme={theme}>
          <DateWapper theme={theme}>
            <DatePaper theme={theme}>Jan 28</DatePaper>
            <DateStrong theme={theme}>Day 1</DateStrong>
          </DateWapper>
          <LocationWrapper theme={theme}>
            <DateWapper theme={theme}>
              <DatePaper theme={theme}>Pick-up</DatePaper>
              <DateStrong theme={theme}>Pick-up Location</DateStrong>
            </DateWapper>
          </LocationWrapper>
         
        </DateDetailWapper>
        <TabsWrapper theme={theme}>
            <BasicTabs theme={theme}/> {/* Rendering the Tabs component here */}
          </TabsWrapper>
      </Box>
    </Container>
  );
}
