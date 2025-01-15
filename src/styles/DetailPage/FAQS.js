import styled from "styled-components";

// Wrapper for the component
export const ComponentWrapper = styled.div`
  margin: 30px auto 0 auto;
  padding-bottom: 30px;
  max-width: 1152px;
  width: 100%;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Left = styled.div`
    max-width: 520px;
    width: 100%;
`;

export const Right = styled.div`
   max-width: 520px;
   width: 100%;
`;

// Headings
export const H2 = styled.h2`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 48px;
  margin: 0 0 20px 0;
`;

