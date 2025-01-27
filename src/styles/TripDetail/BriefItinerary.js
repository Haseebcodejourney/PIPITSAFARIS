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
       position: sticky;
       top: 64px;
    @media screen and (max-width:767px){
  }
`;

export const RBox = styled.div`
    /* box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1); */
    padding: 1.5rem;
    border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
    border-radius: .75rem;
    margin-bottom: 2rem;
    width: 100%;
    @media screen and (max-width:767px){
  }
`;

export const RTop = styled.div`
       display: flex;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
    border-width: 1px;
    border-radius: .375rem;
    margin-bottom: .5rem;
    max-width: 302px;
    width: 100%;
    height: 73px;
    justify-content: space-between;
    &:nth-child(2){
        &::after{
            display: none;
        }
    }
    @media screen and (max-width:767px){
  }
`;

export const RTopLeft = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    &:nth-child(2){
        &::after{
            display: none;
        }
    }
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
    position: relative;
    span{
      /* color: #6b7280; */
      color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#000")};

      font-size: 12px;
    }
    strong{
      font-size: 12px;
    }
    &:nth-child(2){
        &::after{
            display: none;
        }
    }
    &::after {
        content: '';
    position: absolute;
    top: -7px;
    bottom: 10%;
    left: 133px;
    width: 1px;
    background-color: #e8e8e8;
    height: 46px;
  }
    @media screen and (max-width:767px){
  }
`;

export const InputWrapper = styled.div`
   max-width: 302px;
   width: 100%;
   display: flex;
   align-items: flex-end;
   justify-content:space-between;
   gap: 10px;
   margin-top: .5rem;
   margin-bottom: 1rem;
`;

export const Inputbox = styled.div`
     display: flex;
    align-items: flex-start;
    gap: 2px;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    font-weight: 100;
    font-size: .75rem;
    line-height: 1rem;
`;

export const Input = styled.input`
    font-size: .75rem;
    line-height: 1rem;
    background: #fff;
    border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
    border-radius: .25rem;
    padding: .5rem .75rem;
    width: 100%;
    &:focus{
        outline: unset;
    }
`;

export const InputButton = styled.button`
    width: 64px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    line-height: 1rem;
    transition: 0.3s ease all;
    background: #000000;
    border: 0;
    /* color: #fff; */
    color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#000")};

    border-radius: .25rem;
    margin-bottom: 1px;
    &:hover{
        cursor: pointer;
    }
`;


export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const H3 = styled.h3`
    display: flex;
    flex-direction: row;
    font-weight: 600;
    /* color: #212121; */
    color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#000")};

    align-items: flex-end;
    align-content: center;

  
    span{
        font-size: .75rem;
        line-height: 1rem;
        /* color: #212121; */
        color: ${(props) => (props.theme === "dark" ? "#ecedee" : "#000")};

        padding-left: 5px;
        font-weight: 400;
    }
`;


export const PriceDetail = styled.div`
      display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: .25rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    border-bottom: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
    padding-bottom: 1rem;
`;

export const PLeft = styled.div`
    display: flex;
    flex-direction: column;
    strong{
        font-size: 14px;
    }
    span{
        font-size: 12px;
    }
`;

export const PRight = styled.h4`
  font-size: 16px;
`;

export const RemoveCart = styled.button`
  /* color: #ffffff; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#fff")};

  padding-top: .5rem;
  padding-bottom: .5rem;
  text-align: center;
  padding-left: .75rem;
  padding-right: .75rem;
  background: #000;
  border-radius: .25rem;
  width: 100%;
  border: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease all;
  margin-bottom: 1rem;
  &:hover{
    cursor: pointer;
  }
`;

export const Another = styled.button`
  /* color: #ffffff; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#fff")};

  padding-top: .5rem;
  padding-bottom: .5rem;
  text-align: center;
  padding-left: .75rem;
  padding-right: .75rem;
  /* background: #000; */
  border-radius: .25rem;
  width: 100%;
  border: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease all;
  margin-bottom: 1rem;
  background: #457c7d;
  &:hover{
    cursor: pointer;
  }
`;


export const Text = styled.p`
    font-size: .75rem;
    line-height: 1rem;
    /* color: #212121; */
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};

`;

export const Share = styled.p`
    font-size: .75rem;
    line-height: 1rem;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    border: 1px solid
    ${(props) => (props.theme === "dark" ? "#c1c1c1" : "#e8e8e8")};
  
    border-radius: 9999px;
    gap: .5rem;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    width: auto;
    margin: 20px auto 0 auto;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
    transition: 0.3s ease all;
    svg{
        width: 12px;
        height: 12px;
    }
    &:hover{
    cursor: pointer;
  }
`;

