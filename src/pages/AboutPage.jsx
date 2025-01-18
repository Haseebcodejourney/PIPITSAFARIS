import React from 'react'
import BookTrip from '../components/about/BookTrip'
import Accomodation from '../components/about/Accomodation';
import Perks from '../components/about/Perks';
import Team from '../components/about/Team';
import HeroCommon from '../components/HeroCommon';

export default function AboutPage({theme}) {
  return (
    <>
      <HeroCommon
             theme={theme}
             heading="We believe in getting you the best trip at the best price. Without making it complicated."
             subText="Coming from a background of 50 years in the safari industry, PipitSafaris is innovating to bring you the best Africa has to offer."
           />
      <BookTrip theme={theme}/>
      <Accomodation theme={theme}/>
      <Perks theme={theme}/>
      <Team theme={theme}/>
    </>
  )
}
