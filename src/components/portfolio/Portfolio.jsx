import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio-img.png'
import IMG2 from '../../assets/portfolio-img2.png'
import IMG3 from '../../assets/portfolio-img3.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Credit Card System',
    github: 'https://github.com/audreythando/credit-card-system',
    demo: 'https://credit-card-system-seven.vercel.app/'
   
  },
  {
    id: 2,
    image: IMG3,
    title: 'AI Image Generating App',
    github: 'https://github.com/audreythando/mern-dreyai-image-generating-app',
    demo: 'https://mern-dreyai-image-generating-app.vercel.app/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Hey Sis, GBV victims ChatApp',
    github: 'https://github.com/audreythando/heyy-sis',
    demo: 'https://heyy-sis-audreythando.vercel.app/'
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