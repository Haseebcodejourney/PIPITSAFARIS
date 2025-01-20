import styled from "styled-components";

// Container with flexbox layout and responsive adjustments
export const Container = styled.section`
  max-width: 784px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 48px;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 48px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding-bottom: 64px;
    padding-top: 34px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 0;
`;

export const H3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  list-style: none;
`;

export const ListItems = styled.li`
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 0.5rem;
  background: #f6f6f6;
  color: #000;

  &.active {
    background: #212121;
    color: #fff;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px; /* Adjust based on use case */
  background-color: #f4f4f4; /* Placeholder style */
  
  @media screen and (max-width: 767px) {
    height: 300px; /* Adjust for smaller screens */
  }
`;

export const IncludedWrapper = styled.div`
  margin-top: 20px;
`;

export const ExcludedWrapper = styled.div`
  margin-top: 20px;
`;

export const H4 = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Paper = styled.span`
  display: inline-block;
  margin-left: 10px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ListTick = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    background: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin-bottom: 8px;

    span {
      margin: 0;
      color: #609165; /* Safari green color */
    }
  }
`;

export const ListExclude = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    background: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin-bottom: 8px;

    span {
      margin: 0;
      color: #dc2626; /* Red color for exclusions */
    }
  }
`;
