//1.solid 2.horizontal enemy 3.water 4.key 5.vertical enemy 6.live 7.door
var lvl1 = [
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,4,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,5,0,1,1,1,1,0,0,0,0,0,0,0,7,1],
 [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,5,1,1,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
 [1,1,1,1,3,3,3,1,1,1,3,3,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,3,3,3,1,1,1,1,1,3,3,3,3,3,3,1,3,3,3,3,1,1,1,1,1,1],
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
  hitsound=loadSound('sounds/hit.wav');
  heart_img=loadImage('images/heart.png');
}

function setup() {
  player_inj.filter(THRESHOLD);
  music.setVolume(0.1);
  if(!music.isPlaying()) music.play(;
  createCanvas(2600,600);
  lvl=new level(lvl1);
  player=new Alien();
}

function draw() {
  background(bg_img);
  lvl.draw();
  player.show();
  player.update();
}
