class Alien{
  constructor(){
    this.size = 50;
    this.x = 50; // x position of alien
    this.y = 500; //y position of alien
    this.vy = 0;  //change of y
    this.gravity = 0.5;
    this.lives= 3;

  }



  update(){
    this.move();     //make alien move
    this.wellbeing();  //check alien's life status

  }

  move(){
    if(this.lives>0){

        if(this.onHead()==1) this.vy=0;

        if (keyIsDown(87)){                           //w->jump
          if(this.onFeet()==1 && !this.onHead()==1){

            this.vy=-10;
            this.y += this.vy;
          }
        }


      if(!this.onFeet()==1){                          //if not on land, fall

        this.vy += this.gravity;
        this.y+=this.vy;
      }

      if (keyIsDown(68)){                         //d->go right
        if(!this.getBlockType(this.size,0)==1){
          this.x+=3;
          lvl.offset+=3;

        }
      }
      if (keyIsDown(65)){                   //a->go left
        if(!this.getBlockType(-1,0)==1){
          this.x-=3;
          lvl.offset-=3;
        }
      }


    }else {
        textSize(30);
        text("Game Over", 700, 250);
        textSize(20);
        text("Press r to reset",712,300);
        if(keyIsDown(82)){            //reset
          this.x=50;
          lvl.offset-=lvl.offset;
          this.lives=3;
        }
      }
  }

  getBlockType(dx = 0, dy = 0) {                    //returns type of block at
    var z = this.getLoc(this.x + dx, this.y + dy);  //player pos +some dx,dy
    return lvl.obj[z[1]][z[0]].type;
  }

  getLoc(x = this.x, y = this.y) {                    //returns location on the level's grid
    var location = [floor((x + lvl.offset) / 50), floor(y / 50)];
    return location;
  }

  onFeet(){                                                 //check player position
                                                            //relative to other elements
    if (this.getBlockType(0, this.size) == 1               //if on top of block
         ||this.getBlockType(this.size-5,this.size)==1) {
       this.y = (this.getLoc()[1] * 50);

       return 1;
    }

    if (this.getBlockType(0, this.size) == 3              //if on water
    ||this.getBlockType(this.size-5,this.size)==3) {
       this.y = (this.getLoc()[1] * 50);

       return 3;
    }
    return 0;
  }

  onHead(){                                         //check what is above alien's head.
    if (this.getBlockType(0, -5) == 1
         ||this.getBlockType(this.size-1,0)==1) {
       print("einai");
       return 1;
    }
    return 0;
  }

  wellbeing(){
    if(this.onFeet()==3) this.lives=0;      //if fell on water, dead.
  }

  go(){
    this.x = this.x + 10;
  }


  show(){
    image (player_img,this.x,this.y,50,50);
  }

}
