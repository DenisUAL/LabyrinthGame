import React, { useState, useEffect } from "react";
import {
  createBoardElements,
  checkUserAnswer,
  calculateGameTime,
  writeScore,
} from "../utils";
import BoardCell from "./BoardCell";

export default function Board({
  size,
  start,
  moves,
  startTime,
  openModal,
  setModalProps,
  nom
}) {
  const [boardElems, setBoardElems] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [start]);

  const handleClick = (e) => {
    if (answered || !moves.length) return;
    setAnswered(true);
    const answer = Number.parseInt(e.target.attributes.index.nodeValue);
    const { correctAnswer, isAnswerCorrect } = checkUserAnswer(
      start,
      answer,
      moves,
      size
    );
    const elapsedTime = calculateGameTime(startTime);
    if (isAnswerCorrect) {
      setBoardElems(
        boardElems.map((elem) => {
          if (elem.index === answer) {
            return { ...elem, cellStatus: "correct-finish" };
          } else return elem;
        })
      );
      setModalProps({ win: true, elapsedTime });
      openModal("results");
      writeScore(true, elapsedTime);
    } else {
      setBoardElems(
        boardElems.map((elem) => {
          if (elem.index === answer) {
            return { ...elem, cellStatus: "wrong-step" };
          } else if (elem.index === correctAnswer) {
            return { ...elem, cellStatus: "wrong-finish" };
          } else return elem;
        })
      );
      setModalProps({ win: false, elapsedTime });
      openModal("results");
      writeScore(false, elapsedTime);
    }
  };

  useEffect(() => {
    setBoardElems(createBoardElements(size, start));
  }, [size, start, nom]);

  return (
    <div className="board">
      {boardElems.length &&
        boardElems.map((elem) => {
          return <BoardCell onClick={handleClick} {...elem} />;
        })}
    </div>
  );
}
