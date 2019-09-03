export const generateGrid = gridSize => {
  const grid = Array.from(Array(gridSize), () =>
    new Array(gridSize));

  return grid;
}

export const generatePopulation = gridSize => {
  const grid = generateGrid(gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // 0 cell is dead, 1 cell is alive.
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return grid;
};