import "./WorkCardStyles.css";

import React from 'react'
// eslint-disable-next-line no-unused-vars
import movies from "../assets/Projects/movies.jpg";
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
  return (
<div className="project-card">
    <img src={props.imgsrc} alt="movies"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
      <NavLink to={props.view} className="btn">Ver más</NavLink>

      <NavLink to="url.com" className="btn">GitHub</NavLink>

        </div>
    </div>
</div>

  )
}

export default WorkCard;