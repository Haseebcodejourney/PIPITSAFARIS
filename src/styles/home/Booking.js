import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 72px auto;
  box-sizing: border-box;
  

  h2 {
    padding: 0;
    font-size: 36px;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#212121')};
  }

  @media screen and (max-width: 767px){
    padding-left: 24px;
    padding-right: 24px;
  }
`;

// Wrapper for flex layout
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.75rem;
  @media (max-width: 767px){
    flex-direction: column;
    align-items: center;
  }
`;

// BoxWrapper for column layout
export const BoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

`;

// Div for multiple flexible layouts and individual child styling
export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3px;
  box-sizing: border-box;
  
  .inner{
    min-height: 344px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
      @media (max-width: 767px){
        min-height: 191px;
        max-height: 191px;
        max-width: 100%;
        width: 100%;
        }
    }

  // Gradient applied to the first child
  &:nth-child(1) {
    min-height: 344px;
    max-width: 400px;
    width: 100%;
    /* background: linear-gradient(to right, #00000080, #00000040); */
    background: linear-gradient(157deg, #223ce4 25%, #ff182D 90%);
    border-radius: 1rem;
    padding: 24px;
    min-height: 400px;

    @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 100%;
    width: 100%;
    }
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    /* background: linear-gradient(157deg, #223ce4 25%, #ff182D 90%); */

    div {
      /* background: linear-gradient(to right, #00000080, #00000040); */
      background: linear-gradient(157deg, #223ce4 25%, #ff182D 90%);
      padding: 24px;
      border-radius: 1rem;


    }
    .inner{
      max-width: 400px;
      width: 100%;
      min-height: 194px;
      @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 100%;
    width: 100%;
    }
    }
  }

  &:nth-child(3) {
    min-height: 400px;
    max-width: 400px;
    width: 100%;
    /* background: linear-gradient(to right, #00000080, #00000040); */
    background: linear-gradient(157deg, #223ce4 25%, #ff182D 90%);
    border-radius: 1rem;
    padding: 24px;

    @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 100%;
    width: 100%;
  }
  }
`;

// Paragraph styling
export const P = styled.p`
  padding-top: 0px;
  font-size: 16px;
  color: #fff;
  padding-bottom: 2px;
`;

// Strong text styling for important text
export const Paper = styled.strong`
  font-size: 20px;
  color: #fff;
  padding-top: 10px;
`;

// IconWrapper to center and style icons
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 32px;

  svg {
    color: #fff;
  }
`;
