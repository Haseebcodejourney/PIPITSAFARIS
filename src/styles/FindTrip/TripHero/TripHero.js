import styled from "styled-components";

export const Container = styled.section`
    max-width: 1280px;
    width: 100%;            
    height: auto;             
    display: flex;                    
    justify-content: center; 
    flex-direction: column;
    gap: 10px;  
    margin-top: 30px;
   
    @media screen and (max-width:767px){
    padding-bottom: 64px;
    padding-top: 34px;
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
  }
`;

export const H2 = styled.h2`
    font-size: 30px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const ListItems = styled.li`
    font-size: 16px;
`;

export const Box = styled.div`
position: relative;
    border-radius: .75rem;
    margin-bottom: 30px;
  margin-top: 8px;
  background: url('https://static.cloudsafaris.com/public/f3bed1be-5dbc-499a-b1f8-b584bd40bda5_crispin-jones-DDEBAl7ULAo-unsplash.jpg?action=get&host=true') no-repeat center center;
  background-size: cover;
  height: 300px; /* Example height to make the background visible */
`;

export const Button = styled.button`
    color: #ffffff;
    border-radius: .375rem;
    border-width: 1px;
    border-color: hsla(0, 0%, 100%, .1);
    padding: 1rem;
    max-width: 138px;
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00000082;
    transition: 0.3s ease all;
    position: absolute;
    bottom: 15px;
    right: 15px;
    gap: 5px;
    svg{
        width: 15px;
        height: 15px;
    }
    &:hover{
        background-color: #00000080;
        cursor: pointer;
    }
`;