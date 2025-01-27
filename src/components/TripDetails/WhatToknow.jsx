import React, { useState } from "react";
import {
  Bottom,
  Box,
  BoxWrapper,
  Container,
  H2,
  Strong,
  Text,
  Top,
} from "../../styles/TripDetail/WhatToKnow";
import ModalWahtToKnow from "./ModalWahtToKnow";

export default function WhatToKnow({theme}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleBoxClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Container theme={theme}>
        <H2 theme={theme}>What to know</H2>
        <BoxWrapper theme={theme}>
          {/* Box 1 */}
          <Box theme={theme}>
            <Top theme={theme}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shirt" class="svg-inline--fa fa-shirt text-safari-green bg-safari-green-50 rounded-full p-4 w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"></path></svg>
            </Top>
            <Bottom theme={theme}>
              <Strong theme={theme}>Packing list</Strong>
              <Text theme={theme}>A full list of what you will need to ensure a comfortable trip.</Text>
            </Bottom>
          </Box>

          {/* Box 2 */}
          <Box theme={theme}>
            <Top theme={theme}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clipboard-check" class="svg-inline--fa fa-clipboard-check  text-hi-vis bg-hi-vis-50 rounded-full p-4 w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
            </Top>
            <Bottom theme={theme}>
              <Strong theme={theme}>Booking policy</Strong>
              <Text theme={theme}>Learn more about booking procedure, payment terms, cancellation and refund policy.</Text>
            </Bottom>
          </Box>
        </BoxWrapper>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <ModalWahtToKnow onClose={handleCloseModal} theme={theme}>
          <p>{modalContent}</p>
        </ModalWahtToKnow>
      )}
    </>
  );
}
