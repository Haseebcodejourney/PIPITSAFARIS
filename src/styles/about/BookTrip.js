import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 8rem auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    margin: 6rem auto;
  }

  @media (max-width: 1024px) {
    margin: 4rem auto;
    flex-direction: column;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    margin: 3rem auto;
  }

  @media (max-width: 480px) {
    margin: 2rem auto;
  }
`;

export const Left = styled.div`
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 0; /* default margin */

  &:not(:first-of-type) {
    margin-top: -44px; /* Apply margin for all except the first one */
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const InnerWrapper = styled.div`
  border-left: 1px solid #609165;
  margin-left: 15px;
  padding-bottom: 43px;
  strong {
    padding-left: 30px;
    margin-left: 20px;
    display: flex;
  }
`;
export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: circle;
  margin-left: 2.25rem;
  padding-left: 2rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ListItems = styled.li`
  padding: 0px;
  margin: 0px;
  /* color: #454545; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#454545")};
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Dot = styled.div`
  border: 2px solid #609165;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: #fff;
  position: relative;
`;

export const InnerDot = styled.div`
  border: 2px solid #609165;
  width: 12px;
  height: 12px;
  position: absolute;
  background: #609165;
  border-radius: 50%;
  top: 50%; /* Position vertically at the center */
  left: 50%; /* Position horizontally at the center */
  transform: translate(
    -50%,
    -50%
  ); /* Adjust the element by half its width and height to truly center it */
`;

export const Strong = styled.strong`
  /* color: #212121; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#212121")};
  font-size: 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  /* color: #4a7454; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#4a7454")};
  background: #e4ede6;
  padding: 6px 16px;
  border-radius: 999px;
  border: 0px;
  width: 134px;
  height: 35px;

  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    display: inline-flex;
    width: fit-content;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  /* color: #000; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  display: flex;

  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h2`
  font-size: 20px;
  /* color: #000; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  display: flex;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  /* color: #454545; */
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#454545")};

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonBlack = styled.button`
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  padding: 1rem;
  /* background: #212121; */
  border-radius: 0.375rem;
  justify-content: center;
  width: fit-content;
  display: flex;
  font-weight: 600;
  gap: 0.5rem;
  color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  background: ${(props) => (props.theme === "dark" ? "#ff5b00" : "#212121")};
`;

export const Right = styled.div`
  max-width: 325px;
  width: 100%;
  position: sticky;
  top: 2rem; /* Keep it 2rem from the top of the viewport */
  z-index: 10; /* Optional: Add a z-index to prevent it from being overlapped */

  @media (max-width: 1024px) {
    max-width: 280px;
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 240px;
    display: none;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const Figure = styled.figure`
  margin: 0px;

  &:nth-child(2) {
    position: absolute;
    bottom: 25px;
    right: -80px;
    img {
      width: 260px;
      height: 390px;
    }

    @media (max-width: 1024px) {
      right: -60px;
      img {
        width: 230px;
        height: 350px;
      }
    }

    @media (max-width: 768px) {
      right: -50px;
      /* flex-direction: column; */
      img {
        width: 200px;
        height: 300px;
      }
    }

    @media (max-width: 480px) {
      right: -40px;
      img {
        width: 170px;
        height: 250px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;
