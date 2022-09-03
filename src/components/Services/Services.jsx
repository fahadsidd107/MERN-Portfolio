import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = (head,para) => {
  return (
    <section id='services'>
      <h5>What  I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>



  <ListItem head='Fahad' para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr "/>


      </div>

    </section>
  )
}




export const ListItem =(props,para,head)=> {
  return (
    <div>
    <article className='services'>
  <div className='service__head'>
<h3>{props.head}</h3>
  </div>
</article>
<ul className='service__list'>
      <li><BiCheck className='service__list-icon'/><p>{props.para}</p></li>
</ul>
      
    </div>
  )
}

export default Services

