import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Modal from "./components/Modal";
import MoveCard from "./components/MoveCard";
import Scores from "./components/Scores";
import Settings from "./components/Settings";
import {
  generateMoves,
  readGameSettings,
  generateStartPosition,
} from "./utils";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScores, setIsScores] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [moves, setMoves] = useState([]);
  const [bs, setBs] = useState(readGameSettings().boardSize);
  const [nom, setNom] = useState(readGameSettings().numberOfMoves);
  const [startPos, setStartPos] = useState();

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
    let movesArr = generateMoves(nom);
    let start = generateStartPosition(bs);
    setMoves(movesArr);
    setStartPos(start);
  };

  useEffect(() => {
    let { boardSize, numberOfMoves } = readGameSettings();
    setBs(boardSize);
    setNom(numberOfMoves);
  }, [isModalOpen]);

  useEffect(() => {
    if (!moves.length) {
      setMoves(generateMoves(nom));
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
          <Board size={bs} moves={moves} start={startPos} />
        </div>
        <div className="col">
          <h1>Moves:</h1>
          <div className="moves-container">
            {moves.length &&
              moves.map((move, index) => (
                <MoveCard key={index} index={index} direction={move} />
              ))}
          </div>
        </div>
      </div>
      <Modal handleClose={closeModal} show={isModalOpen}>
        {isScores ? <Scores /> : <Settings />}
      </Modal>
    </div>
  );
}

export default App;
