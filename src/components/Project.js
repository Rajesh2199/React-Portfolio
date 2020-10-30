import React from "react";


function Projects (){
  return (
    <div class="container" style= {{width: "100%"}}> 
        <div className="col s12 m8 offset-m2 l6 offset-l3 card-panel hoverable">
            <h2 className="header">The Covid-19 Project</h2>
              <div className="card horizontal">
                      <div className="card-image">
                          <img src="/map.png" alt="covid"></img>
                      </div>
                        <div className="card-stacked">
                              <div className="card-content">
                                  <p> As part of this <i>group project</i>, I built a responsive map of the United States that displays Covid-19 confirmed cases by each state. You can access the map by clicking on the link "Deployed Version". </p>
                                  <br></br>
                              <p><b>Tech Stack:</b>  JavaScript, HTML, CSS, and Leaflet.js</p>
                        </div>
                      <div className="card-action">
                          <a href="https://github.com/mr-cade/covid-api" target="_blank">Github</a>
                          <a href="https://mr-cade.github.io/covid-api/map.html" target="_blank">Deployed Version</a>
                      </div>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Projects;
