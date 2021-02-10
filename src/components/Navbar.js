
import "../styles/Navbar2.css"



const Navbar = ({name, items}) => {
    return (
        
            <div className="navbar"> 
            {/* <a className="logo" href="#"><h1 >{name}</h1></a> */}
            <div className="wrapper-nav">
                <ul id="navbar-items">
                    <li><a className="logo">{name}</a></li>
                    <li><a href="#"> about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                </div>
                    
            </div>
      
    )
}

export default Navbar
