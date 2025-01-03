// Import styled-components
import styled from 'styled-components';

// Define a reusable button component
export const Container = styled.section`
  width: 100%;
  background: url(https://static.cloudsafaris.com/public/Cheetah-CTA.jpg?action=get) no-repeat bottom center;
  background-size: cover;
  min-height: 450px;
  display: flex;
  justify-content: center; /* If you want to center content */
  align-items: center; /* If you want to center content */
  position: relative;
  &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000036; // Black with 50% opacity
        z-index: 1;  // Place it above the background, but below the content
    }

    // Content inside the Wrapper (e.g., text or buttons)
    > * {
        position: relative;
        z-index: 2; // Ensure the content stays above the overlay
    }
    @media screen and (max-width: 1280px) {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  @media (max-width: 768px) {
    padding: 0px 24px;
    width: -webkit-fill-available;
    min-height: 300px;
    max-height: 300px;
  }
`;

export const Wrapper = styled.div`
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    .heading{
        color: #fff !important;
    }

    @media (max-width: 1100px) {
        padding: 0px 24px;
    }

    @media (max-width: 768px) {
        padding: 0px 24px;
        h2{
            font-size: 36px;
        }
        button{
            font-size: 14px;
        }
    }
`;

