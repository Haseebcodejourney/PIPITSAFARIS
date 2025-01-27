import React, { useState } from 'react';
import { Button, Container, H2, List, ListItems, Box } from '../../styles/FindTrip/TripHero/TripHero';
import { Heading } from '../../styles/TripDetail/Modals/GalleryModal';
import Modal from './GalleryModal/Modal';

export default function TripDetailsHero({theme}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Container theme={theme}>
        <H2 theme={theme}>Kilimanjaro 5 Day Marangu Route</H2>
        <List theme={theme}>
          <ListItems theme={theme}>6 Nights</ListItems>
          <ListItems theme={theme}>7 Days</ListItems>
          <ListItems theme={theme}>8 Destinations</ListItems>
        </List>
        <Box theme={theme}>
          <Button onClick={openModal} theme={theme}>
            View Gallery
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="images"
              className="svg-inline--fa fa-images text-white text-sm"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"
              ></path>
            </svg>
          </Button>
        </Box>
      </Container>

      <Modal isOpen={isModalOpen} onClose={closeModal} theme={theme}>
        <Heading theme={theme}>Photo Gallery</Heading>
        {/* Placeholder for images or content */}
        {/* <p>Here you can showcase images or other content for your gallery.</p> */}
      </Modal>
    </>
  );
}
