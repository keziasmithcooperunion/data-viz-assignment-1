// Kezia Smith
// CS-331: Data Visualization
// Assignment 1: "Off the Clock"

function setup() {
  createCanvas(700, 400);
  lastMinute = minute();
}

function draw() {
  
  background(0);

  // dominoes (left to right, in pairs of tens-ones places)

  fill(246, 242, 236);
  stroke(255);
  
  rect(50, 125, 80, 160, 5, 5);
  rect(140, 125, 80, 160, 5, 5);
  rect(265, 125, 80, 160, 5, 5);
  rect(355, 125, 80, 160, 5, 5);
  rect(480, 125, 80, 160, 5, 5);
  rect(570, 125, 80, 160, 5, 5);

  // domino shading
  fill(176, 169, 157);
  stroke(255);
  rect(125, 125, 5, 160, 0, 5, 5, 0);
  rect(215, 125, 5, 160, 0, 5, 5, 0);
  rect(340, 125, 5, 160, 0, 5, 5, 0);
  rect(430, 125, 5, 160, 0, 5, 5, 0);
  rect(555, 125, 5, 160, 0, 5, 5, 0);
  rect(645, 125, 5, 160, 0, 5, 5, 0);
  
  // ----- DOT FILL LOGIC -----

  // create conditions based on HH:MM:SS format implied by dominoes, retrieve two digits and convert to string format

  let hh = nf(hour(), 2);
  let mm = nf(minute(), 2);
  let ss = nf(second(), 2);

  // retrieve first and second digit of HH:MM:SS

  let h1 = int(hh[0]);
  let h2 = int(hh[1]); 
  let m1 = int(mm[0]);
  let m2 = int(mm[1]);
  let s1 = int(ss[0]);
  let s2 = int(ss[1]);

  // fill each dot according to time
  function fillDot(x, y, active, Digits) {
  stroke(0);
  strokeWeight(0);

  if (active >= Digits) {
    fill(0);
  } else {
    fill(246, 242, 236);
  }

  circle(x, y, 10);
}

  // not using duplication methods to have asynchronous fill for dots and placement control

  // ----- HOURS -----
  // Domino 1 Dots
  // top
  fillDot(90, 160, h1, 1);

  // bar
  stroke(0)
  strokeWeight(3)
  line(60, 200, 120, 200)
  
  // bottom
  fillDot(90, 240, h1, 2);
  
  // Domino 2 Dots
  // top
  fillDot(180, 165, h2, 1); // middle
  fillDot(162, 150, h2, 2); // nw
  fillDot(162, 180, h2, 5); // sw
  fillDot(198, 150, h2, 4); // ne
  fillDot(198, 180, h2, 3); // se

  // bar
  stroke(0)
  strokeWeight(3)
  line(150, 200, 210, 200)
  
  // bottom
  fillDot(162, 230, h2, 6); // nw
  fillDot(162, 260, h2, 8); // sw
  fillDot(198, 230, h2, 7); // ne
  fillDot(198, 260, h2, 9); // se

  // colon 1
  fill(255)
  circle(242.5, 165, 10)
  circle(242.5, 245, 10)
  
  // ----- MINUTES -----
  // Domino 3 Dots

  // top
  fillDot(305, 165, m1, 1); // middle
  fillDot(287, 150, m1, 2); // nw
  fillDot(323, 180, m1, 3); // se

  // bar
  stroke(0)
  strokeWeight(3)
  line(275, 200, 335, 200)
  
  // bottom
  fillDot(287, 230, m1, 4); // nw
  fillDot(323, 260, m1, 5); // se
  
  // Domino 4 Dots
  
  // top
  fillDot(395, 165, m2, 1); // middle
  fillDot(377, 150, m2, 2); // nw
  fillDot(377, 180, m2, 5); // sw
  fillDot(413, 150, m2, 4); // ne
  fillDot(413, 180, m2, 3); // se

  // bar
  stroke(0)
  strokeWeight(3)
  line(365, 200, 425, 200)
  
  // bottom
  
  fillDot(377, 230, m2, 6); // nw
  fillDot(377, 260, m2, 8); // sw
  fillDot(413, 230, m2, 7); // ne
  fillDot(413, 260, m2, 9); // se

  // colon 2
  circle(457.5, 165, 10)
  circle(457.5, 245, 10)
  
  // ----- SECONDS -----
  // Domino 5 Dots

  // top
  fillDot(520, 165, s1, 1); // middle
  fillDot(502, 150, s1, 2); // nw
  fillDot(538, 180, s1, 3); // se

  // bar
  stroke(0);
  strokeWeight(3);
  line(490, 200, 550, 200);
  
  // bottom
  fillDot(502, 230, s1, 4); // nw
  fillDot(538, 260, s1, 5); // se

  // Domino 6 Dots
  // top
  fillDot(610, 165, s2, 1); // middle
  fillDot(592, 150, s2, 2); // nw
  fillDot(592, 180, s2, 5); // sw
  fillDot(628, 150, s2, 4); // ne
  fillDot(628, 180, s2, 3); // se

  // bar
  stroke(0);
  strokeWeight(3);
  line(580, 200, 640, 200);
  
  // bottom
  fillDot(592, 230, s2, 6); // nw
  fillDot(592, 260, s2, 8); // sw
  fillDot(628, 230, s2, 7); // ne
  fillDot(628, 260, s2, 9); // se
  
  // Minute Log
  currentMinute = minute();
  if (currentMinute !== lastMinute) {
    console.log(minute());
  // to avoid repetition in log
    lastMinute = currentMinute;
  }
}