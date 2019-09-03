export const generateGrid = gridSize => {
  const grid = Array.from(Array(gridSize), () =>
    new Array(gridSize));

  return grid;
}

export const generatePopulation = (gridSize, oldPopulation = null) => {
  const grid = generateGrid(gridSize);
  const oldPopulationWidth = (oldPopulation && oldPopulation.length) || 0;
  const oldPopulationHeight = (oldPopulation && oldPopulation[0].length) || 0;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Eiter populate a random value or get it from the old population.
      if (oldPopulation && i < oldPopulationWidth && j < oldPopulationHeight) {
        grid[i][j] = oldPopulation[i][j];
      } else {
        grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }
  return grid;
};

const getNumAliveNeighbors = (grid, x, y) => {
  const maxWidth = grid.length - 1;
  const maxHeight = grid[0].length - 1;
  let numAliveNeighbors = 0;
  for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, maxWidth); i++) {
    for (let j = Math.max(0, y - 1); j <= Math.min(y + 1, maxHeight); j++) {
      numAliveNeighbors += grid[i][j];
    }
  }
  return numAliveNeighbors - grid[x][y];
};

export const updatePopulation = (oldPopulation) => {
  const newPopulation = [...oldPopulation];
  for (let i = 0; i < newPopulation.length; i++) {
    for (let j = 0; j < newPopulation[0].length; j++) {
      const numAliveNeighbors = getNumAliveNeighbors(oldPopulation, i, j);
      if (oldPopulation[i][j]) {
        if (numAliveNeighbors <= 1) {
          newPopulation[i][j] = 0;
        } else if (numAliveNeighbors >= 4) {
          newPopulation[i][j] = 0;
        } else {
          newPopulation[i][j] = 1;
        }
      } else {
        if (numAliveNeighbors === 3) {
          newPopulation[i][j] = 1;
        }
      }
    }
  }
  return newPopulation;
};