var lvl1 = [
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,4,1,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,1],
 [1,1,1,1,3,3,3,1,1,1,3,3,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,3,3,3,1,1,1,1,1],
];


function preload(){
  player_img=loadImage('images/walk0001.png');
  player_inj=loadImage('images/hurt.png');
  bg_img=loadImage('images/BG.png');
  block1_img=loadImage('images/block1.png');
  water_img=loadImage('images/water.png');
  key_img=loadImage('images/keyBlue.png');
  player_hurt_img=loadImage('images/hurt.png');
  closed_door_img=loadImage('images/door_closed.png');
  open_door_img=loadImage('images/door_open.png');
  music = loadSound('sounds/bgmusic.mp3');
  keysound=loadSound('sounds/keysound.mp3');
  enemy_img=loadImage('images/enemy.png');
}

function setup() {
  player_inj.filter(THRESHOLD);
  music.loop();
  music.setVolume(0.1);
  createCanvas(1750,600);
  lvl=new level(lvl1);
  player=new Alien();
}

function draw() {
  background(bg_img);
  lvl.draw();
  player.show();
  player.update();
}
