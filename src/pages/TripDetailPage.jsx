import React from 'react'
import HeroCommon from '../components/HeroCommon';
import { Container, Left, PageWrapper, RBox, Right, RTop, RTopText } from '../styles/TripDetail/Style';
import TripDetailsHero from '../components/TripDetails/TripDetailsHero';
import TripOverview from '../components/TripDetails/TripOverview';
import TripDayByDay from '../components/TripDetails/DayByDay';
import Itinerary from '../components/TripDetails/Itinerary';
import WhatToknow from '../components/TripDetails/WhatToknow';
import BriefItinerary from '../components/TripDetails/BriefItinerary';

export default function TripDetailPage({theme}) {
  return (
 <>
  <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, PIPITSAFARIS is innovating to bring you the best Africa has to offer."
      />
    <Container theme={theme}>
      <Left theme={theme}>
        <TripDetailsHero theme={theme}/>
        <TripOverview theme={theme}/>
        <TripDayByDay theme={theme} />
        <Itinerary theme={theme}/>
        <WhatToknow theme={theme}/>
      </Left>
      <BriefItinerary theme={theme}/>
    </Container>
 </>
  )
}
