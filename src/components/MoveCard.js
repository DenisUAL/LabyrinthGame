import React from "react";
import { moveArrows } from "../utils";

export default function MoveCard({ direction }) {
  return <div className="move-card">{moveArrows[direction]}</div>;
}
