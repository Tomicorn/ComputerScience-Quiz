import React from "react";
import "react-router-dom";
import "./../style/Home.css";

// IMPORT COMPONENTS
import WaveBG from "./wave";

function Home() {
  return (
    <div className="Home">
      <WaveBG />
      <div className="main">
        <h1>Home</h1>
        <p>Hello, I am Tom Williamson. This is my Assesment Preperation HomeWork. I coded it myself from scratch using react, if you are interested in the code here is a link to my github repo:<a href="https://github.com/JoBite1235/COMP-Quiz-DataRepresentation" className="repo-link">Here</a></p> 

      </div>
    </div>
  );
}

export default Home;
