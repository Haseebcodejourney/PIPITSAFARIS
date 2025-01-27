import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    padding: 34px 15px 64px;
    height: 100%;
  }
`;

export const H2 = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => (theme === "dark" ? "#ecedee" : "#333")}; /* Adjusted light theme color */
  margin-bottom: 10px; /* Optional margin for spacing */
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => (theme === "dark" ? "#ecedee" : "#333")}; /* Adjusted light theme color */
`;

export const ListItems = styled.li`
  font-size: 16px;
  color: ${({ theme }) => (theme === "dark" ? "#ecedee" : "#333")}; /* Adjusted light theme color */
`;

export const Box = styled.div`
  position: relative;
  border-radius: 0.75rem;
  margin: 8px 0 30px;
  background: url('https://static.cloudsafaris.com/public/f3bed1be-5dbc-499a-b1f8-b584bd40bda5_crispin-jones-DDEBAl7ULAo-unsplash.jpg?action=get&host=true')
    no-repeat center center;
  background-size: cover;
  height: 300px;

  @media screen and (max-width: 767px) {
    height: 200px; /* Adjusted height for smaller screens */
  }
`;

export const Button = styled.button`
  color: #ffffff;
  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#454545")};
  
  padding: 1rem;
  max-width: 138px;
  width: 100%;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.82);
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 15px;
  right: 15px;
  gap: 5px;

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;
