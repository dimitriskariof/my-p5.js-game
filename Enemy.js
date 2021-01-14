class Enemy {

  constructor(x,y,img,speed,type){
    this.x=x;
    this.y=y;
    this.img=img;
    this.size=50;
    this.speed=speed;
    this.type=type;
    this.initx=this.x;
    this.inity=this.y;
  }

  update(){
    if(this.type==2){
      this.x+=this.speed;
      if(this.initx-this.x==200 || this.initx-this.x==-200 ) this.speed=-this.speed;  //change direction after some distance
    }
  }


  draw(dx,dy){
    image(this.img,this.x-dx,this.y-dy,this.size+10,this.size-20);
    this.update();
  }

}
