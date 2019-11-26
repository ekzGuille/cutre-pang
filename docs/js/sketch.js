let imgBurbuja;
let imgLPlayer;
let imgRPlayer;
let fondo;

let burbuja;
let player;

const playersize = 100;
const bubblesize = 150;

function preload() {
  fondo = loadImage('./../images/fondo.png');
  imgLPlayer = loadImage('./../images/pixelL.png');
  imgRPlayer = loadImage('./../images/pixelR.png');
  imgBurbuja = loadImage('./../images/burbuja.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(imgLPlayer, imgRPlayer, windowWidth / 2 - (playersize / 2), windowHeight - (playersize + 20), playersize);

  burbuja = new Burbuja(imgBurbuja, windowWidth / 4 - (bubblesize / 2), windowHeight / 5 - (bubblesize / 2), bubblesize, 10, 10);
}

function draw() {
  background(fondo, [0]);

  burbuja.update();
  burbuja.show();
  burbuja.impacto(player);
  burbuja.bordes();


  player.show();
  player.update();
}

function keyReleased() {
  player.moveme(0);
}

function keyPressed() {
  if (keyCode === 65) {
    player.moveme(-10);
  } else if (keyCode === 68) {
    player.moveme(+10);
  }
}

// https://www.youtube.com/watch?v=FVYGyaxG4To

// https://www.youtube.com/watch?v=JrRO3OnWs5s&t=468s
