import React from 'react'
import "./about.css"
import Example1 from "../../assets/csd1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Example1} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 montg Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Personal Project</h5>
              <small>10 Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Client Project</h5>
              <small>1 Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ut eaque odio quaerat! Dicta natus perspiciatis id beatae enim, officia dignissimos unde magni quae alias, eaque dolorum, voluptatibus vitae possimus?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About