import React, { useState, useEffect } from "react";
import { writeGameSettings, readGameSettings } from "../utils";

export default function Settings(props) {
  const [boardSize, setBoardSize] = useState(readGameSettings().boardSize || 3);
  const [numberOfMoves, setNumberOfMoves] = useState(
    readGameSettings().numberOfMoves || 10
  );

  const changeBoardSize = (e) => {
    const value = Number.parseInt(e.target.value);
    setBoardSize(value);
  };

  const changeNumberOfMoves = (e) => {
    const value = Number.parseInt(e.target.value);
    setNumberOfMoves(value);
  };

  useEffect(() => {
    writeGameSettings(boardSize, numberOfMoves);
  }, [boardSize, numberOfMoves]);

  return (
    <div className="settings-container">
      <h1>Game settings</h1>
      <div className="row">
        <div className="col">
          <h2>{`Board size: ${boardSize} x ${boardSize}`}</h2>
          <input
            type="range"
            min={3}
            max={6}
            step={1}
            title="Board size"
            onChange={(e) => changeBoardSize(e)}
            value={boardSize}
          />
        </div>
        <div className="col">
          <h2>{`Number of moves: ${numberOfMoves}`}</h2>
          <input
            type="range"
            min={5}
            max={20}
            step={5}
            title="Number Of moves"
            onChange={(e) => changeNumberOfMoves(e)}
            value={numberOfMoves}
          />
        </div>
      </div>
    </div>
  );
}
