import React, { useState } from 'react';
import drck from './Photos/drck.png';
const  App = () => {
  

  return (
    <>
      <section className="hero">
        <figure className="profile-pic-figure">
          <img src={drck} alt="Profile Picture" />
        </figure>
      <p className="summary">A <strong>Mechanical Engineering</strong> graduate with a keen interest in software development, I've transitioned into the world of web development through self-guided learning. Fueled by passion and dedication, I continually strive to embrace emerging technologies and advance my skills in the dynamic field of software development.</p>
      </section>
    </>
  );
};

export default App;