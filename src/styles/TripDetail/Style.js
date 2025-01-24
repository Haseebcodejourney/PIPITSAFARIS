import styled from "styled-components";

export const Container = styled.section`
 max-width: 1280px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    /* flex-direction: column; */
   
    @media screen and (max-width:767px){
  }
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:767px){
  }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:767px){
  }
`;

export const Right = styled.div`
        max-width: 352px;
        width: 100%;
       display: flex;
       flex-direction: row;
       margin-top: 30px;
    @media screen and (max-width:767px){
  }
`;

export const RBox = styled.div`
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);
    padding: 1.5rem;
    border: 1px solid #e8e8e8;
    border-radius: .75rem;
    margin-bottom: 2rem;
    width: 100%;
    @media screen and (max-width:767px){
  }
`;

export const RTop = styled.div`
       display: flex
;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-color: #e8e8e8;
    border-width: 1px;
    border-radius: .375rem;
    margin-bottom: .5rem;
    max-width: 302px;
    width: 100%;
    height: 73px;
    justify-content: space-between;
    @media screen and (max-width:767px){
  }
`;

export const RTopLeft = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width:767px){
  }
`;

export const RTopText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    max-width: 72px;
    width: 100%;
    span{
      color: #6b7280;
      font-size: 12px;
    }
    strong{
      font-size: 12px;
    }
    @media screen and (max-width:767px){
  }
`;


