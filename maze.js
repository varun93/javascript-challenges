const VISITED = 1;
const UNVISITED = 0;
const BLOCKED = -1;
const DESTINATION = 2;

const isSafe = (startX, startY) => {
  return (
    startX >= 0 &&
    startY >= 0 &&
    startX < maze.length &&
    startY < maze[startX].length &&
    maze[startX][startY] !== VISITED &&
    maze[startX][startY] !== BLOCKED
  );
};

const visitCell = (startX, startY) => {
  maze[startX][startY] = VISITED;
  path.push({ startX, startY });
};

const travelMaze = (startX, startY) => {
  console.log(startX, startY);

  if (isSafe(startX, startY)) {
    //if it reaches the destination
    if (maze[startX][startY] === DESTINATION) {
      path.push({ startX, startY });
      console.log(path);
      return true;
    } else {
      // visit the cell
      visitCell(startX, startY);

      //go front
      if (travelMaze(startX, startY + 1)) {
        return true;
      }

      //go back
      if (travelMaze(startX, startY - 1)) {
        return true;
      }

      //go up
      if (travelMaze(startX - 1, startY)) {
        return true;
      }

      //go down
      if (travelMaze(startX + 1, startY)) {
        return true;
      }

      // remove the path
      path.pop();
      return false;
    }
  }
  return false;
};

let path = [];

//solution possible if the rat can move just in a couple of directions
const maze = [
  [UNVISITED, BLOCKED, BLOCKED, BLOCKED],
  [UNVISITED, UNVISITED, UNVISITED, UNVISITED],
  [BLOCKED, UNVISITED, BLOCKED, BLOCKED],
  [UNVISITED, UNVISITED, UNVISITED, DESTINATION]
];

// solution possible only if it moves in all directions
// const maze = [
//   [UNVISITED, BLOCKED, UNVISITED, UNVISITED, UNVISITED],
//   [UNVISITED, UNVISITED, UNVISITED, BLOCKED, UNVISITED],
//   [UNVISITED, BLOCKED, BLOCKED, UNVISITED, UNVISITED],
//   [UNVISITED, BLOCKED, BLOCKED, UNVISITED, BLOCKED],
//   [UNVISITED, BLOCKED, BLOCKED, UNVISITED, DESTINATION]
// ];

// const maze = [
//   [BLOCKED, UNVISITED, UNVISITED, UNVISITED, BLOCKED, UNVISITED],
//   [UNVISITED, BLOCKED, UNVISITED, UNVISITED, BLOCKED, UNVISITED],
//   [UNVISITED, BLOCKED, UNVISITED, BLOCKED, UNVISITED, UNVISITED],
//   [UNVISITED, BLOCKED, UNVISITED, UNVISITED, BLOCKED, BLOCKED],
//   [UNVISITED, UNVISITED, UNVISITED, UNVISITED, BLOCKED, UNVISITED],
//   [UNVISITED, BLOCKED, UNVISITED, UNVISITED, UNVISITED, DESTINATION]
// ];
// console.log(maze);
travelMaze(0, 0);
// console.log(maze);
// path.concat and path.slice clones creates a new copy of the array
// path.pop and path.push mutates the array so modifies the array; there is always one copy of the array available
// string works because string by default is immutable by nature
// return always returns to the caller
