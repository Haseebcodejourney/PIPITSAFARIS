import styled from "styled-components";

// Container with flexible layout and responsive design
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
  
  box-sizing: border-box;
  margin-bottom: 48px;

  @media screen and (max-width: 767px) {
    padding-bottom: 64px;
    padding-top: 34px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 0;
`;

export const List = styled.ul`
  list-style: disc;
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 35px;
`;

// Remove the first-child style directly from ListItems component if needed
export const ListItems = styled.li`
  font-size: 16px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#18181b" : "transparent"};
  
  &:first-child {
    list-style: none;
  }
`;

export const Box = styled.div`
  max-width: 784px;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
  padding: 24px;
`;

export const DateDetailWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 64px;
`;

export const DateWapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 32px;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 50px;
    background-color: ${(props) =>
    props.theme === "dark" ? "#fff" : "#ae9d9da3"};
    
    position: absolute;
    right: -30px;
    top: 0; /* Position the line better */
  }
`;

export const DatePaper = styled.span`
  font-size: 14px;
  padding-bottom: 10px;
`;

export const DateStrong = styled.strong`
  font-size: 20px;
`;

export const LocationWrapper = styled.div`
  div {
    &::after {
      display: none;
    }
  }
`;

export const TabsWrapper = styled.div``;

export const DestinationBox = styled.div`
  padding: 0;
`;

export const DList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const DListItems = styled.li`
  padding: 0.25rem;
  background: ${(props) => (props.theme === "dark" ? "#0000" : "#f6f6f6")};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  &:hover {
    box-shadow: 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;


export const DPaper = styled.span`
  font-size: 12px;
  padding: 0px 8px;
  width: max-content;
`;

export const DFigure = styled.figure`
  border-radius: 9999px;
  margin: 0;
`;

export const DImage = styled.img`
  border-radius: 9999px;
`;

export const JWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 24px;
`;

export const JLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const JDot = styled.div`
  border: 8px solid ${(props) => (props.theme === "dark" ? "#fff5f5" : "#e8e8e8")};
  background: #fff;
  border-radius: 50%;
`;

export const JBorder = styled.div`
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  border-right-width: 1px;
  height: 70px;
`;

export const JRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const JPaper = styled.span`
  font-size: 12px;
`;

export const JSrtrong = styled.strong`
  font-size: 14px;
`;
