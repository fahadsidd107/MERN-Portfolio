import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = (para) => {
  return (
    <section id='services'>
      <h5>What  I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>


        <article className='services'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
        </article>
        {/* End of UI/UX */}


        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
          <ListItem para="lorem ipsum qsw wfh yhrtew rgrrewr yt rthtr " />
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  )
}




export const ListItem = (props, para) => {
  return (
    <div>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon' /><p>{props.para}</p></li>
      </ul>
    </div>
  )
}

export default Services

