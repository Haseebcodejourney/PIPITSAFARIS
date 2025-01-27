import styled from 'styled-components';
import { motion } from 'framer-motion';

// Overlay for the modal background
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 50;
  padding-top: 100px;
`;

// Modal container
export const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 90%;
  max-width: 80%;
  position: relative;
`;

// Close button
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;



export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
`;