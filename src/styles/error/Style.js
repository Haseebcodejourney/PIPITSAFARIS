import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.errorBackground};
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.errorBoxBackground};
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
  margin-top: 20px;
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondaryColor};
  max-width: 600px;
  margin: 20px auto;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.1rem;
  color: white;
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
