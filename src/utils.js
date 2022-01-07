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
