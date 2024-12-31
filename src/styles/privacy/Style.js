// Import styled-components
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  padding: 130px 24px 130px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 9rem;
    padding-top: 9rem;
    padding-bottom: 9rem;
    padding-left: 15px;
    padding-right: 5px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 575px;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 24px;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#f6f6f6")};
`;

export const H3 = styled.h3`
  font-size: 18px;
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#f6f6f6")};
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => (props.theme === "dark" ? "#a1a1aa" : "#454545")};
`;

export const List = styled.ul`
  padding: 0px 0px 0px 12px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItems = styled.li`
  font-size: 16px;
  color: ${(props) => (props.theme === "dark" ? "#a1a1aa" : "#454545")};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Strong = styled.strong`
  color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#454545")};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 330px;
  height: auto;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 5px;
  background: #fff;
  transition: 0.3s;
  gap: 0.5rem;
  margin-top: 0.25rem;

  /* background-color: #ff5b00 ; */
  background-color: ${(props) =>
    props.theme === "dark" ? "#ff5b00 " : "#ff5b00 "};
  color: ${(props) => (props.theme === "dark" ? "#212121" : "#212121")};
  transition: background-color 0.3s, border 0.3s;
  border: 1px solid transparent;
  svg {
    width: 7px;
    height: 12px;
  }
  &:hover {
    color: #ffffffe6;
    background-color: hsla(0, 0%, 100%, 0);
    border: 1px solid #ffffffe6;
    cursor: pointer;
  }
`;
