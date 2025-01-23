import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  width: fit-content;
  background: #ffffff;
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 50%;
  &:hover {
    background: #e0e0e0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  ${({ primary }) =>
    primary
      ? css`
          background: #212121;
          color: white;
        `
      : css`
          background: #f5f5f5;
          &:hover {
            background: #e0e0e0;
          }
        `}
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CardIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  display: none;
  font-size: 0.875rem;
  font-weight: 300;
  color: #757575;

  @media (min-width: 1024px) {
    display: block;
  }
`;
