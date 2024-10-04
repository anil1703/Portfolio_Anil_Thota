import "./index.css"
import { IoCloudDownloadOutline } from "react-icons/io5";

const About = () => {
    return (

        <div id="about" className="about">
            <h1 className="Aboutme-Head">About Me</h1>

            <div className="about-me-container">
            <img className="aboutme-img" src="https://res.cloudinary.com/dafmi9027/image/upload/v1720004055/Portfolio%20Update/Pngtree_children_s_software_programming_5401259_g6hv6o.png"/>
            <div className="para-div">
                <p>Hi, I'm Thota Anil Sai Kumar!

I recently completed my Bachelor's degree in Computer Science, where I gained a solid foundation in programming and software development. I am actively seeking opportunities as a Full Stack Developer, where I can leverage my skills in both front-end and back-end technologies. My passion for coding and problem-solving drives me to continuously learn and improve, and I am excited to contribute to innovative projects in the tech industry</p>
<a  href = "https://drive.google.com/file/d/1gBkuHp2FIt1yZN8ObaBCnaz9C1lKT8V1/view" target="_blank"><button className="resume-btn-style">Resume <IoCloudDownloadOutline/></button></a>
            </div>
            <div>

                
            </div>
            </div>
        </div>
    )
}

export default About