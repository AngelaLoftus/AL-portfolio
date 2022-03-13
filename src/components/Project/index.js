import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
              <a href= {props.link}>Link to Deployed Application</a> 
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default Project;