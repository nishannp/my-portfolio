import React from 'react';
import './projects.css';
import SEO from './seo';

const Projects = () => {
  const projects = [
 {
      name: 'THE GCSC',
      image: 'project/gcsc.jpg',
      link: 'https://thegcsc.org',
    },

     {
      name: 'BAKO SAMPATI',
      image: 'project/bakosampati.jpg',
      link: 'https://bakosampati.com',
    },
    {
      name: 'SVSS SCHOOL',
      image: 'project/svss.png',
      link: 'https://svss.edu.np',
    },
    {
      name: '4 to 9 cafe',
      image: 'project/project11.jpg',
      link: 'https://4to9cafe.com.np',
    },
    {
      name: 'SNAV ASSISTANT',
      image: 'project/snavai.jpg',
      link: 'https://ai.nishannepali.com.np',
    },
    {
      name: 'Hamro Suchana',
      image: 'project/hamrosuchana.png',
      link: 'https://hamrosuchana.rf.gd',
    },
    {
      name: 'Snav Date',
      image: 'project/snavdate.png',
      link: 'https://snavdate.rf.gd',
    },
    {
      name: 'Snav Team',
      image: 'project/project1.jpg',
      link: 'https://snavteam.netlify.app',
    },
    {
      name: 'Snav Notes',
      image: 'project/project2.jpg',
      link: 'https://snavnotes.rf.gd',
    },
    {
      name: 'Umesh Cycle',
      image: 'project/umeshcyclestore.png',
      link: 'https://umeshcycle.rf.gd',
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
      image: 'project/project10.jpg',
      link: 'https://snavmusic.netlify.app',
    },
   
    {
      name: 'Nishan Movies',
      image: 'project/project12.jpg',
      link: 'https://movies.nishannepali.com.np',
    },
  ];

  return (
    <div className="projects-container">
       <SEO 
        title="Projects - Nishan Nepali"
        description="Discover the projects of Nishan Nepali, including web development, mobile apps, and coding experiments. Explore the innovative solutions and creative ideas."
        keywords="Nishan Nepali, Projects, Web Development, Mobile Apps, Coding, Programming, Surkhet, Nepal"
        canonical="https://nishannepali.com.np/projects"
         image="images/svss.png"
      />
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
