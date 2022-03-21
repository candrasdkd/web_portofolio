import React from 'react'
import "./header.css"
import CTA from "./CTA";
import Example1 from "../../assets/example1.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Candra Sidik Dermawan</h1>
        <h5 className="text-light"> Fullstack Mobile Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Example1} alt="Example 1" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header