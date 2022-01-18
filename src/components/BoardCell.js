import React from "react";

export default function BoardCell({ cellStatus, index, style, onClick }) {
  switch (cellStatus) {
    case "start":
      return (
        <div
          onClick={onClick}
          className="box start"
          style={style}
          id={index}
          index={index}
        ></div>
      );
    case "correct-finish":
      return (
        <div
          onClick={onClick}
          className="box correct-finish"
          style={style}
          id={index}
          index={index}
        ></div>
      );
    case "wrong-finish":
      return (
        <div
          onClick={onClick}
          className="box wrong-finish"
          style={style}
          id={index}
          index={index}
        ></div>
      );
    case "wrong-step":
      return (
        <div
          onClick={onClick}
          className="box wrong-step"
          style={style}
          id={index}
          index={index}
        ></div>
      );
    case "step":
      return (
        <div
          onClick={onClick}
          className="box step"
          style={style}
          id={index}
          index={index}
        ></div>
      );
    default:
      return (
        <div
          onClick={onClick}
          className="box"
          style={style}
          id={index}
          index={index}
        ></div>
      );
  }
}
