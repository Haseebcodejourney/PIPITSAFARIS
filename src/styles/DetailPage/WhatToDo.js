import styled from "styled-components";

//WhatToDo component
export const Wrapper = styled.div``;

export const Box = styled.div`
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 767px) {
  }
`;
export const H2 = styled.h2`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
  }
`;
export const H3 = styled.h2`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
  }
`;
export const Left = styled.div`
  max-width: 326px;
  width: 100%;
`;

export const Right = styled.div`
  max-width: 326px;
  width: 100%;
`;

export const H4 = styled.h3`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
  }
`;
export const FigureWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`;
export const Figure = styled.figure`
  margin: 0;
`;

export const Image = styled.img`
  margin: 0;
`;
export const Text = styled.p`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
  }
`;
