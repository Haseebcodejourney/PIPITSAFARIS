import styled from "styled-components";

// Footer Wrapper
export const Wrapper = styled.footer`
  background-color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  padding: 64px 32px 32px;
  font-size: 16px;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  color: ${(props) =>
    props.theme === "dark"
      ? "#c1c1c1"
      : "#c1c1c1"}; /* Light text for dark mode */
  border-top: 1px solid #ffffff26;
`;

export const Box = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 32px auto;
  padding-bottom: 32px;
  border-bottom: ${(props) =>
    props.theme === "dark"
      ? "1px solid #444"
      : "1px solid #2121211a"}; /* Darker border in dark mode */
`;

export const InnerBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Coloumn = styled.div``;

export const Div = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  max-width: 176px;
  width: 100%;
  p {
    color: #c1c1c1 !important;
  }
  &:nth-child(1) {
    max-width: 383px;
    width: 100%;
  }
`;

export const Paper = styled.span``;

export const Image = styled.img``;

export const Wrape = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  svg {
    width: 15px;
    height: 15px;
    fill: ${(props) =>
      props.theme === "dark"
        ? "#bb86fc"
        : "#1a73e8"}; /* Adjust icon color for dark mode */
  }
`;

export const LWraper = styled.div`
  max-width: 176px;
  width: 100%;
  h3 {
    color: #fff !important;
  }
  .heading-footer {
    color: #fff !important;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItems = styled.li`
  color: ${(props) =>
    props.theme === "dark" ? "#c1c1c1" : "#fff"}; /* Softer text in dark mode */

  a {
    color: #006400; /* Dark green links */
    text-decoration: none;
    padding: 5px 0px;
    margin: 0px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ff5b00;
    width: 0;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
    animation: heartbeat116 1.5s infinite;
  }

  @keyframes heartbeat116 {
    0%,
    100% {
      width: 100%;
    }
    50% {
      width: 60%;
    }
  }

  a:hover {
    color: #ff5b00; /* Optional color change on hover */
  }
`;

export const CopyRight = styled.div`
  color: ${(props) =>
    props.theme === "dark"
      ? "#c1c1c1"
      : "#fff"}; /* Adjusted color for dark mode */
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  p {
    color: ${(props) =>
      props.theme === "dark"
        ? "#c1c1c1"
        : "#fff"} !important; /* Darker text in dark mode */
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.theme === "dark"
      ? "#c1c1c1"
      : "#fff"} !important; /* Darker text in dark mode */
`;
