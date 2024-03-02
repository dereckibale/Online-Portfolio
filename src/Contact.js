import React from 'react'
import drck from './Photos/drck.png'
import email from './Photos/gmail logo.jpg'
import cellphone from './Photos/cellphone logo.png'
import fb from './Photos/fb logo.png'
import github from './Photos/github logo.png'
const Contact = () => {
  return (
    <>
      <section className="hero">
        <figure className="profile-pic-figure">
          <img src={drck} alt="Profile Picture" />
        </figure>
        <ul className="contactlist">
          <p><img className="images"src={email} alt="email" /><strong> Email:</strong> ibaledereck65@gmail.com</p>
          <p><img className="images"src={cellphone} alt="cellphone" /><strong> Contact No.:</strong> 0912-947-5280</p>
          <p><img className="images" src={cellphone} alt="cellphone" /> <strong> Alternative Contact No.:</strong>0912-991-0453</p>
          <p><img className="images" src={fb} alt="facebook" /><strong> Facebook:</strong> Dereck Ibale</p>
          <p><img className="images"src={github} alt="github" /><strong> GitHub:</strong> <a target="_blank" rel="noreferrer" className="githublink" href="https://github.com/dereckibale">github.com/dereckibale</a></p>
        </ul>
      </section>
    </>
  )
}

export default Contact
