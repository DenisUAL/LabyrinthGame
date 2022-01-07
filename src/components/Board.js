import React, { useState, useEffect } from "react";

export default function Board({ size = 3 }) {
  const [boardElems, setBoardElems] = useState([]);

  useEffect(() => {
    const style = { width: `${100 / size}%`, height: `${100 / size}%` };
    const tempBoardElems = [];
    for (let i = 1; i <= Math.pow(size, 2); i++) {
      tempBoardElems.push(<div className="box" style={style} key={i}></div>);

      setBoardElems(tempBoardElems);
    }
  }, [size]);

  return (
    <div className="board">
      {boardElems.length && boardElems.map((elem) => elem)}
    </div>
  );
}
