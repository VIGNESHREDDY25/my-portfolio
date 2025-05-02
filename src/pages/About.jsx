import React from 'react';

function About() {
  return (
    <div id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-photo">
          <img src="/images/vignesh.jpg" alt="Vignesh" />
        </div>
        <div className="about-text">
          <p>
          I'm Vignesh Reddy, a Computer Science graduate student at George Mason University, currently pursuing my Master’s degree. I’m deeply passionate about developing intelligent, secure, and scalable software solutions that solve real-world problems.
          </p>
          <p>
          With a strong foundation in Full-Stack Development (MERN Stack) and Data Structures & Algorithms, I specialize in crafting clean, efficient, and user-focused applications. My interests extend into Artificial Intelligence, Machine Learning, and Data Analysis, where I enjoy building data-driven systems that learn, adapt, and deliver impact.
          </p>
          <p>
          I'm also exploring areas like Cloud Computing (Azure) and Security Management, aiming to build end-to-end solutions that are not only powerful but also resilient. I thrive on continuous learning, hands-on development, and collaborating on meaningful projects.
          </p>
          <p>
Beyond the keyboard, I’m active in event organization, sports coordination, and enjoy contributing to tech communities. Currently, I'm seeking internship and project opportunities in software engineering, AI/ML, and data-driven development to sharpen my skills and make a measurable difference.


          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
