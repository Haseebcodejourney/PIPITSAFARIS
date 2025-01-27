import styled from "styled-components";

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

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #212121;
    color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#f6f6f6")};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #444;
    }

    &:focus {
        outline: none;
    }
`;
