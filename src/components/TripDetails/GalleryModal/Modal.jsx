import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from '../../../styles/TripDetail/Modals/GalleryModal';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <CloseButton onClick={onClose}>✕</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
}
