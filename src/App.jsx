import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ImageText from "./Components/ImageText";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Donate from "./Components/Donate";
import Blog from "./Components/Blog";

function ScrollHandler({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler>
        <div className="bg-[#f6f6eb]">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ImageText />
                  <Services />
                  <Donate />
                  <Contact />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/*"
              element={
                <div className="p-12 text-center text-[#4b5717]">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </ScrollHandler>
    </BrowserRouter>
  );
}

export default App;
