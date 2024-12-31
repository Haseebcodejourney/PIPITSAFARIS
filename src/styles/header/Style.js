import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 25px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#001730")};
  position: fixed;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  height: 60px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    height: auto;
    border-bottom: 1px solid #c1c1c1;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px; /* Responsive width */
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 120px; /* Adjust for smaller screens */
  }
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const Image = styled.img`
  width: 65px;
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Prevent distortion */
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transition: 0.3s all;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItems = styled.li`
  padding: 8px 16px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  font-size: 14px;
  transition: 0.3s all;
  border-bottom: 0px solid #c1c1c17a;

  @media (max-width: 768px) {
    border-bottom: 1px solid #c1c1c17a;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 0px;
    margin: 0px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ff5b00;
    width: 0;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
    animation: heartbeat116 1.5s infinite;
  }

  @keyframes heartbeat116 {
    0%,
    100% {
      width: 100%;
    }
    50% {
      width: 60%;
    }
  }

  a:hover {
    color: #ff5b00;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ButtonsPrimary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#212121"};
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
    display: none;
  }
`;

export const ButtonsSecondary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => "transparent"};
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 24px;
  width: 30px;
  cursor: pointer;
  z-index: 100;

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#001730"};
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 9;
  transform: translateY(-100%);
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 1;

  &.open {
    transform: translateY(0);
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 0;
    list-style: none;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  font-size: 18px;
  padding: 10px;
  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }
`;
