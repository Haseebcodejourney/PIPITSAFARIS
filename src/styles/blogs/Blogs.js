import styled from "styled-components";

// Container with a solid green background and background image with a dark overlay
export const Container = styled.section`
  box-sizing: border-box;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background: ${(props) =>
    props.theme === "dark" ? "#18181b" : "#fff"} !important;

  padding: 0px 20px 0px 0px;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    box-sizing: border-box;
    flex-direction: column;
    padding: 25px 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 2.5rem;
  margin-top: 72px;
  color: ${(props) =>
    props.theme === "dark" ? "#d4d4d8" : "#15171A"} !important;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

export const Left = styled.div`
  margin-right: 2.5rem;
  @media screen and (max-width: 1024px) {
    margin: 0px;
    width: 100%;
  }
`;

export const Figure = styled.figure`
  margin: 0px;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  ${Wrapper}:hover & {
    transition: 0.3s ease all;
    transform: scale(1.1);
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Strong = styled.strong`
  font-size: 18px;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#15171A")};
  margin-bottom: 0.8rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Paper = styled.span`
  font-size: 13px;
  /* color: #999999; */
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#999999"} !important;
`;

export const Text = styled.p`
  font-size: 15px;
  /* color: #333333; */
  color: ${(props) =>
    props.theme === "dark" ? "#a1a1aa" : "#333333"} !important;

  margin-bottom: 0.8rem;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  padding: 0px 15px;
  color: #000;
  border: 0px solid #e6e6e6;
  background: #fff;
  margin-bottom: 0.8rem;
  border-radius: 3px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  color: #212121;
  text-transform: uppercase;
  border-radius: 9999px;
  border: 1px solid transparent;
  background-color: #ff5b00;
  transition: 0.3s ease all;
  &:hover {
    color: #ffffffe6;
    background-color: hsla(0, 0%, 100%, 0);
    border: 1px solid #ffffffe6;
    cursor: pointer;
  }
`;
