import React from "react";
import { moveArrows } from "../utils";

export default function MoveCard({ direction, index }) {
  return (
    <div className="move-card-wrapper">
      {`${index + 1})`}
      <div className="move-card">{moveArrows[direction]}</div>
    </div>
  );
}
