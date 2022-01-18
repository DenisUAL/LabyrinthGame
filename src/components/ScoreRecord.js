import React from "react";

export default function ScoreRecord({
  savedAt,
  win,
  time,
  boardSize,
  numberOfMoves,
  index,
}) {
  const className = win ? "table-row win" : "table-row lose";
  const gameDate = new Date(savedAt);
  return (
    <>
      <td>{index + 1}</td>
      <td>
        {gameDate.getDate() +
          "." +
          (gameDate.getMonth() + 1) +
          "." +
          gameDate.getFullYear() +
          " " +
          gameDate.getHours() +
          ":" +
          gameDate.getMinutes() +
          ":" +
          gameDate.getSeconds()}
      </td>
      <td>{time}</td>
      <td>{`${boardSize}x${boardSize}`}</td>
      <td>{numberOfMoves}</td>
    </>
  );
}
