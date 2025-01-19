import React from 'react';
import { Container, H2, H3, Text, List, ListItems, MapWrapper, IncludedWrapper, ExcludedWrapper, H4, Paper, ListTick, ListExclude } from '../../styles/FindTrip/DayByDay';

export default function DayByDay() {
  return (
    <Container>
      <H2>Day by day</H2>

      <List>
        <ListItems className="active">Day 1</ListItems>
        <ListItems>Day 2</ListItems>
        <ListItems>Day 3</ListItems>
        <ListItems>Day 4</ListItems>
        <ListItems>Day 5</ListItems>
        <ListItems>Day 6</ListItems>
        <ListItems>Day 7</ListItems>
      </List>

      <H3>Arrival and Preparation Day at Springlands Hotel, Moshi</H3>

      <Text>
        Begin your adventure with a transfer from JRO directly to the Springlands Hotel in Moshi...
      </Text>

      <MapWrapper />
      
      <IncludedWrapper>
        <H4>What's included
          <Paper>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </Paper>
        </H4>
        <ListTick>
          <ListItems>
            <Paper>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
            </Paper>
            Transportation from Moshi to the starting point on the mountain and return to Moshi.
          </ListItems>
          {/* Add other list items here */}
        </ListTick>
      </IncludedWrapper>

      <ExcludedWrapper>
        <H4>What's excluded
          <Paper>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
            </svg>
          </Paper>
        </H4>
        <ListExclude>
          <ListItems>
            <Paper>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times text-red-600 text-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path>
              </svg>
            </Paper>
            Guides, Porters, Cook Tips, Gears eg. Sleeping Bags, Clothes, and Shoes
          </ListItems>
          {/* Add other list items here */}
        </ListExclude>
      </ExcludedWrapper>
    </Container>
  );
}
