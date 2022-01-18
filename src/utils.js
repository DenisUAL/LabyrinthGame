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

export function calculateGameTime(startTime) {
  const elapsedMS = Date.now() - startTime;
  const minutes = Math.floor(elapsedMS / 60000);
  const seconds = elapsedMS / 1000;
  const elapsedTimeString = `${minutes}:${seconds}`;
  return elapsedTimeString;
}

export function generateStartPosition(size) {
  return Math.ceil(Math.random() * Math.pow(size, 2)) - 1;
}

export function checkUserAnswer(startIndex, userAnswer, movesArr, size) {
  let correctAnswer = startIndex;
  movesArr.forEach((move) => {
    correctAnswer = makeMove(correctAnswer, size, move);
  });
  return {
    isAnswerCorrect: correctAnswer == userAnswer,
    correctAnswer,
  };
}

export function createBoardElements(size, startElem) {
  const style = { width: `${100 / size}%`, height: `${100 / size}%` };
  const boardElems = [];
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const elemProps =
      i === startElem
        ? { cellStatus: "start", key: i, style, index: i }
        : { key: i, style, index: i };

    boardElems.push(elemProps);
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

export function readScores() {
  const scores = localStorage.getItem("scores");
  return scores ? JSON.parse(scores) : [];
}

export function writeScore(win, time) {
  const scores = readScores();
  const settings = readGameSettings();
  const newRecord = { savedAt: Date.now(), win, time, ...settings };
  localStorage.setItem("scores", JSON.stringify([...scores, newRecord]));
}

export function clearScores() {
  localStorage.setItem("scores", JSON.stringify([]));
}

export function readGameSettings() {
  const settings = localStorage.getItem("gameSettings");
  return settings ? JSON.parse(settings) : { boardSize: 3, numberOfMoves: 10 };
}

export function writeGameSettings(boardSize = 3, numberOfMoves = 10) {
  const settings = { boardSize, numberOfMoves };
  localStorage.setItem("gameSettings", JSON.stringify(settings));
}
