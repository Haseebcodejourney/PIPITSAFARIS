import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 0px auto;
  margin-top: 6rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 1024px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  padding: 4px 0px;
  margin-bottom: 1.5rem;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#f6f6f6")};
  &:hover {
    a {
      color: #c1c1c1;
      /* font-size: 20px; */
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
      background-color: #c1c1c1;
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
  }
`;

export const BoxWrapper = styled.div`
  /* max-width: 292px; */
  gap: 16px;
  box-sizing: border-box;
  .boxes {
    gap: 40px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  position: relative; /* Needed for the hover effect */

  &:hover img {
    transform: scale(1.1); /* Scale the image on hover */
    transition: transform 0.3s ease; /* Smooth animation */
  }

  @media screen and (max-width: 767px) {
    max-width: 238px;
    width: 100%;
  }

  .text-main {
    margin-top: 0.75rem;

    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export const Figure = styled.figure`
  margin: 0 0 1rem 0;
  overflow: hidden;
  border-radius: 0.75rem;
`;

export const Image = styled.img`
  border-radius: 0.75rem;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease; /* Smooth animation for hover scaling */

  @media screen and (max-width: 767px) {
    height: 119px;
    width: 238px;
  }
`;

export const Strong = styled.strong`
  display: block;
  margin-bottom: 0px;
  &:hover {
    a {
      color #ff5b00 ;
      /* font-size: 20px; */
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
      background-color: #ff5b00 ;
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
      color: #ff5b00 ; /* Optional color change on hover */
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Paper = styled.span`
  /* margin-bottom: 2px; */
  color: ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  /* color: #737373; */
  color: ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
  margin-top: 0px !important;
  strong {
    color: ${(props) =>
      props.theme === "dark" ? "#c1c1c1" : "#454545"} !important;
  }
  &:nth-child(2) {
    /* color: #000; */
    color: ${(props) =>
      props.theme === "dark" ? "#c1c1c1" : "#454545"} !important;
    margin-top: 0px;
  }
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
  /* border: 1px solid #e8e8e8; */
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
  border-radius: 9999px;
  /* color: #000; */
  color: ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
`;

export const Wrapper = styled.div``;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 3px;
  padding-top: 12px;
  p {
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
  color: ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
`;
