let ballX = 200;
let ballY = 150;
let ballSize = 20;

let ballSpeedX = 4;
let ballSpeedY = 3;

let paused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20,25,45);

  // Update ball position if not paused
    if (!paused) {
        ballX = ballX + ballSpeedX;
        ballY = ballY + ballSpeedY;
        
        // Check left and right boundaries
        if (ballX + ballSize >= width || ballX - ballSize <= 0) {
            ballSpeedX = -ballSpeedX;
        }

        // Check top and bottom boundaries
        if (ballY + ballSize >= height || ballY - ballSize <= 0) {
            ballSpeedY = -ballSpeedY;
        }
    }

noStroke();
fill(50, 160, 255);
circle(ballX, ballY, ballSize * 2);

fill(255);
textSize(20);
textAlign(CENTER);
text("BOUNCING BALL", width / 2, 30);

textSize(14);
text("SPACE: Pause/Resume", width / 2, height - 45);
text("W: Increase Speed", width / 2, height - 28);
text("S: Decrease Speed", width / 2, height - 12);

text("Speed X: " + ballSpeedX, width / 2, 50);
text("Speed Y: " + ballSpeedY, width / 2, 70);
}

function keyPressed() {
  if (key === " ") {
    paused = !paused;
  }

  if (key === "w" || key === "W") {
    if (ballSpeedX > 0) {
      ballSpeedX += 1;
    } else {
      ballSpeedX -= 1;
    }

    if (ballSpeedY > 0) {
      ballSpeedY += 1;
    } else {
      ballSpeedY -= 1;
    }

  } else if (key === "s" || key === "S") {
    if (ballSpeedX > 0) {
      ballSpeedX -= 1;
    } else {
      ballSpeedX += 1;
    }

    if (ballSpeedY > 0) {
      ballSpeedY -= 1;
    } else {
      ballSpeedY += 1;
    }
  }
}
