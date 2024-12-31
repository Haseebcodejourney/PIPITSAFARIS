import React, { useState, useEffect } from 'react';
import { Card, CardInnerBox, CardWrapper, Container, Figure, H2, Image, RatingWrapper, Strong, Round, HeadingWrapper, PriceWrapper, Div, Paper } from '../../styles/hotels/Style';
import StarIcon from '@mui/icons-material/Star';
import data from '../../api/hotels.json'

export default function Cards() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setHotels(data.hotels);
  }, []);

  return (
    <>
      <Container>
        <H2>Most popular hotels</H2>
        <CardWrapper>
          {hotels.map((hotel) => (
            <Card key={hotel.id}>
              <Figure>
                <Image src={hotel.image} alt={hotel.name} width={405} height={360} />
              </Figure>
              <CardInnerBox>
                <HeadingWrapper>
                  <Strong>{hotel.name}</Strong>
                  <Round>{hotel.rating}</Round>
                </HeadingWrapper>
                <RatingWrapper>
                  {Array(hotel.stars)
                    .fill(null)
                    .map((_, index) => (
                      <StarIcon key={index} style={{ color: '#ff5b00' }} />
                    ))}
                </RatingWrapper>
                <PriceWrapper>
                  <Strong>{hotel.location}</Strong>
                  <Div>
                    <Paper>From</Paper>
                    <Strong>{hotel.price}</Strong>
                  </Div>
                </PriceWrapper>
              </CardInnerBox>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}
