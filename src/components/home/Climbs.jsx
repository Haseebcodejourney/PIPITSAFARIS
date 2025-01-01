import React, { useState } from "react";
import Data from "../../api/Climbs.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
} from "../../styles/home/Safaris";
import { Button } from "../../styles/common/styles";
import { Link } from "react-router-dom";

function Safaris({ theme }) {
  const [tourData, setTourData] = useState(Data);

  if (!tourData) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container theme={theme}>
      <H2 theme={theme}>Safaris</H2>
      <BoxWrapper>
        {tourData.length > 0 ? (
          <Slider {...settings}>
            {tourData.map((tour, index) => (
              <Box key={index} theme={theme}>
                <Figure>
                  <Image
                    src={tour.imageSrc}
                    alt="Safari"
                    width={612}
                    height={364}
                  />
                </Figure>
                <Strong
                  className="main-heading"
                  theme={theme}
                  style={{ marginBottom: "10px" }}
                >
                  <Link to="#" style={{ color: "unset", marginBottom: "5px" }}>
                    {tour.title}
                  </Link>
                </Strong>
                <Paper theme={theme} style={{ marginTop: "5px" }}>
                  {tour.location}
                </Paper>
                <Text theme={theme}>{tour.operator}</Text>
                <Text className="text-main" theme={theme}>
                  {tour.description}
                </Text>
                <List theme={theme}>
                  {tour.highlights && tour.highlights.length > 0 ? (
                    tour.highlights.map((highlight, index) => (
                      <ListItems key={index} theme={theme}>
                        {highlight}
                      </ListItems>
                    ))
                  ) : (
                    <Text theme={theme}>No highlights available</Text>
                  )}
                </List>
                <PriceWrapper theme={theme}>
                  <Text theme={theme}>Starting at</Text>
                  <Price theme={theme}>
                    <Strong theme={theme}>${tour.price}</Strong>
                    <Strong theme={theme}>{tour.currency}</Strong>
                    <Paper theme={theme}>{tour.priceDescription}</Paper>
                  </Price>
                </PriceWrapper>
              </Box>
            ))}
          </Slider>
        ) : (
          <div theme={theme}>No tours available</div>
        )}
      </BoxWrapper>
       <Link to='/trips'><Button variant="primary" style={{marginRight:'0',marginLeft:'auto', color:'#fff', marginTop: '10px'}}>View More</Button></Link>
    </Container>
  );
}

export default Safaris;
