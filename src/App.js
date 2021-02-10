import  About  from "./components/About"
import  Contact  from "./components/Contact"
import  Navbar from "./components/Navbar"
import Projects  from "./components/Projects"
import Resume  from "./components/Resume"
import HomeScreen from "./components/HomeScreen"
import HeroSection from "./components/HeroSection"
import ProjectDescription from "./components/ProjectDescription"

import "./App.css"

import { useState } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

function App() {

  // only one project description open at a time
  const [showProject, setShowProject ] = useState(null); // by default, no open project

  // const showProjectDescription = (project) =>{
  //   console.log("Click")
  //   return ProjectDescription(project.project_name, project.project_description) // pass in the name and description of the project passed
    
  // }

  const projects = [
    // first sublist = first row of 3
    [
      {
        id : 1, 
        project_name : "First Project",
        project_description : "Loremmmmemem"
      },
      {
        id : 2, 
        project_name : "Second Project",
        project_description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sapien a tellus convallis iaculis. Sed eget felis non purus pretium pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sagittis ornare gravida. Etiam matti"
      },
    {
        id : 3, 
        project_name : "Another Project",
        project_description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sapien a tellus convallis iaculis. Sed eget felis non purus pretium pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sagittis ornare gravida. Etiam matti"

      }
    ],
    // second row of 3
    [
      {
        id : 4, 
        project_name : "And a Fourth Project",
        project_description : "Loremmmmemem"
      },
      {
        id : 5, 
        project_name : "Fifth Project",
        project_description : "Loremmmmemem"
      },
      {
        id : 6, 
        project_name : "Project Six",
        project_description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sapien a tellus convallis iaculis. Sed eget felis non purus pretium pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sagittis ornare gravida. Etiam matti"

      }
    ]  

    // if more projects, add another [{...}] list of projects
  ]

  return (
    <div className="body">

      <Navbar id="nav" name="Maja Milinkovic"/>
        <HeroSection /> 
          <div className="wrapper">
          
              {/* <Projects projects={projects} onShowMore={ (id) =>  setShowProject(id) } /> */}
              {/* <Projects projects={projects} onShowMore= { (id) =>  { (id === {showProject} )? setShowProject(2) : setShowProject(id)} } />  */}
              <Projects projects={projects} onShowMore= { (id) =>  { (id === showProject )? setShowProject(null) : setShowProject(id)} } /> 


              {projects[0].map((project, index) => {
                    if (project.id === showProject) 
                        return <ProjectDescription id={project.id}  name={project.project_name} description={project.project_description} onClose={ () => setShowProject(null) }/>
                })}
              {projects[1].map((project, index) => {
                    if (project.id === showProject) 
                        return <ProjectDescription id={project.id}  name={project.project_name} description={project.project_description} onClose={ () => setShowProject(null) }/>
                })}

              <Resume />
              <About /> 
              <Contact />
          </div>
    </div>

  );
}

export default App;
