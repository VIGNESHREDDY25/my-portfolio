import React, { useState } from 'react';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      description: "Core languages I use for software development",
      skills: ["C", "C++", "Java", "Python", "R"],
      color: "#FF6B6B"
    },
    {
      title: "Web Development",
      icon: "🌐",
      description: "Technologies I use for building web applications",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Node.js", "Django", "Bootstrap", "REST APIs"],
      color: "#4ECDC4"
    },
    {
      title: "ML & Data Analysis",
      icon: "🧠",
      description: "Tools for machine learning and data processing",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
      color: "#45B7D1"
    },
    {
      title: "Databases",
      icon: "🗄️",
      description: "Database systems I'm proficient with",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
      color: "#96CEB4"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Cloud platforms and DevOps tools",
      skills: ["AWS", "Azure", "GCP", "Azure DevOps", "Flux", "Git"],
      color: "#9B59B6"
    },
    {
      title: "Dashboards & Reporting",
      icon: "📊",
      description: "Data visualization and reporting tools",
      skills: ["Tableau", "Power BI"],
      color: "#F39C12"
    }
  ];

  return (
    <div id="skills" className="section skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-card"
            style={{
              '--card-color': category.color,
              '--delay': `${index * 0.1}s`
            }}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <p className="skill-description">{category.description}</p>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`skill-tag ${hoveredSkill === index ? 'animate' : ''}`}
                  style={{ '--tag-delay': `${skillIndex * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
