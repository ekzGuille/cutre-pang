class Player {
  constructor(imageL, imageR, posX, posY, playersize) {
    this.imgL = imageL;
    this.imgR = imageR;
    this.img = imageR; // Empezara mirando a la DCHA
    this.x = posX;
    this.y = posY;
    this.size = playersize;
    this.mov = 0;
  }

  show() {
    this.imgL.resize(this.size, 0);
    this.imgR.resize(this.size, 0);
    image(this.img, this.x, this.y);
  }

  update() {
    if (this.mov > 0 && this.x < windowWidth - this.size) {
      this.x += this.mov;
      this.img = this.imgR;
    } else if (this.mov < 0 && this.x > 0) {
      this.x += this.mov;
      this.img = this.imgL;
    }
  }

  moveme(vel) {
    this.mov = vel;
  }

  getImage() {
    return this.img;
  }
}


// https://www.youtube.com/watch?v=AaGK-fj-BAM

// https://youtu.be/uAfw-ko3kB8
