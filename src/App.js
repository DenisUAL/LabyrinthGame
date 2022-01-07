import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Modal from "./components/Modal";
import MoveCard from "./components/MoveCard";
import { generateMoves } from "./utils";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScores, setIsScores] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [moves, setMoves] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsScores(false);
    setIsSettings(false);
  };

  const openSettings = () => {
    openModal();
    setIsSettings(true);
  };

  const openScores = () => {
    openModal();
    setIsScores(true);
  };

  const startNewGame = () => {
    setMoves(generateMoves());
  };

  useEffect(() => {
    if (!moves.length) {
      setMoves(generateMoves());
    }
  });

  return (
    <div className="game-container">
      <div className="row">
        <div className="col">
          <button className="btn" onClick={startNewGame}>
            Start new game
          </button>
          <button className="btn" onClick={openScores}>
            Score table
          </button>
          <button className="btn" onClick={openSettings}>
            Settings
          </button>
        </div>
        <div className="col">
          <Board size={3} />
        </div>
        <div className="col">
          <h1>Moves:</h1>
          {moves.length &&
            moves.map((move, index) => (
              <MoveCard key={index} direction={move} />
            ))}
        </div>
      </div>
      <Modal handleClose={closeModal} show={isModalOpen}>
        {isScores ? <h1>Scores table</h1> : <h1>Settings modal</h1>}
      </Modal>
    </div>
  );
}

export default App;
