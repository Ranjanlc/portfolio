import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  console.log(props.liveLink);
  return (
    <div className="project-card">
      {props.liveLink !== "N/A" ? (
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-arrow-right arrow" />
          <img src={props.image} alt="" className="image" />
        </a>
      ) : (
        <span />
      )}
      {/* <i className="fa-regular fa-arrow-up-right" /> */}
      <div className="card-description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="stacks">
          {props.stacks.map((stack, id) => (
            <button className="tech-stack" key={id}>
              {stack}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
