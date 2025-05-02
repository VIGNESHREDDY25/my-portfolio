import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Hi, I'm Vignesh Reddy </h1>
        <p className="hero-subtitle">Full Stack Developer & Software Engineer</p>
        <p className="hero-description">
        I craft intelligent web applications with a strong grip on Data Structures & Algorithms and deep knowledge of Full Stack Development.
From building seamless user experiences to designing machine learning models that turn data into impact — I blend software engineering with smart systems.
Let’s code the future, one idea at a time.

        </p>
        <br />
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </div>
  );
}

export default Home;
