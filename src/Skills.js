import React from "react";
import c from "./icons/c.png"
import cp  from "./icons/cp.png"
import css from "./icons/css.png"
import javsc from "./icons/javascript.png"
import re from "./icons/react.png"
import ht from "./icons/html.png"
import jav from "./icons/java.png"
import sq from "./icons/database.png"
function Skills()
{
    return(
        <div className="skills"> 
        <h2>Front-end</h2>
        <div className="fr">
            <img src={ht} alt="html"></img>
            <img src={css} alt="css"></img>
            <img src={javsc} alt="js"></img>
            <img src={re} alt="rjs"></img>
        </div>
            <h2>Programming</h2>
            <div className="fr">
            <img src={c} alt="c"></img>
            <img src={cp} alt="cp"></img>
            <img src={jav} alt="css"></img>
            </div>
            <h2>Database</h2>
            <div className="fr">
            <img src={sq} alt="sql" style={{marginLeft:'13px'}}></img>
            </div>
        </div>
    )
}
export default Skills