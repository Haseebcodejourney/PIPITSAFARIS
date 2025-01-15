import styled from "styled-components";

export const Box = styled.div`
  border-bottom: 1px solid #e5e7eb;
  margin: 30px 0px 30px 0px;
  padding-bottom: 30px;
`;

export const H2 = styled.h2`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 0px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItems = styled.li`
  /* Changed from styled.link to styled.li */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  background-color: #4a7454;
  color: #fff;
  font-size: 16px;
  padding: 10px; /* Added padding for better appearance */
  margin: 5px; /* Added margin for spacing between items */
  border-radius: 9999px;
  border-color: #e8e8e8;
  width: 97px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: center;
`;

export const Paper = styled.span`
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"}; /* Dark mode background */
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    width: 14px;
    height: 14px;
  }
  .excellent{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);
    border: 1px solid #e8e8e8;
    background: #4a7454;
    width: 23px;
    height: 23px;
    display: inline-block;
    border-radius: 50%;

  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#001730"};
  color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#fff"}; /* Dark mode background */
  font-size: 16px;
  max-width: 216px;
  width: 100%;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 32px;
  svg {
    width: 18px;
    height: 16px;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  background: #fff;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Components = styled.div`
  max-width: 652px;
  width: 100%;
  justify-content: space-between;
`;

export const Div = styled.div`
  max-width: 339px;
  width: 100%;
`;
