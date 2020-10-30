import React from 'react';


function Team() {
    return (
      <div className="container" style= {{width: "100%"}}> 
              <div className = "col s12 m7 card-panel hoverable">
                  <h2 className="header">Custom Team Generator</h2>
                  <div className="card horizontal">
                  <div className="card-image">
                  <img src="./Summary.png" alt="team"></img>
                  </div>
                  <div className="card-stacked">
                  <div className="card-content">
                  <p>This project is also coded using Node.js features as well as JavaScript's OOP concepts. This command line application will allow users to create a custom Engineering team.</p>
                  <p>Once the user enters all the team information it will be populated in a neat and tidy format in a HTML file as shown in the screenshot.</p>
                  <br></br>
                  <p> <b> Tech Stack:</b> JavaScript, Nodejs, HTML, and CSS. </p>
                  <p> <b> Note: </b>As this is a command line application, there is no deployed version available. You will need to clone the repository and run the application in your local device to check its functionality.</p>
                  </div>
                  <div className="card-action">
                <a href="https://github.com/Rajesh2199/Employee-Summary-Project" target="_blank">Github</a>
                <a href="#" target="_blank">Deployed Version (Not Available)</a>
                  </div>
                  </div>
                  </div>
              </div>
      </div>
    )
}

export default Team;