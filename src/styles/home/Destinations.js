import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 0px auto;
  margin-top: 6rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 767px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  padding: 4px 0px;
  margin-bottom: 1.5rem;
`;

export const BoxWrapper = styled.div`
  /* max-width: 292px; */
  gap: 16px;
  box-sizing: border-box;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 292px;
  width: 100%;
  min-height: 438px;
  color: #fff;
  border-radius: 1rem;
  position: relative;
  @media screen and (max-width: 767px) {
    max-width: 90%;
    width: 100%;
    max-height: 357px;
    min-height: 357px;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  max-width: 292px;
  height: 438px;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
    max-height: 357px;
  }
`;

export const Image = styled.img`
  border-radius: 1rem;
  max-width: 292px;
  width: 100%;
  height: 438px;
  display: block;
  object-fit: cover;
  position: relative;

  /* Overlay effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.2;
  }

  /* Media query for responsiveness */
  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
    max-height: 357px;
  }

  /* Hover effect with glow and scale */
  &:hover {
    box-shadow: 0px 12px 30px rgba(25, 75, 115, 0.5); /* Stronger shadow on hover */
    transform: scale(1.05); /* Scale effect on hover */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
  }
`;

export const Strong = styled.strong`
  font-size: 1.5rem;
  line-height: 2rem;
  z-index: 9;
`;

export const Paper = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  z-index: 9;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-top: 0.5rem;
  z-index: 9;
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  list-style: none;
  margin-top: 0.75rem;
`;
export const ListItems = styled.li`
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: 1px solid #e8e8e8;
  border-radius: 9999px;
  color: #000;
`;

export const Wrapper = styled.div``;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-top: 12px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
`;

export const Div = styled.div`
  padding: 0px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  padding-top: 300px;
  position: relative;
  border-radius: 15px; /* Add border-radius for rounded corners */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); /* Box shadow effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */

  @media screen and (max-width: 767px) {
    padding-top: 240px;
  }

  /* Overlay with gradient color and opacity */
  &::before {
    content: ""; /* Required for the pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(25, 75, 115, 0.8),
      rgba(25, 75, 115, 0)
    ); /* Gradient overlay */
    opacity: 0.6; /* Slight opacity */
    z-index: -1; /* Position the overlay behind the content */
    border-radius: 15px; /* Match border radius for overlay */
  }
`;
