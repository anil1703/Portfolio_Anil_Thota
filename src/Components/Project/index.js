import Header from "../Header"
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin,FaGithubSquare  ,FaTwitterSquare,FaWhatsappSquare     } from "react-icons/fa";
import { AiFillCodepenSquare } from "react-icons/ai";
import About from "../About"
import Skills from "../Skills"
import Education from "../Education"
import Services from "../Services"
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import "./index.css"


const Project = () => {

    const handleType = (count) => {
        console.log(`Typed word count: ${count}`);
      }
    
      const handleDone = () => {
        console.log(`Done typing!`);
      };
 
    return <>
    <Header/>
    
    <div className="home-bg">
    <div className="home-container">
    <div className="content-text">
            <p>Hi there..👋</p>
            <p className="name">
              My Name is <span className="Anil">Anil</span>
            </p>
            <h1 className="sliding" style={{fontWeight:"300",}}>
              I'm a{" "}
              <span style={{ color: "#9EB8D9", fontWeight: "900" ,}}>
                <Typewriter
                  words={["Front-End Dev", "Web Designer", "Photographer", "Full-Stack Dev"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            <div className="icons-container">
                <a href="https://www.linkedin.com/in/anil1703/" rel="noreferrer" target="_blank"><div className="logo-Div">
                    <FaLinkedin color={"#0a66c2"} size={35}/>
                    </div></a>
                    <a href="https://github.com/anil1703" rel="noreferrer" target="_blank"><div className="logo-Div">
                    <FaGithubSquare  color={"black"} size={35}/>
                    </div></a>
                    <a href="https://x.com/Anilcherry03/" rel="noreferrer" target="_blank"><div className="logo-Div">
                    <FaTwitterSquare color={"#1DA1F2"} size={35}/>
                    </div></a>
                    <a rel="noreferrer" href="https://api.whatsapp.com/send/?phone=919492033481&text&type=phone_number&app_absent=0" target="_blank"><div className="logo-Div">
                    <FaWhatsappSquare  color={"#25d366"} size={35}/>
                    </div></a>
                    <a rel="noreferrer" href="https://codepen.io/Anil-Sai-Kumar-Thota" target="_blank"><div className="logo-Div">
                    <AiFillCodepenSquare  color={"black"} size={38}/>
                    </div></a>
            </div>
          </div>
          <div className="image-border">
            <img
              className="profile-img-style"
              src="https://res.cloudinary.com/dafmi9027/image/upload/v1719988909/Portfolio%20Update/Picsart_24-07-03_12-09-44-005_zelwpa.png"
              alt="profile-image"
            />
          </div>
          </div>
    </div>
    <div className="body-section">
      <div className="body-Margin">
            <About/>
          <Skills/>
          <Education/>
          <Services/>
          <Projects/>
          <ContactForm/>
      </div>

    </div>
    <Footer/>
    </>

}

export default Project