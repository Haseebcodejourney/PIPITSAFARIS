import React from "react";
import {
  Box,
  Button,
  Figure,
  FigureWrapper,
  H2,
  Image,
  Text,
} from "../../styles/DetailPage/ChatWithExpert";

export default function ChatWithExpert() {
  return (
    <>
      <Box>
        <H2>Chat with an expert</H2>
        <FigureWrapper>
          <Figure>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>

          <Figure style={{ marginLeft: "-30px" }}>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>

          <Figure style={{ marginLeft: "-30px" }}>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>
        </FigureWrapper>
        <Text>
          Our team of professionals are waiting to answer your questions and
          help plan your dream safari.
        </Text>
        <Button>Contact Us</Button>
      </Box>
    </>
  );
}
