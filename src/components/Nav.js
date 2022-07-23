import React from 'react';
import {Link,  NavLink} from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export default function Nav() {
    return <>
    <nav id="nav">
        <ul>
            <NavLink to='/' className="internal-links">
                <li>Home</li>
            </NavLink>
            <NavLink to='/projects' className="internal-links">
                <li>Projects</li>
            </NavLink>
            <NavLink to='/contact' className="internal-links">
                <li>Contact</li>
            </NavLink>
                <li>
                <a href="#">Resume</a> 
                </li>
                <li>
                <a  target="_blank" href="https://github.com/AkaraTawng"><BsGithub size={35}/></a> 
                </li>
                <li>
                <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/christopher-chamberlain-023507205/"><BsLinkedin size={35}/></a> 
                </li>
        </ul>
    </nav>
    </>
}