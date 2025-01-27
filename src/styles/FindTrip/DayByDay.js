import styled from "styled-components";

// Container with flexbox layout and responsive adjustments
export const Container = styled.section`
  max-width: 784px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 48px;
  border-bottom: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
  margin-bottom: 48px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 34px 15px 64px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const H3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  list-style: none;
`;

export const ListItems = styled.li`
  padding: 4px 8px !important;
  font-size: 12px;
  border-radius: 0.5rem;
  /* background: #f6f6f6; */
  background: ${(props) => (props.theme === "dark" ? "transparent" : "transparent")};
  
  border: 0px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#0000001a")};
  padding-left: 0px;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#212121")};

  &.active {
    background: ${(props) => (props.theme === "dark" ? "#000" : "#000000db")};
    border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "transparent")};
  
    color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#ffffff")};
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px; /* Adjust based on use case */
  background-color: #f4f4f4;
  border-radius: 0.75rem;
  @media screen and (max-width: 767px) {
    height: 300px; /* Adjust for smaller screens */
  }
`;

export const IncludedWrapper = styled.div`
  margin-top: 20px;
`;

export const ExcludedWrapper = styled.div`
  margin-top: 20px;
`;

export const H4 = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Paper = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#212121")};

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ListTick = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#212121")};

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    span {
      color: #609165; /* Safari green color */
    }
  }
`;

export const ListExclude = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    span {
      color: #dc2626; /* Red color for exclusions */
    }
  }
`;
