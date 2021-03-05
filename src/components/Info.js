import React from "react";
import "./../style/info.css";
import binaryTable from "./../images/binaryTable.jpeg";
import ASCIITable from "./../images/ASCIITable.jpg";
import HUFFMANTree from "./../images/HUFFMANTree.jpg";

const Info = (props) => {
  const BeforeCheckImage = () => {
    if (props.title === "Binary Conversion") {
      return <img src={binaryTable} alt="Binary Table" />;
    }
  };
  const AfterCheckImage = () => {
    if (props.title === "ASCII") {
      return <img src={ASCIITable} alt="ASCII Table" />;
    }
    if (props.title === "HUFFMAN Code") {
      return <img src={HUFFMANTree} alt="HUFFMAN Tree" />;
    }
  };

  return (
    <div className="info">
      <div className="container">
        <h1>{props.title}</h1>
        <p className="first">
          {BeforeCheckImage()}

          {props.description}

          {AfterCheckImage()}
        </p>
        <a href={props.quizUrl} className="quiz-button">
          <button>Take the quiz</button>
        </a>
      </div>
    </div>
  );
};

export default Info;
