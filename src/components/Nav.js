import React from 'react';
import {Link,  NavLink} from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export default function Nav() {
    return <>
    <nav id="nav">
        <ul>
            <NavLink>
                <li>
                <a className="internal-links" href="#">Home</a> 
                </li>
            </NavLink>
            <NavLink>
                <li>
                <a className="internal-links" href="#">Projects</a> 
                </li>
            </NavLink>
            <NavLink>
                <li>
                <a className="internal-links" href="#">Contact</a> 
                </li>
            </NavLink>
                <li>
                <a  className="internal-links" href="#">Resume</a> 
                </li>
                <li>
                <a href="#"><BsGithub size={35}/></a> 
                </li>
                <li>
                <a id="linkedin" href="#"><BsLinkedin size={35}/></a> 
                </li>
        </ul>
    </nav>
    </>
}