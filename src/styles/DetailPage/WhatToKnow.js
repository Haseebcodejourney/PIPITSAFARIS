import styled from "styled-components";

// Wrapper for the component
export const ComponentWrapper = styled.div`
  border-bottom: 1px solid #e5e7eb;
  margin: 30px 0;
  padding-bottom: 30px;
`;

// Headings
export const H2 = styled.h2`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 24px;
  margin: 0 0 20px 0;
`;

export const H3 = styled.h3`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

// Text
export const Text = styled.p`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 16px;
  margin: 0;
  padding-top: 2px;
`;

// Flexbox container for items
export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 50px 15px;
`;

// Individual box
export const Box = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e8e8e8;
  padding: 16px;
  margin-top: 16px;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease all;
  &:hover{
    background: #183e8d;
    color: #fff;
    cursor: pointer;
    p{
        color: #fff ;
    }
  }
`;


export const Left = styled.div`

`;

export const Right = styled.div`

`;
// Image container
export const Figure = styled.figure`
  margin: 0;
  transition: 0.3s ease all;

`;

// Image
export const Image = styled.img`
  height: 80px;
  width: auto;
  display: block;
`;

// Centered content inside a box
export const Div = styled.div`
  text-align: center;
  margin-top: 10px;

  span {
    font-size: 14px;
    color: #737373;
  }
`;

// Bold text for headings or names
export const Strong = styled.strong`
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
`;

// Status indicators
export const Paper = styled.span`
  color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  .status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }

  .common {
    background: #4a7454;
  }

  .occasional {
    background: #fbbf24;
  }
`;

// Button
export const Button = styled.button`
  background-color: ${(props) => (props.theme === "dark" ? "#121212" : "#001730")};
  color: #fff;
  font-size: 16px;
  width: 100%;
  max-width: 216px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 32px 0 30px 0;
  border: none;
  cursor: pointer;

  svg {
    width: 18px;
    height: 16px;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#333333" : "#00284c"};
  }
`;

// Main page wrapper
export const PageWrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 30px auto 0;
  display: flex;
  align-items: flex-start;
  background: #fff;
  justify-content: space-between;
`;

// Wrapper for child components
export const Components = styled.div`
  max-width: 652px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Notes:
// 1. Adjusted spacing, margin, and padding for better responsiveness.
// 2. Added hover effects to the button for better user feedback.
// 3. Corrected `h2` duplicate naming to `H3` for semantic clarity.
// 4. Improved alignment and positioning for `Box` and `Div` elements.
