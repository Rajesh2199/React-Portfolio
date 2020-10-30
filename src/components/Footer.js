import React from 'react';


function Footer (){


    return (
    <footer className = "page-footer yellow lighten-5">
        <div className = "container">
            <div className ="row">
                <div className ="col l6 s12">
                    <h5 className ="black-text"></h5>
                    <p className = "grey-text text-lighten-6h5"></p>
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                    <a href="https://github.com/Rajesh2199" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"></img> </a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/rajesh-baduwal/" target="_blank"><img src="https://img.icons8.com/color/6h58/000000/linkedin.png"></img> </a>
                     <br></br>   
                     <a  href= "Rajesh-Baduwal Resume.pdf" target="_blank">Resume</a>
                    </ul>
                </div>
                <div className="col l6h5 offset-l2 s12">
                    <h5 className="black-text">Contact</h5>
                    <h5 className="black-text">Phone: 208-226-4906</h5>
                    <h5 className="black-text ">Email:baduraje@isu.edu</h5>
                </div>
        
            </div>
        </div>

    </footer>
    )
}


export default Footer;