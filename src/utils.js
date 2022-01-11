export const moveArrows = {
  right: "⮞",
  left: "⮜",
  up: "⮝",
  down: "⮟",
};

export const moves = ["right", "left", "up", "down"];

export function generateMoves(numberOfMoves = 10) {
  const arr = [];
  for (let i = 0; i < numberOfMoves; i++) {
    arr.push(moves[Math.round(Math.random() * 3)]);
  }
  return arr;
}

export function generateStartPosition(size) {
  return Math.ceil(Math.random() * Math.pow(size, 2)) - 1;
}

export function checkUserAnswer(startIndex, userAnswer, movesArr, size) {
  let correctAnswer = startIndex;
  movesArr.forEach((move) => {
    correctAnswer = makeMove(correctAnswer, size, move);
  });
  return correctAnswer == userAnswer;
}

export function createBoardElements(size, startElem) {
  const style = { width: `${100 / size}%`, height: `${100 / size}%` };
  const boardElems = [];
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let element =
      i === startElem ? (
        <div className="box start" style={style} index={i} key={i + 1}></div>
      ) : (
        <div className="box" style={style} index={i} key={i + 1}></div>
      );
    boardElems.push(element);
  }
  return boardElems;
}

export function makeMove(startIndex, boardSize, move) {
  switch (move) {
    case "right":
      if ((startIndex + 1) % boardSize === 0) {
        return startIndex - boardSize + 1;
      }
      return startIndex + 1;
    case "left":
      if ((startIndex + boardSize) % boardSize === 0) {
        return startIndex + boardSize - 1;
      }
      return startIndex - 1;
    case "up":
      if (startIndex + 1 <= boardSize) {
        return startIndex + 1 + Math.pow(boardSize, 2) - boardSize - 1;
      }
      return startIndex - boardSize;
    case "down":
      if (startIndex + 1 >= Math.pow(boardSize, 2) - boardSize) {
        return startIndex - Math.pow(boardSize, 2) + boardSize;
      }
      return startIndex + boardSize;
  }
}

export function readGameSettings() {
  const settings = localStorage.getItem("gameSettings");
  return settings ? JSON.parse(settings) : { boardSize: 3, numberOfMoves: 10 };
}

export function writeGameSettings(boardSize = 3, numberOfMoves = 10) {
  const settings = { boardSize, numberOfMoves };
  localStorage.setItem("gameSettings", JSON.stringify(settings));
}
