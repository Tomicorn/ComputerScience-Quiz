import React, {useState} from 'react';
import "./../style/nav.css";
const Nav = () => { 
    const [navlinksClass, setnavlinksClass] = useState("nav-links");
    const [navlinkClass, setnavlinkClass] = useState("");

    const hamClick = () => {

        if (navlinksClass === "nav-links") {
            setnavlinksClass("nav-links open");
        }
        else{
            setnavlinksClass("nav-links");
        }
        if (navlinkClass === "") {
            setnavlinkClass("fade");
        }
        else{
            setnavlinkClass("");
        }
     
    }




    return(
        
        <nav>
        <div className="hamburger" onClick={hamClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <ul className={navlinksClass}>
          <li id="navl_1" className={navlinkClass}><a href="/">Home</a></li>
          <li id="navl_2" className={navlinkClass}>
          <div className="dropdown">
            <button className="dropbtn">Learn</button>
            <div className="dropdown-content">
                <a href="/introductionToBinary">Introduction to Binary</a>
                <a href="/binaryConversion">Binary Conversion</a>
                <a href="/binaryAddition">Binary Addition</a>
                <a href="/ASCII">ASCII</a>
                <a href="/Bitmaps">Bitmaps</a>
                <a href="/Magnitude">Magnitude</a>
                <a href="/HUFFMANCode">HUFFMAN Code</a>
            </div>
            
          </div>
          </li>
        </ul>
        </nav>
        
    );

};

export default Nav;
