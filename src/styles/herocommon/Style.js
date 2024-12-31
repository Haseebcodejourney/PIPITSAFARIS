import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: 
    linear-gradient(to top, #194b73, rgba(0, 0, 0, 0)), /* Gradient background */
    url('https://static.cloudsafaris.com/public/Elephants-Crater.jpg?action=get'); /* Image background */
  background-attachment: fixed;
  min-height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    min-height: 554px;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;


export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  color: #fff;
  gap: 2rem;
  @media screen and (max-width: 1200px){
    padding-left: 24px;
    padding-right: 24px;
  }
  
`;

export const BreadCrum = styled.div`

  
`;

export const H2 = styled.h2`
  font-size: 48px;
  padding: 4px 0px;
  margin-bottom: 0;
  color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#ecedee')} !important; /* Light text for dark mode */

  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  padding: 4px 0px;
  margin-bottom: 0;
  color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#ecedee')} !important; /* Light text for dark mode */

  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;




