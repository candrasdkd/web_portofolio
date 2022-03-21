import React, { useState } from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <div className={darkMode ? 'dark-mode' : 'white-mode'}>
        <div className="radio__container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App