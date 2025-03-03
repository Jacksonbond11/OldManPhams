import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ImageText from "./Components/ImageText";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <ImageText />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
