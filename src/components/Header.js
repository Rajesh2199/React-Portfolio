import React from 'react';
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";



function Intro() {

    return (

        <div class="container" style= {{width: "100%"}}> 
            <div className="col s12 m8 offset-m2 l6 offset-l8">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src= "/image.jpg" style ={{width:'70%'}} alt="mypicture" className="circle responsive-img"></img>
                        </div>
                        <div className="col s10">
                            <span className="black-text center-align">
                            Hi, I am  Rajesh Baduwal a Full Stack Developer with a Military(U.S Army) and  Accounting background. Thank you for visiting my portfolio. Please take a moment to look at projects I have created. Do not hesitate to send me an email or call me if you have any questions.
                            <br></br>
                            <br></br>
                            <p> <b>Skills:</b> HTML, CSS, Bootstrap, JavaScript, APIs, Node.js, Express.js, MySQL, MVC, ORM, MongoDB, React.js, Objective Oriented Programming, basic Python (Numpy, Matplotlib, and Seaborn) and Java. </p>
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
          
export default Intro;