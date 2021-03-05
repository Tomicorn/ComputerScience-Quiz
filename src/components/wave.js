import React from "react";
import "react-router-dom";
import Wave from "react-wavify";
import "../style/wave.css";

function WaveBG() {
  return (

    <Wave
      fill="url(#gradient"
      className="wave"
      paused={false}
      options={{
        height: 75,
        amplitude: 40,
        speed: 0.3,
        points: 3,
      }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#fa709a" />
          <stop offset="90%" stopColor="#fee140" />
        </linearGradient>
      </defs>
    </Wave>
  );
}

export default WaveBG;
