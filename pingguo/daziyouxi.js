'use strict'
	

function Game(){	
	this.charArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z'];	
	this.charLengh=5;
	this.Cw=window.innerWidth;
	this.cH=window.innerHeight;
	this.speed=1;		//下落值
	this.currentArr=[];	//存产生的div
	this.currentpos=[];
	this.sm=10;			//生命
	this.score=0;		//分数
	this.gq=10;			//关卡分数
	this.gk=document.querySelector('.guank');
//	this.smElement=document.querySelector('.sm');
	this.smElement=document.querySelector('.sm1');
	this.scoreElement=document.querySelector('.fs');
	this.zanting=document.querySelector('.zanting');
}
	
Game.prototype={
	start:function(){
		this.getElements(this.charLengh);
		this.drop();
		this.key();
	},
		
	
	
	
	getElements:function(length){				//多少个，哪些元素
		for(let i=0;i<length;i++){
			this.getChar();
		}
	},
	
	checkRepeat:function(text){
		return this.currentArr.some(function(value){
			return	value.innerText==text;
		})
	},
	checkPosition:function(lefts){
		return this.currentpos.some(function(value){
			return value+80>lefts&&lefts+80>value;
		})
	},
	
	
	
	getChar:function(){
		//对应的字符为this.charArr[num];
		let num=Math.floor(Math.random()*this.charArr.length);	
		//创建随机下标
		while(this.checkRepeat(this.charArr[num])){
			num=Math.floor(Math.random()*this.charArr.length);	
		}
		let ele=document.createElement('div');
		let tops=Math.random()*100+100;
		let lefts=(window.innerWidth-600)*Math.random()+300;
		while(this.checkPosition(lefts)){
			lefts=(window.innerWidth-600)*Math.random()+300;
		}
		this.currentpos.push(lefts);
		ele.style.cssText=`
		width:120px;
		height:120px;
		background-image: url('timg.png');
		background-size:100%;
		background-repeat:no-repeat;
		color:yellow;
		font-size:50px;
		text-align:center;
		line-height:130px;
		position:absolute;		
		top:${tops}px;
		left:${lefts}px;
		`
		ele.innerText=this.charArr[num];
		document.body.appendChild(ele);
		this.currentArr.push(ele);
	},
	
	
	
	drop:function(){
		let self=this;
		self.t=setInterval(function(){
			for(let i=0;i<self.currentArr.length;i++){
				let tops=self.currentArr[i].offsetTop+self.speed;
				
				self.currentArr[i].style.top=tops+'px';
				if(tops>800){             //掉落的高度
					document.body.removeChild(self.currentArr[i]);
					//第I个消失掉，也要让数组中删掉
					self.currentArr.splice(i,1);
					self.currentpos.splice(i,1);
					self.sm--;
//					self.smElement.innerText=self.sm;
					self.smElement.style.width=self.sm*10+'%';
					//重新开始
					if(self.sm==0){
						let flag=window.confirm('游戏结束，是否继续');
						if(flag){
							self.restart();
							
						}else{
							close()
						}
					}
				}
			}
			if(self.currentArr.length<self.charLengh){
				self.getChar()
			}
		},20)
		
	},
	
	
	
	key:function(){
//		let self=this;
//键盘按下
		document.body.onkeydown=function(e){
			let code=String.fromCharCode(e.keyCode)
			for(let i=0;i<this.currentArr.length;i++){
				if(code == this.currentArr[i].innerText){
					document.body.removeChild(this.currentArr[i]);
					this.currentArr.splice(i,1);
					this.currentpos.splice(i,1)
					this.score ++;
					this.scoreElement.innerText= this.score;
					//到达关卡进入下一关
					if(this.score==this.gq){
						
						alert('你好棒，进入下一关');
						this.sm+=1;
						this.gk.innerText++;
						if(this.gk.innerText>6){
							this.gk.innerText=0;
							this.restart();
						}
						this.next();
					}
				}
				
			}
			if(this.currentArr.length < this.charLengh){
				this.getChar()
			}
		}.bind(this);
		this.zanting.onclick=function(){
		alert('游戏暂停')
	}
	},	
//下一关开始
	next:function(){
		clearInterval(this.t);
		this.sm+=1;
		this.smElement.style.width=this.sm*10+'%';
		for(let i=0;i<this.currentArr.length;i++){
			document.body.removeChild(this.currentArr[i]);
		}
		this.currentArr=[];
		this.currentpos=[];
		this.charLengh++;
		this.gq+=20;
		this.start();
	},
	
	
//	重新开始开始
	restart:function(){
		clearInterval(this.t);
		for(let i=0;i<this.currentArr.length;i++){
			document.body.removeChild(this.currentArr[i]);
		}
		this.currentArr=[];
		this.currentpos=[];
		this.sm=10;
		this.score=0;
		this.scoreElement.innerText=this.score;
		this.start()
	}
	
}