import React from "react";
import "./Projects.css";

const ProjectsData = [
  {
    title: "Blogs",
    description: "This is Nothing But Blog Website",
    demo: "https://blogsl.onrender.com",
    github: "https://github.com/anil1703/Blogs",
    banner: "https://res.cloudinary.com/dafmi9027/image/upload/v1727973043/Portfolio%20Update/Untitled_design_5_gczxz6.png", // Use your actual banner link
  },
  {
    title: "Image Finder",
    description: "Finding the perfect images has never been easier. Whether you're a professional designer, content creator, or simply looking for inspiration, Image Finder caters to all your visual needs.",
    demo: "https://anil1703.github.io/Image-finder/",
    github: "https://github.com/anil1703/Image-finder",
    banner: "https://res.cloudinary.com/dafmi9027/image/upload/v1727973910/Portfolio%20Update/Untitled_design_6_bxw8n8.png", // Use your actual banner link
  },
  
  // You can add more projects in the same format
];

const Projects = () => {
  return (
    < div id="projects">
      <h1 style={{color:"#7E60BF"}}>Projects</h1>
      <div className="container">
        {ProjectsData.map((project, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img src={project.banner} alt={project.title} />
            </div>
            <div className="card-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <br />
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
