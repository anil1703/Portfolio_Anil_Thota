import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./index.css"


const Skills = () =>{

    return (

        <div className="skills">
<h1 className="skills-title">Skills</h1>
            <ul className="skillsUl">
                <li className="iconSkills" ><FaHtml5 color={"#f06529"} size={100} /><p>Html</p></li>
                <li className="iconSkills"><FaCss3Alt color="#39ACD9" size={100} />CSS</li>
                <li className="iconSkills"><IoLogoJavascript color={"#EFD81D"} size={100} />Javascript</li>
                <li className="iconSkills"><FaBootstrap color={"#7E0FF3"} size={100} />Bootstrap</li>
                <li className="iconSkills"><FaPython color={"#4B8BBE"} size={100} />Python</li>
                <li className="iconSkills"><SiMysql color={"#F29111"} size={100} />Sql</li>
                <li className="iconSkills"><FaNode color={"#8DC651"} size={100} />Node Js</li>
                <li className="iconSkills"><FaReact color={"#61DBFB"}  size={100} />React Js</li>
                <li className="iconSkills"><FaGitAlt color={"#F1502F"} size={100}/>Git</li>
                <li className="iconSkills"><FaFigma color={"#FF7EE2"} size={100}/>Figma</li>
            </ul>
        </div>
    )
}

export default Skills