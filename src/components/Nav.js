import React from 'react';
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export default function Nav() {
    return <>
    <nav id="nav">
        <ul>
            <li>
               <a className="internal-links" href="#">Home</a> 
            </li>
            <li>
               <a className="internal-links" href="#">Projects</a> 
            </li>
            <li>
               <a className="internal-links" href="#">Contact</a> 
            </li>
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