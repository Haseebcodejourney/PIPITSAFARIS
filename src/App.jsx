import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/common/GlobalStyle";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import FindTripPage from "./pages/FindTripPage";
import AffiliatesPage from "./pages/AffiliatesPage";
import BlogPage from "./pages/BlogPage";
import TripsPage from "./pages/TripsPage";
import Header from "./components/Header";
import { lightTheme, darkTheme } from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import EmptyPage from "./pages/EmptyPage";
import HotelsPage from "./pages/HotelsPage";
import DestinationPage from "./pages/DestinationPage";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Get theme from localStorage or default to dark

  // Effect to apply the theme class on the body
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme); // Save theme in localStorage
  }, [theme]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/privacy" element={<PrivacyPage theme={theme} />} />
          <Route path="/terms" element={<TermsPage theme={theme} />} />
          <Route path="/find-trip" element={<FindTripPage theme={theme} />} />
          <Route
            path="/affiliates"
            element={<AffiliatesPage theme={theme} />}
          />
          <Route path="/blog" element={<BlogPage theme={theme} />} />
          <Route path="/trips" element={<TripsPage theme={theme} />} />
          <Route path="/hotels" element={<HotelsPage theme={theme} />} />
          <Route path="/destinations" element={<DestinationPage theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
