import styled from "styled-components";

export const TabWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #e8e8e833;
    position: sticky;
    top: 60px;
    height: 73px;
    /* background: #fff; */
    background-color: ${(props) =>
    props.theme === "dark" ? "#141515" : "#fff"};
    display: flex;
    align-items: center;
    z-index: 9;
`;

export const InnerTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent line breaks for tabs */
  padding: 0 16px; /* Add some padding for better spacing on small screens */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for a cleaner look */
  }

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    overflow-x: auto; /* Ensure scrolling on smaller screens */
    white-space: nowrap; /* Prevent wrapping */

}
`;



export const Tab = styled.div`
  font-size: 14px;
  padding: 24px 0px;
  position: relative;
  color: ${(props) =>
    props.active
      ? props.theme === "dark"
        ? "#ff5b00"
        : "#000"
      : props.theme === "dark"
      ? "#fff"
      : "#888"};
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.theme === "dark" ? "#ff5b00" : "#000")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) =>
      props.active
        ? props.theme === "dark"
          ? "#ff5b00"
          : "#000"
        : "transparent"};
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.3s ease;
  }
`;




