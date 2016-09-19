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

var mx;
var my;

var mom;
var baby;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];


var data;

var wave;

var halo;

var dust;
var dustPic=[];

document.getElementById("start").onclick=function(){
	//alert("aa");
	var aa=document.getElementById("start");
	aa.parentNode.removeChild(aa);
	//document.body.onload=game;
	game();

}


function game(){
	//console.log("aa");
	init();
	lastTime=Date.now();//现在时间
	deltaTime=0;
	gameloop();
}
function init(){
	//获取cancvas画布
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");
	//大鱼鼠标事件
	can1.addEventListener("mousemove",onMouseMove,false);

	//绘制背景
	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	//新建海葵对象并初始化
	ane=new aneObj();
	ane.init();
	//新建海葵果实对象并初始化
	fruit=new fruitObj();
	fruit.init();
	//新建鱼妈妈对象并初始化
	mom=new momObj();
	mom.init();
	//新建鱼宝宝对象并初始化
	baby=new babyObj();
	baby.init();
	//画布一半宽度，高度
	mx=canWidth*0.5;
	my=canHeight*0.5;

	//初始化小鱼尾巴8个帧数
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";
	}
	//初始化小鱼眼睛2个切换帧数，一闭一合
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
	}
	//初始化小鱼渐变心脏生命值20帧
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	//初始化大鱼尾巴
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";
	}
	//初始化大鱼眼睛一闭一合
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	}
	//初始化整个游戏data数值模块
	data=new dataObj();
	//初始化并绘制8帧大鱼身体，橙色和蓝色两种
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";

	}
	//初始化大鱼碰果实涟漪池
	wave=new waveObj();
	wave.init();
	//初始化大鱼碰小鱼涟漪池
	halo=new haloObj();
	halo.init();
	//初始化漂浮物
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
	}
	dust=new dustObj();
	dust.init();
}

//游戏动画帧
function gameloop(){
	window.requestAnimFrame(gameloop);//类似setinterval
	//console.log("loop");
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	//console.log(deltaTime);
	if(deltaTime>40) deltaTime=40;
	//绘制背景
	drawBackground();
	//绘制海葵
	ane.draw();
	//绘制果实
	fruit.draw();
	//绘制果实管理器
	fruitMonitor();
	//绘制
	fruit.draw();
	//绘制画布
	ctx1.clearRect(0,0,canWidth,canHeight);
	//鱼妈妈
	mom.draw();
	//鱼宝宝
	baby.draw();
	//鱼妈妈撞击果实
	momFruitsCollision();
	//鱼妈妈撞击宝宝
	momBabyCollision();
	//数据显示
	data.draw();
	//白涟漪
	wave.draw();
	//黄涟漪
	halo.draw();
	//海葵摆动
	dust.draw();
}
	//鼠标移动
function onMouseMove(e){
		if(!data.gameOver){
			if(e.offSetX||e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
			//console.log(mx);
		}
	}
	
}