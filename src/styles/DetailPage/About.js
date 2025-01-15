import styled from "styled-components";

// About Component

export const Box = styled.div`
  border-bottom: 1px solid #e5e7eb;
  @media screen and (max-width: 767px) {
  }
`;
export const H2 = styled.h2`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
  }
`;

export const ShowMore = styled.div`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  background: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 767px) {
  }
`;

export const Paper = styled.span`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
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
    props.theme === "dark" ? "#121212" : "#001730"};
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#fff"}; /* Dark mode background */
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
  svg {
    width: 18px;
    height: 16px;
  }
  @media screen and (max-width: 767px) {
  }
`;

export const PageWrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  background: #fff;
  justify-content: space-between;
  margin-top: 30px;
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
