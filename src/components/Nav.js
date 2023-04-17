import React, {useState} from "react";
import "./Nav.css";
import image from './homelogo.png'
import aboutmeimg from './aboutmelogo.png';
import contactimg from './contactimg.png';
import { FaInstagramSquare, FaLinkedinIn, FaGithubSquare, FaDropbox, FaArrowDown} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
function Navbar(){
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div>
            <nav className="main-nav">
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "}>
                    <ul>
                        <li>
                            <a><Link to = '/Home' className="App"><span class="hovertext" data-hover="Home"><img src= {image} className="icons"></img></span></Link></a>
                        </li>
                        <li>
                            <a><Link to = '/ContactUs' className="App"><span class="hovertext" data-hover="Contact Me"><img src= {contactimg} className="icons"></img></span></Link></a>
                        </li>
                        <li>
                            <a><Link to = '/' className="App"><span class="hovertext" data-hover="Colour Generator"><h1 className="icons">Colour-Generator</h1></span></Link></a>
                        </li>
                        <li>
                            <a><Link to = '/Charactercount' className="App"><span class="hovertext" data-hover="Character Count"><h1 className="icons">Character-Count</h1></span></Link></a>
                        </li>
                   </ul>
                </div>
                <div className="social-media">
                  <div class="dropdown">
                    <button class="dropbtn">Social Media  <FaArrowDown /></button>
                    <div class="dropdown-content">
                        <a href="https://www.linkedin.com/in/athifa-shaik/" target="_blank"><FaLinkedinIn  className="linkedin"/></a>
                        <a href="https://www.instagram.com/sassy_queen1406/?igshid=OTJhZDVkZWE%3Dhttps://www.instagram.com/sassy_queen1406/?igshid=OTJhZDVkZWE%3D" target="_blank"><FaInstagramSquare className="instagram" /></a>
                        <a href="https://github.com/Athifa5" target="_blank"><FaGithubSquare className="facebook" /></a>
                    </div>
                  </div>
                  <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons) }> <GiHamburgerMenu />   </a>
                    </div>
                </div>
            </nav>
        </div>
    );  
}
export default Navbar;