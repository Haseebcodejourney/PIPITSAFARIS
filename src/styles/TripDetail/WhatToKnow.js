import styled from "styled-components";

// Container with a solid green background and background image with a dark overlay
export const Container = styled.section`
 max-width: 1280px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 70px !important;

  @media screen and (max-width: 767px){
  }
`;



export const H2 = styled.h2`
  box-sizing: border-box;
  margin-bottom: 20px;

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;


export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Box = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
  /* background-color: #fff; */
  border-width: 1px;
  border-radius: .75rem;
  max-width: 389px;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  transition: 0.3s ease all;
  &:hover{
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);
    cursor: pointer;
  }
  &:nth-child(2){
    svg{
    /* width: 24px; */
    height: auto;
    background: #fff7f5;
    color: #f56038;
    padding: 7px;
    border-radius: 9999px;
    width: 2.5rem;
    height: 2.5rem;
    
  }
  }


  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;


export const Top = styled.div`
  box-sizing: border-box;
  margin-bottom: 12px;


  svg{
    /* width: 24px; */
    height: auto;
    background: #e4ede6;
    color: #609165;
    padding: 7px;
    border-radius: 9999px;
    width: 2.5rem;
    height: 2.5rem;
    
  }

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;


export const Strong = styled.strong`
  font-size: 16px;

  @media screen and (max-width: 767px){
  }
`;

export const Text = styled.p`
  font-size: 14px;

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;

export const Bottom = styled.div`
     display: flex;
    flex-direction: column;
    gap: 5px;

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;

