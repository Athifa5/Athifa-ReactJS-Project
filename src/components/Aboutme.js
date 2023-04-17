import React from "react";
import bts from './BTS.png';
import Navbar from "./Nav";
import "./aboutme.css";
function AboutMe(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="body"><h1 className="center"> SUMMARY<br></br></h1>
            <div className="pad"><p> An <b>Enthusiastic</b> practical knowledge 
        seeker. Aimed to work in an environment 
        where both skills and knowledge reflects 
        the growth of the company and enhance 
        the knowledge as well as experience. 
        Aspiring to be a web developer who can 
        practically change the world with new 
        possibilities and an innovative thinker, 
        initiative taker, multi tasker and dedicated 
        to reach the goals.</p></div>

        <h1 className="center">INTERNSHIPS</h1>
        <p>UI Designing Intern</p>
        <p>Next Square(E-musk Pvt Ltd)  Web Design & Development</p>
        <ul>
            <li>Gained hands-on experience in developing, implementing, and maintaining internal
                web-applications.</li>
            <li>Used prototyping in Figma to understand the workflow of the applications.</li>
            <li>Developed and designed responsive websites using wireframing.</li>
            <li>Collaborated with senior developers to update the website and create new features.</li>
        </ul>
        <h1 className="center">PROJECTS</h1>
        <h2>Tree Visualizer </h2>
        <img src= {bts} className="graphimg"></img>
        <p>Domain: Web Application | Web Technologies: HTML, CSS, JavaScript,DS 
            Generated three types of trees (i.e., Binary tree, Max heap tree and BST tree) by taking 
            user input (it will show the storing of node elements in an array with their index).
            Helped the students to learn Data structures and algorithms in a practical way through 
            visualization of trees.
            o Envisioned the different data structures trees by giving the values to it.
        </p>
        </div>
        </div>
    );
}
export default AboutMe;