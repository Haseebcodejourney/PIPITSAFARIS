// Import styled-components
import styled from "styled-components";

// Define a reusable container component
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

// Define a heading component
export const H1 = styled.h1`
  font-size: ${(props) =>
    props.fontSize || "100px"}; // Default size is 100px if no prop is provided
  color: ${(props) =>
    props.color || "#fff"}; // Default color is white if no prop is provided
  padding: 0px;
  margin: 0px;
`;

export const H2 = styled.h2`
  font-size: ${(props) =>
    props.fontSize || "100px"}; // Default size is 100px if no prop is provided
  color: ${(props) =>
    props.theme === "dark" ? "#fff" : "#fff"}; /* Light text for dark mode */
  padding: 0px;
  margin: 0px;
  line-height: 0.99;
  /* font-family: "Nunito", serif; */
`;

export const H3 = styled.h3`
  font-size: ${(props) =>
    props.fontSize || "14px"}; // Default size is 100px if no prop is provided
  color: ${(props) =>
    props.color || "#5c5c5c"}; // Default color is white if no prop is provided
  padding: 0px;
  margin: 0px 0px 24px 0px;
`;

export const H4 = styled.h4`
  max-width: 1240px;
  width: 100%;
  font-size: ${(props) => props.fontSize || "2rem"}; /* Default font size */
  color: ${(props) => props.color || "black"}; /* Default color */
`;

export const P = styled.p`
  font-size: ${(props) =>
    props.fontSize || "16px"}; // Default size is 16px if no prop is provided
  color: ${(props) =>
    props.color || "#5c5c5c"}; // Default color is black if no prop is provided
  padding: 0px;
  margin: 0px;
`;

// Define a card component with custom styling
export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

export const Direction = styled.a`
  margin: 0;
  padding: 0;
  color: #5c5c5c;
`;

// Define a reusable button component
export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary"
      ? "#ff5b00"
      : props.variant === "secondary"
      ? "#008CBA"
      : "#f44336"};
  color: ${(props) => (props.variant === "primary" ? "#fff" : "black")};
  padding: 12px 24px;
  font-size: 14px;
  border: ${(props) =>
    props.variant === "primary" ? "none" : "2px solid #ddd"};
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  border: 1px solid transparent;
  &:hover {
    color: #ffffffe6;
    background-color: #000;
    border: 1px solid #ffffffe6;
  }
  display: flex;
  align-items: center;
  gap: 3px;
  svg {
    width: 12px;
    height: 12px;
  }
`;
