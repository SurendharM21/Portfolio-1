import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css"
import { BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';
import Skills from './Skills';
export default function Index()
{
  
  return(
        
  <Router>
 <div className='topnav'>
       <ul>          
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/About">About</NavLink></li>
       <li><NavLink to="/Projects">Projects</NavLink></li>    
       <li><NavLink to="/Contact">Contact</NavLink></li>        
       <li><NavLink to="/Skills">Skills</NavLink></li>               
        </ul>
        
    </div>
  <Routes>
    <Route index element={<Home></Home>}></Route>
    <Route path="About" element={<About></About>}></Route>
    <Route path="Projects" element={<Projects></Projects>}></Route>
    <Route path="Contact" element={<Contact></Contact>}></Route>
    <Route path="Skills" element={<Skills></Skills>}></Route>
    </Routes>
  </Router>
 
)
       }
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index></Index>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
