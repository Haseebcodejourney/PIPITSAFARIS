import React from "react";
import {
  Box,
  Figure,
  FigureWrapper,
  H2,
  Image,
  Text,
} from "../../styles/DetailPage/ChatWithExpert";
import {Button} from '../../styles/common/styles';

export default function ChatWithExpert({theme}) {
  return (
    <>
      <Box theme={theme}>
        <H2 theme={theme}>Chat with an expert</H2>
        <FigureWrapper theme={theme}>
          <Figure theme={theme}>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>

          <Figure style={{ marginLeft: "-30px" }} theme={theme}>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>

          <Figure style={{ marginLeft: "-30px" }} theme={theme}>
            <Image
              src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
              alt=""
              width={60}
              height={60}
            />
          </Figure>
        </FigureWrapper>
        <Text theme={theme}>
          Our team of professionals are waiting to answer your questions and
          help plan your dream safari.
        </Text>
        <Button variant="primary" className='btn'>Contact Us</Button>
      </Box>
    </>
  );
}
