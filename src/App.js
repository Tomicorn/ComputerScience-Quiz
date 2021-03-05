import React from "react";
import "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style/App.css";

// IMPORT COMPONENTS
import Home from "./components/Home";
import Nav from "./components/nav";
import Quiz from "./components/Quiz";
import Info from "./components/Info";

import {introductionToBinaryQuestions, introductionToBinaryDescription, 
binaryConversionQuestions, binaryConversionDescription, binaryAdditionQuestions, binaryAdditionDescription, ASCIIQuestions, ASCIIDescription, BitmapsQuestions, BitmapsDescription, MagnitudeQuestions, MagnitudeDescription, HUFFMANCodeQuestions, HUFFMANCodeDescription} from "./variables";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/introductionToBinary" exact render={() => (
                <Info title="Introduction To Binary" description={introductionToBinaryDescription} quizUrl="/introductionToBinary/quiz"/>
              )} />
              <Route path="/binaryConversion" exact render={() => (
                <Info title="Binary Conversion" description={binaryConversionDescription} quizUrl="/binaryConversion/quiz"/>
              )} />
               <Route path="/binaryAddition" exact render={() => (
                <Info title="Binary Addition" description={binaryAdditionDescription} quizUrl="/binaryAddition/quiz"/>
              )} />
              <Route path="/ASCII" exact render={() => (
                <Info title="ASCII" description={ASCIIDescription} quizUrl="/ASCII/quiz"/>
              )} />
              <Route path="/Bitmaps" exact render={() => (
                <Info title="Bitmaps" description={BitmapsDescription} quizUrl="/Bitmaps/quiz"/>
              )} />
              <Route path="/Magnitude" exact render={() => (
                <Info title="Magnitude" description={MagnitudeDescription} quizUrl="/Magnitude/quiz"/>
              )} />
              <Route path="/HUFFMANCode" exact render={() => (
                <Info title="HUFFMAN Code" description={HUFFMANCodeDescription} quizUrl="/HUFFMANCode/quiz"/>
              )} />

              <Route path="/introductionToBinary/quiz" exact render={() => (
                <Quiz questions={introductionToBinaryQuestions} exitUrl={"/introductionToBinary/"}/>
              )} />
              <Route path="/binaryConversion/quiz" exact render={() => (
                  <Quiz questions={binaryConversionQuestions} exitUrl={"/binaryConversion/"}/>
              )} />
              <Route path="/binaryAddition/quiz" exact render={() => (
                  <Quiz questions={binaryAdditionQuestions} exitUrl={"/binaryAddition/"}/>
              )} />
              <Route path="/ASCII/quiz" exact render={() => (
                  <Quiz questions={ASCIIQuestions} exitUrl={"/ASCII/"}/>
              )} />
              <Route path="/Bitmaps/quiz" exact render={() => (
                  <Quiz questions={BitmapsQuestions} exitUrl={"/Bitmaps/"}/>
              )} />
              <Route path="/Magnitude/quiz" exact render={() => (
                  <Quiz questions={MagnitudeQuestions} exitUrl={"/Magnitude/"}/>
              )} />
              <Route path="/HUFFMANCode/quiz" exact render={() => (
                  <Quiz questions={HUFFMANCodeQuestions} exitUrl={"/HUFFMANCode/"}/>
              )} />

            </Switch>
          </main>
      </Router>
    </div>
  );
}

export default App;
