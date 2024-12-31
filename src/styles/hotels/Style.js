import styled from "styled-components";

// Container with a solid green background and background image with a dark overlay
export const Container = styled.section`
  box-sizing: border-box;
  max-width: 1240px;
  width: 100%;
  margin: 70px auto;

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

// Container with a solid green background and background image with a dark overlay
export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;
export const H2 = styled.h2`
    margin-bottom: 1rem;
    font-size: 24px;
`;

export const Round = styled.div`
    background: #ececec94;
border-radius: 50%;
padding: 10px;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
color: #000;
font-size: 13px;

`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

`;

export const Div = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

`;

export const Text = styled.p`

`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 15px 12px;
    flex-wrap: wrap;

`;

export const Card = styled.div`
    max-width: 405px;
    max-height: 360px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    object-fit: cover;
    /* width: 100%; */
    z-index: 0;
    transition: all 1s ease-in-out;
    border-radius: 1.85rem;
    overflow: hidden;
    position: relative;
    &:hover{
        overflow: hidden;
        cursor: pointer;
        box-shadow: -1px 0 20px #251a1a26, 2px 1px 30px #0000001a;
    }
    .destination-card-inner{
        height: auto;
        min-height: unset;
        width: auto;
    }
    @media screen and (max-width: 767px) {
        max-width: 325px;
        width: 100%;
  }

`;

export const Figure = styled.figure`

`;

export const Image = styled.img`

`;

export const CardInnerBox = styled.div`
    max-width: 373px;
    width: 100%;
    height: 110px;
    background: #fff;
    position: absolute;
    border-radius: 1.8rem;
    padding: 10px;
    bottom: 20px;

    @media screen and (max-width: 767px) {
        max-width: 300px;
    width: 100%;
    height: auto;
    /* padding-right: 15px; */
  }

`;

export const Strong = styled.strong`
    font-size: 18px;
`;

export const Paper = styled.span`

`;

export const RatingWrapper = styled.div`

display: flex;
`;

export const Icon = styled.span`

`;
