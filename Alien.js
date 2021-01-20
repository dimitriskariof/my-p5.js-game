class Alien {
  constructor() {

    this.size = 50;
    this.x = 50; // x position of alien
    this.y = 500; //y position of alien
    this.vy = 0; //change of y
    this.gravity = 0.5;
    this.lives = 3;
    this.haskey = false;
    this.won = 0;
    this.timer = 0;
  }

  update() {
    
    this.move(); //make alien move
    this.wellbeing(); //check alien's life status
    this.gotkey();
    this.victory();
  }

  move() {
    if (this.lives > 0) {

      if (this.onHead() == 1) {
        this.vy = 0;
      }

      if (keyIsDown(87)) { //w->jump
        if (this.onFeet() == 1 && !this.onHead() == 1) {

          this.vy = -10;
          this.y += this.vy;
        }
      }

      if (!this.onFeet() == 1) { //if not on land, fall

        this.vy += this.gravity;
        this.y += this.vy;
      }

      if (keyIsDown(68)) { //d->go right
        if (this.BlockType(this.size + 5, +5) != 1) {
          this.x += 2.2;
          lvl.offset += 2.2;

        }
      }
      if (keyIsDown(65)) { //a->go left
        if (this.BlockType(-5, +5) != 1) {
          this.x -= 2.2;
          lvl.offset -= 2.2;
        }
      }


    } else {
      if (this.won == 0) {
        textSize(30);
        text("Game Over", 700, 250);
        textSize(20);
        text("Press r to restart", 712, 300);
        if (keyIsDown(82)) { //reset
          this.x = 50;
          lvl.offset -= lvl.offset;
          this.lives = 3;
          this.haskey = false;
          this.keyreset();

        }
      }
    }
  }

  //key reappear
  keyreset() {
    if (this.lives > 0) lvl.obj[lvl.keyy / 50][lvl.keyx / 50] = new
    Block(lvl.keyx, lvl.keyy, key_img, 4);
  }

  BlockType(dx = 0, dy = 0) {                         //returns type of block at
    var z = this.loc(this.x + dx, this.y + dy);       //player pos +some dx,dy
    return lvl.obj[z[1]][z[0]].type;
  }

  loc(x = this.x, y = this.y) {                       //returns location on the level grid
    var location = [floor((x + lvl.offset) / 50), floor(y / 50)];
    return location;
  }

  onFeet() {                                             //check player position
                                                        //relative to other elements
    if (this.BlockType(+5, this.size) == 1              //if on top of block
      ||
      this.BlockType(this.size - 5, this.size) == 1) {
      this.y = (this.loc()[1] * 50);

      return 1;
    }

    if (this.BlockType(0, this.size) == 3               //if on water
      ||
      this.BlockType(this.size - 5, this.size) == 3) {
      this.y = (this.loc()[1] * 50);

      return 3;
    }
    return 0;
  }

  onHead() {                                        //check for block above alien's head
    if (this.BlockType(+4.5, -1) == 1 ||
      this.BlockType(this.size - 5, 0) == 1) {

      return 1;
    }
    return 0;
  }

  wellbeing() {                                     //check alien's life status
    if (this.onFeet() == 3) this.lives = 0;
    this.injury();

    if (this.injury() && this.timer == 0) {
      if(this.lives>0){this.lives--; hitsound.play();}
    }
    this.update_timer();
  }

  injury() {                                                    //check if alien touched an enemy
    for (var i = 0; i < lvl.enemies.length; i++) {
      var distance = dist(this.x + lvl.offset, this.y, lvl.enemies[i].x, lvl.enemies[i].y)
      if (distance < 40) {
        return true;
      }
    }
    return false;
  }

  update_timer() {              //injury timer. alien can't be injured again for some time
    if (this.injury()) {
      this.timer = 100;
    }
    if (this.timer > 0) {
      this.timer--;

    }
  }

  gotkey() {
    var distance = dist(this.x + lvl.offset, this.y, lvl.keyx, lvl.keyy);
    if (distance < 30) {
      if (lvl.obj[lvl.keyy / 50][lvl.keyx / 50] != 0) {
        keysound.play();
      }
      lvl.obj[lvl.keyy / 50][lvl.keyx / 50] = 0;
      this.haskey = true;

    }
  }

  victory() {
    var distance = dist(this.x + lvl.offset, this.y, lvl.doorx, lvl.doory);
    if (distance < 30 && this.haskey) {
      lvl.obj[lvl.doory / 50][lvl.doorx / 50].img = open_door_img;
      this.lives = 0;
      this.won = 1;
    }
  }

  show() {
    if (this.lives > 0) {
      if (this.timer > 0) {
        image(player_inj, this.x, this.y, 50, 50);
      } else {
        image(player_img, this.x, this.y, 50, 50);
      }

    }
    if (this.lives == 0 && this.won == 0 && this.onFeet() == 3) {
      this.y += 30;
      image(player_hurt_img, this.x, this.y, 50, 50);
    }
    if (this.lives == 0 && this.won == 0) {
      image(player_hurt_img, this.x, this.y, 50, 50);
    }
     if(this.won==1){
      image(player_img, this.x, this.y, 50, 50);
      textSize(30);
      text("VICTORY!!!", 700, 350);
      }

     for (var i = 0; i < this.lives; i++) {
       image(heart_img,730+(i*40),10,30,30)
     }
    }
}
