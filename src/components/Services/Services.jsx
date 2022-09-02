import React from 'react'
import './Services.css'

const Services = (item) => {
  return (
    <section id='services'>
      <h5>What  I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
<article className='services'>
  <div className='service__head'>
<h3>UI/UX Design</h3>
  </div>
</article>

<ul className='service__list'>
  <ListItem item='Fahad'/>
</ul>

      </div>

    </section>
  )
}




export const ListItem =(props,item)=> {
  return (
    <div>
      <li>{props.item}</li>
    </div>
  )
}

export default Services

