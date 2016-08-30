//判断大鱼果实距离
function momFruitsCollision(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
				var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l<900){
					fruit.dead(i);
				}
		}
	}
}

//mom baby collision

function momBabyCollision(){
	var l=calLength2(mom.x,mom.y,baby.x,baby.y)
	if(l<900){
		//baby recover
		baby.babyBodyCount=0;
	}
}