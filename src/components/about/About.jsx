import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">


<p>
I am a frontend developer specializing in React. I have a passion for building visually appealing and user-friendly web applications that deliver an exceptional user experience. My skills include React, JavaScript/TypeScript, HTML, CSS, and a strong understanding of web development principles. I am currently learning SQL and Angular. l am constantly learning and adapting to new technologies to stay up-to-date with industry trends. I am a team player and I am able to work effectively with both technical and non-technical stakeholders. I am always looking for new opportunities to challenge myself and improve my skills.
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About