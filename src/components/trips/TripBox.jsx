import React, { useState } from 'react';
import {
  Box,
  BoxWrapper,
  Container,
  Figure,
  H2,
  Image,
  List,
  ListItems,
  Paper,
  Price,
  PriceWrapper,
  Strong,
  Text,
} from "../../styles/trips/Shows";
import Data from "../../api/Trips.json";
import { Button } from '../../styles/common/styles';
import { Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { ButtonWrapper } from '../../styles/blogs/Blogs';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function TripBox({ theme }) {
  const [tourData] = useState(Data); // Keep original data
  const [visibleTours, setVisibleTours] = useState(6); // Number of tours to show initially
  const [toggleImage, setToggleImage] = useState(false); // State for toggling images

  // Handler for toggling images
  const handleToggleClick = () => {
    setToggleImage(!toggleImage);
  };

  // Handler for Load More
  const handleLoadMore = () => {
    setVisibleTours((prev) => prev + 6); // Increase the number of visible tours by 6
  };

  // Animation variants for Framer Motion
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <BoxWrapper>
        {/* MUI Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={toggleImage}
              onChange={handleToggleClick}
              color="primary"
            />
          }
          label={toggleImage ? 'Show Images' : 'Show Maps'}
          style={{ marginBottom: '10px' }}
        />

        {tourData.length > 0 ? (
          <div className="boxes">
            {tourData.slice(0, visibleTours).map((tour, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={boxVariants}
              >
                <Box theme={theme}>
                <Link to='/trip-details'>
                  <Figure>
                    <Image
                      src={toggleImage ? tour.altImageSrc : tour.imageSrc} // Toggle between images
                      alt="Safari"
                      width={612}
                      height={364}
                    />
                  </Figure>
                  <Strong theme={theme} style={{ marginBottom: '5px' }} className="main-heading">
                    <Link style={{ color: 'unset', marginBottom: '5px' }}>{tour.title}</Link>
                  </Strong>
                  </Link>
                  <Paper theme={theme} style={{ marginTop: '5px' }}>{tour.location}</Paper>
                  <Text theme={theme}>{tour.operator}</Text>
                  <Text theme={theme} className="text-main">{tour.description}</Text>
                  <List theme={theme}>
                    {tour.highlights && tour.highlights.length > 0 ? (
                      tour.highlights.map((highlight, index) => (
                        <ListItems theme={theme} key={index}>{highlight}</ListItems>
                      ))
                    ) : (
                      <Text theme={theme}>No highlights available</Text>
                    )}
                  </List>
                  <PriceWrapper theme={theme}>
                    <Text theme={theme}>Starting at </Text>
                    <Price theme={theme}>
                      <Strong theme={theme}>${tour.price}</Strong>
                      <Strong theme={theme}>{tour.currency}</Strong>
                      <Paper theme={theme}>{tour.priceDescription}</Paper>
                    </Price>
                  </PriceWrapper>
                </Box>
              </motion.div>
            ))}
          </div>
        ) : (
          <div theme={theme}>No tours available</div>
        )}
      </BoxWrapper>
      {visibleTours < tourData.length && ( // Show "Load More" only if there are more tours to load
        <ButtonWrapper theme={theme}>
          <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
        </ButtonWrapper>
      )}
    </Container>
  );
}
