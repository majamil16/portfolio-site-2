import React from 'react'
import Project from "./Project"
import { HashLink as HL } from 'react-router-hash-link'
import "../styles/Projects.css"
const Projects = ({projects, onShowMore }) => {  
    //onShowMore={({id}) => onShowMore(project.id)}
    return (
        // using map to repeat over all the projects
        <>
            <h1 className="heading">Projects</h1>
            <div className="row-container" id='row1'>

                {projects[0].map((project) => (
                    
                    <div key={project.id} className="project"> <Project id={project.id}  name={project.project_name} onShowMore={() => onShowMore(project.id)}/></div>
                ))}
            </div>
            <div className="row-container" id='row1'>
                {projects[1].map((project) => (
                    <div key={project.id} className="project"> <Project id={project.id}  name={project.project_name} onShowMore={() => onShowMore(project.id)}/></div>
                ))}
            </div>
        </>
    )
    
}

export default Projects
