import styled from "styled-components";

// About Component

export const Box = styled.div`
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 24px;
  border: 1px solid #e8e8e8;
  position: sticky;
  top: 135px;
  .btn{
    font-size: 16px;
  /* max-width: 216px; */
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 10px;
  margin: 0 auto;
  cursor: pointer;
  }
  @media screen and (max-width: 767px) {
  }
`;

export const H2 = styled.h2`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 24px;
  margin-bottom: 7px;
  @media screen and (max-width: 767px) {
  }
`;

export const FigureWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Figure = styled.figure`
  margin: 0;
 
`;

export const Image = styled.img`
  margin: 0;
  border-radius: 50%;
  border: 1px solid #c1c1c1;
`;

export const Text = styled.p`
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"};
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#fff"}; /* Dark mode background */
  font-size: 16px;
  /* max-width: 216px; */
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 10px;
  margin: 0 auto;
  cursor: pointer;
  svg {
    width: 18px;
    height: 16px;
  }
  @media screen and (max-width: 767px) {
  }
`;
