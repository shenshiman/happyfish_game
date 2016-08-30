//document.body.onload=game;
var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var daltaTime;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;

document.body.onload=game;
function game(){
	//console.log("aa");
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	//获取cancvas画布
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");

	can1.addEventListener("mousemove",onMouseMove,false);


	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;
}
function gameloop(){
	window.requestAnimFrame(gameloop);//类似setinterval
	//console.log("loop");
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	//console.log(deltaTime);
	if(deltaTime>40) deltaTime=40;

	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight)
	mom.draw();
	momFruitsCollision();
	baby.draw();
}
function onMouseMove(e){
	if(e.offSetX||e.layerX){
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;
		//console.log(mx);
	}
}