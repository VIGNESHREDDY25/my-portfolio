import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Health Prediction Using Data Mining",
      description: "Developed a website using ML to predict illnesses from symptoms. Trained on 4,920 patient records for high accuracy.",
      tech: ["Python", "Machine Learning", "HTML", "CSS", "JS"],
      github: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      color: "#4ECDC4"
    },
    {
      title: "E-Waste Image Classification",
      description: "Built a web app using Streamlit + Keras to classify electronic waste and support sustainable recycling practices.",
      tech: ["Python", "TensorFlow", "Streamlit"],
      github: "#",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      color: "#FF6B6B"
    },
    {
      title: "Appetite Crush",
      description: "MEAN stack recipe app recommending meals via REST APIs based on user preferences for better food planning.",
      tech: ["MongoDB", "Express", "Angular", "Node.js"],
      github: "#",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      color: "#45B7D1"
    },
    {
      title: "Salary Prediction Model",
      description: "Built a predictive ML model to estimate salaries from employment data, helping HR make smarter hiring decisions.",
      tech: ["Python", "ML", "Pandas", "NumPy"],
      github: "#",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      color: "#96CEB4"
    }
  ];

  return (
    <div id="projects" className="section projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              '--card-color': project.color,
              '--delay': `${index * 0.1}s`
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} className="view-project" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
