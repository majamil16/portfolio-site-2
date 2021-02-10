import React from 'react'
import {FaPlus} from 'react-icons/fa'
import ProjectDescription from "./ProjectDescription"
import "../styles/Project.css"

const Project = ({id, name, onShowMore}) => {
    return (
        
        <div id="project-box" className="project-box"> 
    
            <p>{name}</p>
            <div className="project-icon-circle"></div>
            <div className="plus-icon"  onClick={ () => onShowMore({id}) }> <FaPlus />  </div>
                   
        </div>
       
        )
        
}

export default Project
