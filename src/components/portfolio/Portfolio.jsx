import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio-img1.png'
import IMG2 from '../../assets/portfolio-img2.png'
import IMG3 from '../../assets/portfolio3.jpg'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/audreythando/portfolio-thandoaudrey',
    demo: 'https://portfolio-thandoaudrey-ciuo.vercel.app/'
   
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hey Sis,GBV victims safe place',
    github: 'https://github.com/audreythando/heyy-sis',
    demo: 'https://heyy-sis-audreythando.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio