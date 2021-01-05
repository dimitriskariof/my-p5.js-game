class Block{
  
    constructor(x,y,img,type){
      this.posx=x;
      this.posy=y;
      this.img=img;
      this.type=type;
      this.size=50;
    }
  
  draw(dx,dy){
    image(this.img,this.posx-dx,this.posy-dy,this.size,this.size);
  }
}