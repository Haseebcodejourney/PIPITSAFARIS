import React, { useState } from "react";
import Data from '../../api/Destinations.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  BoxWrapper,
  Container,
  Div,
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
} from "../../styles/home/Destinations";

function Destinations() {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <H2>Explore top destinations</H2>
      <BoxWrapper>
          <Slider {...settings}>

            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/be5fa7a9-7045-4fe3-8f94-15f158803acc_dmitrii-zhodzishskii-8vILaM48J_g-unsplash.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>
           
           
            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>

            
            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/a10a9a72-368b-4ecc-9c57-45a8f4a3fdad_1raissa-lara-lutolf-fasel-aeQdJyuyGco-unsplash.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>

            
            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/a2fc1bbf-1413-4fad-84a7-d7479399785f_jeff-lemond-5bcyV0wVRx8-unsplash.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>

            
            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/be5fa7a9-7045-4fe3-8f94-15f158803acc_dmitrii-zhodzishskii-8vILaM48J_g-unsplash.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>

            
            <Box className="aaa">
              <Figure>
                <Image src='https://static.cloudsafaris.com/public/be5fa7a9-7045-4fe3-8f94-15f158803acc_dmitrii-zhodzishskii-8vILaM48J_g-unsplash.jpg?action=get&host=true&width=800' alt='Images'/>
              </Figure>
              <Div>
                <Paper>Tanzania</Paper>
                <Strong>Stone Town, Zanzibar</Strong>
                <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
              </Div>
            </Box>

            
          </Slider>
      </BoxWrapper>
    </Container>
  );
}

export default Destinations;