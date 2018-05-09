const ROWS = 4;
const COLS = 4;
const VISITED = 1;
const UNVISITED = 0;
const BLOCKED = -1;
const DESTINATION = 2;

const isSafe = (startX, startY) => {
  return (
    startX >= 0 &&
    startY >= 0 &&
    startX < ROWS &&
    startY < COLS &&
    maze[startX][startY] !== VISITED &&
    maze[startX][startY] !== BLOCKED
  );
};

const travelMaze = (startX, startY) => {
  if (isSafe(startX, startY)) {
    //if it reaches the destination
    if (maze[startX][startY] === DESTINATION) {
      console.log(path.concat({ startX, startY }));
      return true;
    } else {
      maze[startX][startY] = VISITED;
      path.push({ startX, startY });
      //go forward
      if (travelMaze(startX + 1, startY)) {
        return true;
      }
      //go down
      if (travelMaze(startX, startY + 1)) {
        return true;
      }
      // remove the path
      path = path.slice(0, path.length - 1);
      return false;
    }
  }
  return false;
};

let path = [];

const maze = [
  [UNVISITED, BLOCKED, BLOCKED, BLOCKED],
  [UNVISITED, UNVISITED, UNVISITED, UNVISITED],
  [BLOCKED, UNVISITED, BLOCKED, BLOCKED],
  [UNVISITED, UNVISITED, UNVISITED, DESTINATION]
];

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
