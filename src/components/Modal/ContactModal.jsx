import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled components for the modal container with animation
export const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const ContactModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ContactModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ContactModalSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ContactModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #0077ff;
  }
`;

const ContactModalButton = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
`;

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ContactModalOverlay>
      <ModalContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ContactModalTitle>LET'S GET IN TOUCH</ContactModalTitle>
        <ContactModalSubtitle>
          We'll get back to you with some ideas on how you can experience your
          trip of a lifetime.
        </ContactModalSubtitle>
        <ContactModalInput type="text" placeholder="Your name" />
        <ContactModalInput type="text" placeholder="+1 888 859 0890" />
        <ContactModalInput type="email" placeholder="email@example.com" />
        <ContactModalButton>SEND →</ContactModalButton>
      </ModalContainer>
    </ContactModalOverlay>
  );
};

export default ContactModal;
