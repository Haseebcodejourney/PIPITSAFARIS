import React, { useState } from "react";
import {
  ButtonsPrimary,
  ButtonsSecondary,
  ButtonsWrapper,
  Figure,
  Logo,
  MenuItems,
  MenuList,
  Wrapper,
  Image,
  Hamburger,
  MobileMenu,
  ThemeToggleButton,
} from "../styles/header/Style";
import { Link, Links } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing the theme icons
import EmptyPage from "../pages/EmptyPage";
import MainLogo from "../../src/assets/PipitLogo.png";

export default function Header({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Logo>
          <Link to={"/"}>
            <Figure>
              <Image src={MainLogo} alt="Logo" width={65} height={76} />
            </Figure>
          </Link>
        </Logo>

        {/* Mobile Hamburger Icon */}
        <Hamburger onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* Desktop Menu List */}
        <MenuList>
          <MenuItems>
            <Link to="/">Home</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/trips">Trips</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/hotels">Hotels & Lodges</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/destinations">Destinations</Link>
          </MenuItems>
        </MenuList>

        <ButtonsWrapper>
          <ButtonsPrimary style={{ backgroundColor: "#ff5b00", color: "#fff" }}>
            <Link
              to="/trips"
              style={{ backgroundColor: "#ff5b00", color: "#fff" }}
            >
              Find Your{" "}
            </Link>
          </ButtonsPrimary>
        </ButtonsWrapper>

        {/* Theme Toggle Button */}
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === "light" ? (
            <FaMoon size={20} color="#fff" />
          ) : (
            <FaSun size={20} color="#fff" />
          )}
        </ThemeToggleButton>
      </Wrapper>

      <MobileMenu className={isMenuOpen ? "open" : ""}>
        <MenuItems onClick={closeMenu}>
          <Link to="/">Home</Link>
        </MenuItems>
        <MenuItems onClick={closeMenu}>
          <Link to="/trips">Trips</Link>
        </MenuItems>
        <MenuItems onClick={closeMenu}>
          <Link to="/hotels">Hotels & Lodges</Link>
        </MenuItems>
        <MenuItems onClick={closeMenu}>
          <Link to="/destinations">Destinations</Link>
        </MenuItems>
      </MobileMenu>
    </>
  );
}
