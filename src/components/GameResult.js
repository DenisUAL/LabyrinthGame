import React from "react";

export default function GameResult({ win, elapsedTime }) {
  const src = win ? "/congratulation.png" : "/sad.png";
  return (
    <div className="settings-container">
      <img src={src} className="modal-img" />
      <h1>{win ? "You win!" : "Try again!"}</h1>
      <h3>{`Your time is ${elapsedTime}`}</h3>
    </div>
  );
}
