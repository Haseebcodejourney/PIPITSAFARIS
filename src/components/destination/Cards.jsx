import React, { useState, useEffect } from 'react';
import { 
  Card, CardInnerBox, CardWrapper, Container, Figure, H2, Image, 
  RatingWrapper, Strong, Round, HeadingWrapper, PriceWrapper, Div, Paper 
} from '../../styles/hotels/Style';
import StarIcon from '@mui/icons-material/Star';
import data from '../../api/hotels.json';
import { motion } from 'framer-motion';

export default function Cards({theme}) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setHotels(data.hotels || []);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container theme={theme}>
      <H2 theme={theme}>Top destinations</H2>
      <CardWrapper theme={theme}>
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id} // Use a unique key (hotel.id) here
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={boxVariants}
          >
            <Card theme={theme}>
              <Figure theme={theme}>
                <Image src={hotel.image} alt={hotel.name} width={405} height={360} />
              </Figure>
              <CardInnerBox theme={theme} className='destination-card-inner'>
                <HeadingWrapper theme={theme}>
                  <Strong theme={theme}>{hotel.name}</Strong>
                  {/* <Round theme={theme}>{hotel.rating}</Round> */}
                </HeadingWrapper>
                {/* <RatingWrapper theme={theme}>
                  {Array(hotel.stars || 0)
                    .fill(null)
                    .map((_, starIndex) => (
                      <StarIcon
                        theme={theme}
                        key={starIndex}
                        style={{ color: '#ff5b00' }}
                      />
                    ))}
                </RatingWrapper> */}
                {/* <PriceWrapper theme={theme}>
                  <Strong theme={theme}>{hotel.location}</Strong>
                  <Div theme={theme}>
                    <Paper theme={theme}>From</Paper>
                    <Strong theme={theme}>{hotel.price}</Strong>
                  </Div>
                </PriceWrapper> */}
              </CardInnerBox>
            </Card>
          </motion.div>
        ))}
      </CardWrapper>
    </Container>
  );
}
