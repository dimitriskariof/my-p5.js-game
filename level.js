class level{
  constructor(objects) {

    this.obj = objects;
    this.offset = 0;
    this.enemies = [];

    for(var i=0; i<this.obj.length;i++){
      for(var j=0; j<this.obj[i].length;j++){
        if(this.obj[i][j]==1) this.obj[i][j]=new Block(j*50,i*50,block1_img,1);
        if(this.obj[i][j]==3) this.obj[i][j]=new Block(j*50,i*50,water_img,3);
        if(this.obj[i][j]==4){ this.obj[i][j]=new Block(j*50,i*50,key_img,4);
                               this.keyx=this.obj[i][j].posx;
                               this.keyy=this.obj[i][j].posy
                             }
        if(this.obj[i][j]==7){ this.obj[i][j]=new Block(j*50,i*50,closed_door_img,7);
                               this.doorx=this.obj[i][j].posx;
                               this.doory=this.obj[i][j].posy
                             }
        if(this.obj[i][j]==2){ this.obj[i][j]=new Enemy(j*50,i*50,enemy_img,5,2);
                               this.enemies.push(this.obj[i][j]);
                            }
      }
    }

  }

  draw() {
    for (var i = 0; i < this.obj.length; i++) {
      for (var j = 0; j < this.obj[i].length; j++) {
        if (this.obj[i][j] != 0) {
          if (this.obj[i][j].constructor.name=="Block") {
            this.obj[i][j].draw(this.offset, 0);

          }
          if (this.obj[i][j].constructor.name=="Enemy") {
            this.obj[i][j].draw(this.offset, 0);

          }
         }
       }
     }

  }
}
