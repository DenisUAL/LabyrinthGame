import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import GameResult from "./components/GameResult";
import Modal from "./components/Modal";
import MoveCard from "./components/MoveCard";
import ScoreTable from "./components/ScoreTable";
import Settings from "./components/Settings";
import {
  generateMoves,
  readGameSettings,
  generateStartPosition,
} from "./utils";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalID, setModalID] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [moves, setMoves] = useState([]);
  const [bs, setBs] = useState(readGameSettings().boardSize);
  const [nom, setNom] = useState(readGameSettings().numberOfMoves);
  const [startPos, setStartPos] = useState();
  const [gameTime, setGameTime] = useState();

  const openModal = (id) => {
    setModalID(id);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalContent = (id, props) => {
    switch (id) {
      case "scores":
        return <ScoreTable {...props} />;
      case "settings":
        return <Settings {...props} />;
      case "results":
        return <GameResult {...props} />;
    }
  };

  const startNewGame = () => {
    let movesArr = generateMoves(readGameSettings().numberOfMoves);
    let start = generateStartPosition(readGameSettings().boardSize);
    setGameTime(Date.now());
    setMoves(movesArr);
    setStartPos(start);
    closeModal();
  };

  useEffect(() => {
    let { boardSize, numberOfMoves } = readGameSettings();
    setBs(boardSize);
    setNom(numberOfMoves);
  }, [isModalOpen]);

  return (
    <div className="game-container">
      <div className="row">
        <div className="col">
          <button className="btn" onClick={startNewGame}>
            {moves.length ? "Restart game" : "Start new game"}
          </button>
          <button className="btn" onClick={() => openModal("scores")}>
            Score table
          </button>
          <button className="btn" onClick={() => openModal("settings")}>
            Settings
          </button>
        </div>
        <div className="col">
          <Board
            size={bs}
            nom={nom}
            moves={moves}
            startTime={gameTime}
            start={startPos}
            openModal={openModal}
            setModalProps={setModalProps}
          />
        </div>
        <div className="col">
          <h1>Moves:</h1>
          <div className="moves-container">
            {moves.length ? (
              moves.map((move, index) => (
                <MoveCard key={index} index={index} direction={move} />
              ))
            ) : (
              <h3>Start new game to generate moves</h3>
            )}
          </div>
        </div>
      </div>
      <Modal
        handleClose={closeModal}
        openModal={openModal}
        startNewGame={startNewGame}
        show={isModalOpen}
        modalID={modalID}
      >
        {modalContent(modalID, modalProps)}
      </Modal>
    </div>
  );
}

export default App;
