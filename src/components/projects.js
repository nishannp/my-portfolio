import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Snav Team',
      image: 'project/project1.jpg',
      link: 'https://snavteam.netlify.app',
    },
    {
      name: 'Snav Notes',
      image: 'project/project2.jpg',
      link: 'https://snavnote.netlify.app',
    },
    {
      name: 'Love Tester',
      image: 'project/project3.jpg',
      link: 'https://letmecheckyourlove.netlify.app',
    },
    {
      name: 'Markhet',
      image: 'project/project4.jpg',
      link: 'https://markhet.rf.gd',
    },
    {
      name: 'Old Portfolio',
      image: 'project/project5.jpg',
      link: 'https://nishannepali.vercel.app',
    },
    {
      name: 'Rankme',
      image: 'project/project6.jpg',
      link: 'https://rankme.rf.gd',
    },
    {
      name: 'Old Rankme',
      image: 'project/project7.jpg',
      link: 'https://ranked.rf.gd',
    },
    {
      name: 'Snav Coin',
      image: 'project/project8.jpg',
      link: 'http://snavcoin.rf.gd',
    },
    {
      name: 'Snav Hub',
      image: 'project/project9.jpg',
      link: 'https://snavhub.rf.gd',
    },
    {
      name: 'Snav Music',
      image: 'project/project9.jpg',
      link: 'https://snavmusic.netlify.app',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-item" target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
