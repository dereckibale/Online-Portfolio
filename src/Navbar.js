import React from 'react'

const Navbar = ({home, 
    setHome,
    setAbout,
    setProjects,
    setContact}) => {
  return (
    <nav className="navbar">
        
        <p 
        onClick={() => {setHome(true); setAbout(false); setProjects(false); setContact(false); console.log("You clicked Home")}  }
        className="activee">Home</p>
      
        <p 
        onClick={() => {setHome(false); setAbout(true); setProjects(false); setContact(false); console.log("You clicked About Me")}}
        className="activee" href="#">About Me</p>
      
        <p 
        onClick={() => {setHome(false); setAbout(false); setProjects(true); setContact(false); console.log("You clicked Projects")}}
        className="activee" href="https://dereckibalecolorbox.netlify.app">Projects</p>
      
        <p 
        onClick={() => {setHome(false); setAbout(false); setProjects(false); setContact(true); console.log("You clicked Contact")}}
        className="activee" href="#">Contact</p>

      </nav>
  )
}

export default Navbar
