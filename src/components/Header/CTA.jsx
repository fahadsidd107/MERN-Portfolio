import React from 'react'
import CV from '././../../assets/cv.pdf'
import DS from '././../../assets/ds.pdf'
import './Header.css'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn ' download>CV as Full Stack Developer</a>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
      <a href={DS} className='btn ' download>CV as Data Scientist</a>
    </div>
  )
}

export default CTA