import React, { useState, useEffect } from "react";
import { createBoardElements, checkUserAnswer } from "../utils";

export default function Board({ size, start, moves }) {
  const [boardElems, setBoardElems] = useState([]);

  useEffect(() => {
    setBoardElems(createBoardElements(size, start));
  }, [size, start]);

  return (
    <div
      className="board"
      onClick={(e) => {
        const answer = Number.parseInt(e.target.attributes.index.nodeValue);
        checkUserAnswer(start, answer, moves, size)
          ? alert("Congratulations, u win!")
          : alert("U LOOOOOSE!");
      }}
    >
      {boardElems.length && boardElems.map((elem) => elem)}
    </div>
  );
}
