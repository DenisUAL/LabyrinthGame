import React from "react";
import { readScores } from "../utils";

export default function Modal({
  handleClose,
  show,
  children,
  openModal,
  startNewGame,
  modalID,
}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div id="modal" className={showHideClassName}>
      <div className="modal-main">
        {children}
        <i className="modal-btn" onClick={handleClose} />
        <div className="modal-btn-container">
          <button className="btn" onClick={startNewGame}>
            {readScores().length ? "Try again" : "Start new game"}
          </button>
          {modalID != "scores" && (
            <button className="btn" onClick={() => openModal("scores")}>
              Score table
            </button>
          )}
          {modalID != "settings" && (
            <button className="btn" onClick={() => openModal("settings")}>
              Settings
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
