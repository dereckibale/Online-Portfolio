import React, { useState } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import Aboutme from './Aboutme'
import Projects from './Projects'
import Contact from './Contact'
const  App = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <main>
      <Navbar home={home}
                  setHome={setHome} 
                  about={about}
                  setAbout={setAbout} 
                  projects={projects}
                  setProjects={setProjects} 
                  contact={contact}
                  setContact={setContact}/>
      {home && <Home />}
      {about && <Aboutme />}
      {projects && <Projects />}
      {contact && <Contact />}
                  
    </main>
    
  )
};

export default App;