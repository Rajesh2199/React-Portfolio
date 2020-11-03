import React from 'react';
import Image from "../images/SS.png"
import "materialize-css/dist/css/materialize.min.css"

function Burger() {
    return (
        <div className="container" style= {{width: "100%"}}> 
        <div className = "col s12 m7 card-panel hoverable">
             <h2 className="header">Eat The Burger</h2>
             <div className="card horizontal">
             <div className="card-image">
             <img src= {Image} alt="burger" ></img>
             </div>
             <div className="card-stacked">
             <div className="card-content">
             <p> This was a tough application to create as it uses MySQL databse, ORM, Express routes, herokuapp and MVC concepts. In this application a user can add a burger of their choice and click on "devour" button to eat them.</p>
             <p> On the backend, the CRUD operations / object-relational mapping are used to create resuable methods for querying the database.</p>
            <br></br>
            <p><b>Tech Stack:</b> Node.js, JavaScript, Express.js, Handlebars.js, Routes, ORMs, MySQL and MVC design pattern.</p>
             <br></br>
             </div>
            <div className="card-action">
          <a href="https://github.com/Rajesh2199/Nodejs-Handlebars-Project"target="_blank">Github</a>
          <a href="https://immense-shore-38573.herokuapp.com/" target="_blank">Deployed Version</a>
                 </div>
             </div>
             </div>

        </div>
    </div>
    )
}

export default Burger;