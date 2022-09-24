import React from 'react'
import './Portfolio.css'
import IMG1 form '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
          </div>
            <h3>This is postfolio item title</h3>
            <a href='https://github.com/fahadsidd107' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/fahadsidd107' className='btn btn-primary' target='_blank' >Live Demo</a>
       
        </article>
      </div>
    </section>
  )
}

export default Portfolio