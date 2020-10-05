const $canvas = document.querySelector('.paint-sheet');
const snowman = $canvas.getContext('2d');

// draw the head and body (white bg)
function circle(y, radius) {
  const x = $canvas.width / 2;
  const sA = 0;
  const eA = 2 * Math.PI;

  snowman.beginPath();
  snowman.arc(x, y, radius, sA, eA);
  snowman.lineWidth = 3;
  snowman.fillStyle = 'white';
  snowman.fill();
  snowman.stroke();
}

// draw the head
circle(100, 100);

// draw the head
circle(350, 150);

// draw the dots
function dots(x, y) {
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  snowman.beginPath();
  snowman.arc(x, y, radius, sA, eA);
  snowman.fillStyle = 'black';
  snowman.fill();
  snowman.stroke();
}

// draw the eyes
dots(200, 100);
dots(300, 100);

// draw the buttons
dots(250, 400);
dots(250, 300);
dots(250, 350);

// draw the nose
snowman.beginPath();
snowman.arc(250, 150, 10, 0, 2 * Math.PI);
snowman.lineWidth = 0;
snowman.fillStyle = 'coral';
snowman.fill();
snowman.stroke();
