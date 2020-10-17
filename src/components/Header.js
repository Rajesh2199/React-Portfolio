import React from 'react';

import "materialize-css/dist/css/materialize.min.css";



function Intro() {

    return (

            
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                <div className="col s2">
                    <img src= "/image.jpg" alt="mypicture" className="circle responsive-img"></img>
                </div>
                <div className="col s10">
                    <span className="black-text center-align">
                    Hi, I am  Rajesh Baduwal a Full Stack Developer with a Military(U.S Army) and  Accounting background. Thank you for visiting my portfolio. Please take a moment to look at projects I have created. Do not hesitate to send me an email or call me if you have any questions.
                    <br></br>
                    <br></br>
                    <p> <b>Skills:</b> HTML, CSS, Bootstrap, JavaScript, APIs, Node.js, Express.js, MySQL, MVC, ORM, MongoDB, Objective Oriented Programming, basic Python (Numpy, Matplotlib, Seaborn) and Java. </p>
                    </span>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
          
export default Intro;