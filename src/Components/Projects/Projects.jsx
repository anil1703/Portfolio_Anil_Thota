import React from "react";
import "./Projects.css";

const ProjectsData = [
  {
    title: "Nxt Watch",
    description:
      "A YouTube-inspired application that allows users to stream videos, like, save content, and toggle between dark and light themes for a personalized experience.",
    demo: "https://nxtwatch3.ccbp.tech/",
    github: "https://github.com/anil1703/NXT-Watch-Youtube-Clone-",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1732778220/Portfolio%20Update/oqi9sk6hemk7ofgsrhwm.png",
    para: "DEMO CRED: username: rahul | password: rahul@2021",
  },
  {
    title: "Blogs",
    description:
      "A sleek and user-friendly blogging platform designed for sharing ideas, stories, and articles seamlessly.",
    demo: "https://blogsl.onrender.com",
    github: "https://github.com/anil1703/Blogs",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1727973043/Portfolio%20Update/Untitled_design_5_gczxz6.png",
    para: "",
  },
  {
    title: "Image Finder",
    description:
      "Effortlessly search for high-quality images tailored to your needs. Ideal for designers, content creators, and anyone seeking visual inspiration.",
    demo: "https://anil1703.github.io/Image-finder/",
    github: "https://github.com/anil1703/Image-finder",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1727973910/Portfolio%20Update/Untitled_design_6_bxw8n8.png",
    para: "",
  },
  {
    title: "Barcode Scanner",
    description:
      "A barcode scanner application for shopping malls that uses the device's camera to scan barcodes and retrieve product details from the database.",
    demo: "https://barcode-billing-system.netlify.app/login",
    github: "https://github.com/anil1703/BarCode_Scanner",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1732776571/Portfolio%20Update/g62imkkvzi0ifxajd6hg.png",
    para:
      "Credentials: Admin - username: admin17 | password: Admin@123, User - username: user17 | password: User@123",
  },
  {
    title: "Employee Management",
    description:
      "A comprehensive employee management system allowing users to add, delete, update, and search for employees efficiently.",
    demo:
      "https://drive.google.com/file/d/1BIQCWwgfTHGntzRFuLDF1Gd6MoUj_s7U/view?usp=sharing",
    github: "https://github.com/anil1703/dealsDray-Assignment",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1732776569/Portfolio%20Update/iwbonona3apcpc2l5rb0.png",
    para: "Credentials: username: Hukum Gupta | password: Gupta@2024",
  },
  {
    title: "Fire Wheels",
    description:
      "A static website showcasing car models, enabling customers to explore various designs effortlessly.",
    demo: "https://anil1703.github.io/project2-nexus/",
    github: "https://github.com/anil1703/project2-nexus",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1732777358/Portfolio%20Update/jbrfqlwue99xjsgbtrp3.png",
    para: "",
  },
  {
    title: "Shoe World",
    description:
      "A stylish website displaying a variety of shoe models for customers to explore and find their perfect fit.",
    demo: "https://aniltshoeworld.ccbp.tech/",
    github: "https://github.com/anil1703/project3-nexus",
    banner:
      "https://res.cloudinary.com/dafmi9027/image/upload/v1732777705/Portfolio%20Update/ucjfb4ljcxofvyjxvma7.png",
    para: "",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <h1 style={{ color: "#7E60BF" }}>Projects</h1>
      <div className="container">
        {ProjectsData.map((project, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img src={project.banner} alt={project.title} />
            </div>
            <div className="card-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div style={{
                marginTop: "10px",
                display:"flex",
                justifyContent: "space-around"
              }}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button style={{
                  cursor:"pointer"
                }}>
                Demo Link
                </button>
              </a>
              <br />
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button style={{
                  cursor:"pointer"
                }}>
                GitHub Link
                </button>
              </a>
                </div>
              {project.para && (
                <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555",fontSize:"10px" }}>
                  {project.para}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
