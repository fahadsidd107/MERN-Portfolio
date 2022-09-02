import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = (item,para) => {
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
  <ListItem item='Fahad' para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr "/>
</ul>

      </div>

    </section>
  )
}




export const ListItem =(props,para)=> {
  return (
    <div>
      <li><BiCheck className='service__list-icon'/>{props.item}</li>
      <p>{props.para}</p>
    </div>
  )
}

export default Services

