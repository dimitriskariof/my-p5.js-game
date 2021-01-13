class Enemy {

  constructor(x,y,img,speed,type){
    this.x=x;
    this.y=y;
    this.img=img;
    this.size=50;
    this.speed=speed;

  }

  draw(dx,dy){
    image(this.img,this.x-dx,this.y-dy,this.size+10,this.size-10);
  }

}
