import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className='container portfolio_container'>
        <Article image={IMG1} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
        <Article image={IMG2} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
        <Article image={IMG3} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
        <Article image={IMG4} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
        <Article image={IMG5} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
        <Article image={IMG6} poster='Suiiii' github='https://github.com/fahadsidd107' demo='https://github.com/fahadsidd107' />
      </div>
    </section>
  )
}

function Article({ props }) {
  return (
    <>
      <article className='portfolio_item'>
        <div className='portfolio_item_image'>
          <img src={props.poster} alt="IMG1" />
        </div>
        <h3>{props.title}</h3>
        <div className='portfolio_item_cta'>
        <a href={props.github} className='btn' target='_blank' rel="noreferrer" >Github</a>
        <a href={props.demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
        </div>
      </article>
    </>
  )
}


export default Portfolio