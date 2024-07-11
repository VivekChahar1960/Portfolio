import React from "react";
import "./Experience.css";
import Tick from "../../assets/verified.png";

const Experience = () => {
  return (
    <div className="experience-container experience">
      <div className="about-container">
        <div className="details-container">
          <h2>Frontend Developement</h2>
          <div className="article-container">
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>TailWind CSS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>BootStrap</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>Javascript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </article>

          </div>
        </div>
        <div className="details-container">
          <h2>Backend Developement</h2>
          <div className="article-container">
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>Node js</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>Express</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>MongoDB</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={Tick} alt="" />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
