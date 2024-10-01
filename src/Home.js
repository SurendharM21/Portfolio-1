import React from "react";
import "./index.css"
import images from "./devimg.png"
function Home()
{
    return(
        
        <div className="home1">
        <div className="home"> 
       <h3>I'm Surendhar</h3>
       <i>A budding professional with competent knowledge and skills in software engineering and looking 
for responsible position in a reputable organization. 
</i>
        </div>
        <div className="icons">
        <img src={images} alt="Hello"></img>
        </div>
        </div>
        
        )
}
export default Home