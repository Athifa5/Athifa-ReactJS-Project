import React from "react";
import Navbar from "./Nav";
import "./home.css";
import bg from "./image.png";
function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="bg"></div>
                <div className="centered"><h1>THIS IS ONE STOP FOR ALL YOUR NEEDS</h1></div>
            </div>
        </div>
        
    );
}
export default Home;