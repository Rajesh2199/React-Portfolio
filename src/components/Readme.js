import React from 'react';
import "materialize-css/dist/css/materialize.min.css"
import Image from "../images/Readme.png"


function Readme() {
    return (

        <div className="container" style= {{width: "100%"}}> 
                    <div className = "col s12 m7 card-panel hoverable">
                        <h2 className="header">Project Readme</h2>
                        <div className="card horizontal">
                        <div className="card-image">
                        <img src={Image} alt="readme"></img>
                        </div>
                        <div className="card-stacked">
                        <div className="card-content">
                        <p>This project is based on a heavy utilization of Node.js features. It is a  Command Line Application that allows user to create a professinal Readme.md for their Github repository.</p>
                        <p>The motivation behind creating this application was to assist the developers in saving their time that is spent creating a professional and good looking Readme.</p>
                        <br></br>
                        <p><b>Tech Stack:</b>  Node.js, JavaScript, and CSS. </p>
                        </div>
                        <div className="card-action">
                    <a href="https://github.com/Rajesh2199/Readme-Project" target="_blank">Github</a>
                    <a href="#" target="_blank">Deployed Version (Not Available)</a>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    )
}

export default Readme;