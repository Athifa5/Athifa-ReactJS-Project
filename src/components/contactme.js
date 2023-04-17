import React from "react";
import Navbar from "./Nav";
import "./contactme.css";
function Contactme(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="bg">
            <div className="content">
                <h1>Developer Details:</h1>
                <h1 className="gap1">Email ID: athifa.1201201@lpu.in</h1>
                <h1 className="gap">Mobile No: 7391468250</h1>
            </div>
            </div>
        </div>
    );
}
export default Contactme;