import React, { useState, useEffect } from "react";
import { readScores } from "../utils";
import ScoreRecord from "./ScoreRecord";

export default function ScoreTable(props) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    !scores.length && setScores(readScores());
  }, []);

  return scores.length ? (
      <table className="scores-container">
      <thead>
        <tr>
          <th colSpan={5}>Scores table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#</td>
          <td>Game date</td>
          <td>Time</td>
          <td>Board size</td>
          <td>Number of moves</td>
        </tr>
        {scores.map((score, i) => {
          const className = score.win ? "table-row win" : "table-row lose";
          return (
            <tr key={score.savedAt} className={className}>
              <ScoreRecord {...score} index={i} />
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <div className="scores-container">
      <h1>No games played yet</h1>
    </div>
  );
}
