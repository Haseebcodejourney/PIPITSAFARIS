import styled from "styled-components";

export const ComponentWrapper = styled.div`
  border-bottom: 1px solid #e5e7eb;
  margin: 30px 0;
  padding-bottom: 30px;
`;

export const H2 = styled.h2`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 24px;
  margin: 0 0 16px 0;
`;

export const Text = styled.p`
  color: ${(props) => (props.theme === "dark" ? "#a1a1aa" : "#001730")};
  font-size: 16px;
  margin: 0 0 36px 0;
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin:0;
  justify-content: center;
  flex-wrap: wrap;
    gap: 50px 15px;
    margin-top: 50px;
`;

export const Box = styled.div`
max-width: 151px;
width: 100%;
height: 155px;
box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
border-radius: .75rem;
border-color: #f6f6f6;
position: relative;
@media screen and (max-width: 767px) {
    max-width: 140px;
  }
`;

export const Figure = styled.figure`
 position: absolute;
  top: -25px; /* Positions the element at the top */
  left: 50%; /* Moves the element to the horizontal center */
  transform: translateX(-50%); /* Adjusts for the element's own width */

`;

export const Image = styled.img`
height: 80px;
width: 100%;
`;

export const Div = styled.div`
    position: absolute;
  bottom: 20px; /* Positions the element at the top */
  left: 50%; /* Moves the element to the horizontal center */
  transform: translateX(-50%); /* Adjusts for the element's own width */
text-align: center;
span{
    font-size: 14px;
    padding-top: 20px;
    color: #737373;
}
`;

export const Strong = styled.strong`

font-size: 14px;
`;

export const Paper = styled.span`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 14px;
    height: 14px;
  }

  .excellent {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8e8e8;
    background: #4a7454;
    width: 23px;
    height: 23px;
    display: inline-block;
    border-radius: 50%;
  }
  .common{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border: 0px solid #e8e8e8;
    background: #4a7454;
    width: 10px;
    height: 10px !important;
    display: inline-block;
    border-radius: 50%;
    padding: 0px;
  }
  .occasional{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border: 0px solid #e8e8e8;
    background: #f59e0b;
    width: 10px;
    height: 10px !important;
    display: inline-block;
    border-radius: 50%;
    padding: 0px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#fff")};
  font-size: 16px;
  max-width: 216px;
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin: 32px 0 30px 0;

  svg {
    width: 18px;
    height: 16px;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 30px auto 0;
  display: flex;
  align-items: flex-start;
  background: #fff;
  justify-content: space-between;
`;

export const Components = styled.div`
  max-width: 652px;
  width: 100%;
  justify-content: space-between;
`;

