class Burbuja {
  constructor(image, posX, posY, bubblesize, Xvel, Yvel) {
    this.img = image;
    this.x = posX;
    this.y = posY;
    this.size = bubblesize;
    this.Xvel = Xvel;
    this.Yvel = Yvel;
  }

  update() {
    this.x += this.Xvel;
    this.y += this.Yvel;
  }

  bordes() {
    if (this.x > windowWidth - this.size || this.x < 0) {
      this.Xvel *= -1;
    }
    if (this.y > windowHeight - this.size || this.y < 0) {
      this.Yvel *= -1;
    }
  }

  show() {
    this.img.resize(this.size, 0);
    image(this.img, this.x, this.y);
  }


  impacto(player) {
    if (this.x + this.size > player.x
            && this.x < player.x + player.size
            && this.y + this.size > player.y) {
      // this.Xvel *= -1;
      // this.Yvel *= -1;
      var hit = true;
    }

    if (hit) {
      this.Xvel *= -1;
      this.Yvel *= -1;
    }


    // if (this.x + this.size > player.x && this.y + this.size > player.y) {
    //     console.log("HitIzda");
    // }
    // if (this.x < player.x + player.size && this.y + this.size > player.y) {
    //     console.log("HitDcha");
    // }

    // Hacer un bubble.splice

    // https://youtu.be/cXgA1d_E-jY?t=951
  }
}
