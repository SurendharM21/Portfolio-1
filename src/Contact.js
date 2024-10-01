import React from "react";
import "./index.css"
function Contact()
{
    const sty1={width:'69px'}
    const sty2={padding:'5px'}
    return(
        <div>
        <div className="contact">
         <form>
            <input type="text" placeholder="Enter your name"></input><br></br>
            <input type="mail" placeholder="Enter your mail"></input><br></br>
            <input type="text-area" placeholder="Enter text" id="texa"></input><br></br>
            <input type="submit" value="Submit" className="contactbut" style={{...sty1,...sty2}}></input>
            </form>     
        </div>
        </div>
    )
}
export default Contact