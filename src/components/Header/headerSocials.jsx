import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
function headerSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/fahad-siddiqui-595484176/' target='_blank' className=''><BsLinkedin /></a>
      <a href='https://github.com/fahadsidd107' target='_blank' className=''><BsGithub /></a>
      <a href='https://twitter.com/Fad_Flex' target='_blank' className=''><BsTwitter /></a>
    </div>
  )
}

export default headerSocials