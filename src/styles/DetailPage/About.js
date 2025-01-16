import styled from "styled-components";

// About Component

export const Box = styled.div`
  border-bottom: 1px solid #e5e7eb;
  .btn{
    max-width: 216px;
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 32px;
  border: 0px;
  font-size: 16px;
  }
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

export const Text = styled.p`
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
  }
`;

export const ShowMore = styled.div`
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  background: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover{
    cursor: pointer;
    /* text-decoration: underline; */
  }
  @media screen and (max-width: 767px) {
  }
`;

export const Paper = styled.span`
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  svg {
    width: 14px;
    height: 14px;
  }
  @media screen and (max-width: 767px) {
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#001730"};
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#fff"}; /* Dark mode background */
  font-size: 16px;
  max-width: 216px;
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 32px;
  border: 0px;
  svg {
    width: 18px;
    height: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: unset;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: transparent;

  @media screen and (max-width: 1199px) {
    padding: 0px 15px;
    flex-direction: column;
    align-items: center; /* Align content better in column layout */
  }
`;


export const Components = styled.div`
  max-width: 652px;
  width: 100%;
  justify-content: space-between;
`;

export const Div = styled.div`
  max-width: 339px;
  width: 100%;
  position: sticky;
  top: 60px;
`;
