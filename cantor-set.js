const drawHorizontalLine = (canvas, x1, y1, length) => {
  canvas.beginPath();
  canvas.moveTo(x1, y1);
  canvas.lineTo(x1 + length, y1);
  canvas.stroke();
};

const cantorSet = (canvas, x, y, length, levels) => {
  if (levels > 0) {
    drawHorizontalLine(canvas, x, y, length);
    cantorSet(canvas, x, y + 20, length / 3, levels - 1);
    cantorSet(canvas, x + 2 * length / 3, y + 20, length / 3, levels - 1);
  }
};

const c = document.getElementById("myCanvas");
const canvas = c.getContext("2d");
cantorSet(canvas, 0, 0, 300, 3);
