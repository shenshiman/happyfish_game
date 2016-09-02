var dataObj=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
/*dataObj.prototype.reset=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
}*/
dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	ctx1.shadowBlur=10;
	ctx1.save();
	ctx1.shadowColor="white";
	ctx1.fillStyle="white";
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	//ctx1.fillText("num" + this.fruitNum,w*0.5,h-50);
	//ctx1.fillText("double" + this.double,w*0.5,h-80);
	ctx1.fillText("score:" + this.score,w*0.5,h-20);
	//console.log(this.score);

	if(this.gameOver){
		this.alpha += deltaTime*0.0001;
		if(this.alpha>1)
			this.alpha=1;
		ctx1.fillStyle="rgba(255,255,255"+this.alpha+")";
		ctx1.globalAlpha=this.alpha;
		ctx1.fillText("You Are Lost !",w*0.5,h*0.5-50);
		ctx1.fillText("the baby fish is dead",w*0.5,h*0.5);
		ctx1.fillText("you final score is:"+this.score,w*0.5,h*0.5+50);
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}