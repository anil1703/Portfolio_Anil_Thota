import { Chrono } from 'react-chrono';
import "./index.css";

const educationItems = [
  {
    id: 1,
    title: "2020 - 2024",
    subtitle: "Bachelor of Technology",
    collegeName: "Kalasalingam Academy of Research and Education",
    courseTitle: "Computer Science and Engineering",
    address: "Madurai, Tamil Nadu",
    description: "Lorem ipsum dolor sit amet, ",
  },
  {
    id: 2,
    title: "2018 - 2020",
    collegeName: "Narayana Junior College",
    subtitle: "Intermediate",
    courseTitle: "MPC",
    address: "Repalle, Andhra Pradesh",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia.",
  },
  {
    id: 3,
    title: "2017 - 2018",
    collegeName: "Raghava Vidya Nilayam",
    subtitle: "Matriculation",
    courseTitle: "SSC",
    address: "Repalle, Andhra Pradesh",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia.",
  },
];

const Education = () => {
  return (
    <div className="education">
      <h1 className='education-head'>Education Details</h1>
      <div>
        <Chrono
          focusActiveItemOnLoad
          theme={{ secondary: 'white' }}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          className = "chronooooo"
          
        >
          {educationItems.map((eachItem) => (
            <div key={eachItem.id} title={eachItem.title} className="education-item">
              <div className="content">
                <h3>{eachItem.subtitle}</h3>
                <p>{eachItem.collegeName}</p>
                <p>{eachItem.courseTitle}</p>
                <p>{eachItem.address}</p>
                <p>{eachItem.description}</p>
                <h5>{eachItem.title}</h5>
              </div>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

export default Education;
