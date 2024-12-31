import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.div`
  text-align: center;
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
