import React, { useState, useEffect } from "react";
import {
  Card,
  CardInnerBox,
  CardWrapper,
  Container,
  Figure,
  H2,
  Image,
  RatingWrapper,
  Strong,
  Round,
  HeadingWrapper,
  PriceWrapper,
  Div,
  Paper,
} from "../../styles/hotels/Style";
import StarIcon from "@mui/icons-material/Star";
import destinationData from "../../api/Destinations.json"; // Assuming you have a Destinations JSON file for top destinations
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Cards({ theme }) {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setDestinations(destinationData.hotels || []); // Assuming destinations data is structured similarly
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container theme={theme}>
      {/* Top destinations section */}
      <H2 theme={theme}>Top destinations</H2>
      <CardWrapper theme={theme}>
        {destinations.map((hotel, index) => (
          <motion.div
            key={hotel.id} // Use a unique key (hotel.id) here
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={boxVariants}
          >
            <Card theme={theme}>
              <Link to="/details">
                <Figure theme={theme}>
                  <Image
                    src={hotel.image} // Dynamic image source from JSON
                    alt={hotel.name}
                    width={405}
                    height={360}
                  />
                </Figure>
              </Link>
              <CardInnerBox theme={theme} className="destination-card-inner">
                <PriceWrapper
                  theme={theme}
                  style={{
                    marginTop: "18px",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  {/* Dynamic image for hotel profile */}
                  <Figure>
                    <Image
                      style={{ borderRadius: "1.85rem" }}
                      src={hotel.image} // Replace with the hotel's image dynamically
                      width={100}
                      height={100}
                    />
                  </Figure>
                  <Div theme={theme} style={{ alignItems: "flex-start" }}>
                    <HeadingWrapper theme={theme}>
                      <Strong theme={theme}>{hotel.name}</Strong>
                      <Round theme={theme}>{hotel.rating}</Round>
                    </HeadingWrapper>
                    <RatingWrapper theme={theme}>
                      {Array.from({ length: hotel.stars || 0 }).map(
                        (_, starIndex) => (
                          <StarIcon
                            theme={theme}
                            key={starIndex}
                            style={{ color: "#ff5b00" }}
                          />
                        )
                      )}
                    </RatingWrapper>
                    <Strong
                      theme={theme}
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        marginTop: "10px",
                      }}
                    >
                      {/* Dynamic description */}
                      {hotel.description || "No description available."}
                    </Strong>
                  </Div>
                </PriceWrapper>
              </CardInnerBox>
            </Card>
          </motion.div>
        ))}
      </CardWrapper>
    </Container>
  );
}
