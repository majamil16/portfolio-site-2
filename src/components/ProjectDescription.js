import "../styles/ProjectDescription.css"
import { AiFillCloseCircle } from 'react-icons/ai'

/**
 * the box that pops up when you click on a project.
 * 
 * id : the id of the element clicked
 */
const ProjectDescription = ({ id, name, description, onClose}) => {
  
    return ( 
        <div className="proj-desc-box">
            <AiFillCloseCircle id="close-x" size= '30px' onClick={ onClose }/>
            <h1> {name} {id} </h1>
            <p> {description} </p>
        
        </div>
    )
}

// set default for testing
// ProjectDescription.defaultProps = {
//     name : "Lorem Project",
//     description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sapien a tellus convallis iaculis. Sed eget felis non purus pretium pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sagittis ornare gravida. Etiam mattis nisi aliquet diam vestibulum, a bibendum est faucibus. ",
//     show : false
    
    
// }


export default ProjectDescription
