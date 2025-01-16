import styled from "styled-components";

export const TabWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #e8e8e8;
    position: sticky;
    top: 60px;
    height: 73px;
    background: #fff;
    display: flex;
    align-items: center;
    z-index: 9;
`;

export const InnerTabWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:8px;
    max-width: 1152px;
    width: 100%;
    margin: 0 auto;
`;

export const Tab = styled.div`
    font-size: 14px;
    padding: 24px 0px;
`;


