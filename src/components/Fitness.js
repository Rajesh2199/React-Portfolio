import React from 'react';


function Fitness() {
    return (
        <div class="container" style= {{width: "100%"}}> 
                <div className = "col s12 m7 card-panel hoverable">
                    <h2 className="header">The Fitness-Tracker Project</h2>
                    <div className="card horizontal">
                    <div className="card-image">
                    <img src="./fitness.png" alt="fitness"></img>
                    </div>
                    <div className="card-stacked">
                    <div className="card-content">
                    <p>This application allows users to track their workouts on a daily basis. I have utilized MongoDB to handle all the data inputs from the users and JavaScript and Express.js to render the data when certain routes are hit.</p>
                    <br></br>
                    <p><b>Tech Stack:</b> JavaScript, Nodejs, MongoDB, Expressjs, HTML, Heroku and CSS. </p>
                    </div>
                    <div class="card-action">
                <a href="https://github.com/Rajesh2199/Workout-Tracker" target="_blank">Github</a>
                <a href="https://fierce-badlands-34785.herokuapp.com/" target="_blank">Deployed Version</a>
                        </div>
                    </div>
                    </div>

                </div>
        </div>
    )
}

export default Fitness;