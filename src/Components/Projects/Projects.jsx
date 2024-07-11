import React from "react";
import "./Projects.css";
import Amazon from "../../assets/amazon.png";
import Edusity from "../../assets/edusity.png";
import Saatvik from "../../assets/saatvik.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Projects = () => {
  const saatvikopn = () => {
    window.open("https://saatvikstudies.com/");
  };
  const edusityop = () => {
    window.open("https://eddusity.netlify.app/");
  };
  const edusitygit = () => {
    window.open("https://github.com/VivekChahar1960/Edusity-College");
  };
  const amazonop = () => {
    window.open("https://vivekchahar1960.github.io/Amazon-Clone/");
  };
  const amazongit = () => {
    window.open("https://github.com/VivekChahar1960/Amazon-Clone");
  };

  return (
    <div className="projects">
      <div className="projects_2">
        <div className="project">
          <img src={Saatvik} alt="" />
          <h1>Saatvik Studies</h1>
          <div>
            <button className="btn" onClick={saatvikopn}>
              Live Demo
            </button>
          </div>
        </div>
        <div className="project">
          <img src={Edusity} alt="" />
          <h1>Edusity</h1>
          <div className="btndiv">
            <button className="btn" onClick={edusityop}>
              Live Demo
            </button>
            <button className="btn" onClick={edusitygit}>
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="project">
        <img src={Amazon} alt="" />
        <h1>Amazon Clone</h1>
        <div className="btndiv">
          <button className="btn" onClick={amazonop}>
            Live Demo
          </button>
          <button className="btn" onClick={amazongit}>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
