window.onload=function(){
	//头部开始
	let gouwuche=document.getElementsByClassName("top_1right");
	let gouwub=document.getElementsByClassName("gouwu_b");
	gouwuche[0].onmouseover=function(){
		gouwuche[0].style.background="#ffffff"
		gouwub[0].style.height="100px"
		gouwub[0].style.background="#fff"
	}
	gouwuche[0].onmouseout=function(){
		gouwuche[0].style.background="#fff"
		gouwuche[0].style.color="#b0b0b0"
		gouwub[0].style.height="0";	
	}
	let nav1=document.getElementsByClassName("nav_1")
	let navli=document.getElementsByClassName("nav_1a");
	let xiala1=document.getElementsByClassName("xiala1");
	let xiali=document.getElementsByClassName("xiala1a");
	nav1[0].onmouseover=function(){
		xiala1[0].style.height="229px"
	}
	nav1[0].onmouseout=function(){
		xiala1[0].style.height="0px";
	}
	xiala1[0].onmouseover=function(){
		xiala1[0].style.height="229px"
	}
	xiala1[0].onmouseout=function(){
		xiala1[0].style.height="0px";
	}
	//头部结束	
	//轮播图开始
	let lunbo=document.querySelector("#lunbo");
	let ban=document.querySelector("#lunbo .ban");
	let lis=document.querySelectorAll("#lunbo .ban>li")
	let wheel=document.getElementsByClassName('wheel')[0];
	let luns=document.querySelectorAll('.wheel>li');
    let left=document.querySelector('.left');
	//let right=document.querySelector('.right');
	let right=document.getElementsByClassName('right')[0];
	let imgWidth=parseInt(getComputedStyle(lunbo,null).width)
	let current=0,next=0;
	let t=setInterval(move,2000);
	let flag=true;
	
	
	//左右箭头
        left.onclick=function(){
            if(!flag){
                return;
            }          
                flag=false;
                moveDown();
        	 clearInterval(t);
        }
        right.onclick=function(){
            //开关思想
            if(!flag){
               return; 
            }      
                move();
                flag=false;
               clearInterval(t);
        }
		//鼠标移入移出效果
        lunbo.onmouseenter=function(){
            clearInterval(t);
        }
        lunbo.onmouseleave=function(){
            t=setInterval(move,2000);
        }
	//轮播点点击效果
    luns.forEach(function(value,index){
        value.onclick=function(){
            if(current==index){
                return;
            }
            luns[current].className='';
            luns[index].className='wheel1';
            if(index>current){
                lis[index].style.left=imgWidth+'px';
                animate(lis[current],{left:-imgWidth});
                animate(lis[index],{left:0});
            }else if(index<current){
                lis[index].style.left=-imgWidth+'px';
                animate(lis[current],{left:imgWidth});
                animate(lis[index],{left:0});
            }
            current=next=index;
        }
    })


	//轮播图左右自动效果
	for(let i=0;i<lis.length;i++){
		if(i==0){
			continue;
		}
		lis[i].style.left=imgWidth+'px';
	}
	function move(){
		next++;
		if(next==lis.length){
			next=0;
		}
		lis[next].style.left=imgWidth+'px';
        luns[current].className='';
        luns[next].className='wheel1';
		animate(lis[current],{left:-imgWidth});
		animate(lis[next],{left:0},function(){//回调函数只有在animate运行结束之后才能运行
            flag=true;
        });
		current=next;
	}
	function moveDown(){
		next--;
		if(next<0){
			next=lis.length-1;
		}
		lis[next].style.left=-imgWidth+'px';
        luns[current].className='';
        luns[next].className='wheel1';
		animate(lis[current],{left:imgWidth});
		animate(lis[next],{left:0},function(){
            flag=true;
        });
		current=next;
	}
			
			
	
		

	//轮播图
	let bannerleft=document.getElementsByClassName("bannerleft_a");
	let bannerright=document.getElementsByClassName("bannerright");
	for(let i=0;i<bannerleft.length;i++){
		bannerleft[i].onmouseover=function(){
			bannerright[i].style.display="block";
		}
		bannerleft[i].onmouseout=function(){
			bannerright[i].style.display="none";
		}
	}
	
	
	//明星单品
	let right2 = document.getElementsByClassName("iconfont arrow_square_right");
	let left2 = document.getElementsByClassName("iconfont arrow_square_left");
	let star2 = document.getElementsByClassName("star2");
	let star3 = document.getElementsByClassName("star3"); 
			
	left2[0].onclick=function(){
		star2[0].style.transform="translateX(-1226px)"
		star3[0].style.transform="translateX(-1226px)"
	}
	right2[0].onclick=function(){
		star2[0].style.transform="translateX(0px)"
		star3[0].style.transform="translateX(0px)"
	}		
			
			
			
			
			
			
			
			
	//搭配开始
	let youshang=document.getElementsByClassName("youshang");
	let youxia=document.getElementsByClassName("youbian");
	
	youxia[0].style.display="block";
	youshang[0].onmouseover=function(){
		youxia[0].style.display="block";
		youxia[1].style.display="none";
		youxia[2].style.display="none";
		youxia[3].style.display="none";
	}
	youshang[1].onmouseover=function(){
		youxia[1].style.display="block";
		youxia[0].style.display="none";
		youxia[2].style.display="none";
		youxia[3].style.display="none";
	}
	youshang[2].onmouseover=function(){
		youxia[2].style.display="block";
		youxia[1].style.display="none";
		youxia[0].style.display="none";
		youxia[3].style.display="none";
	}
	youshang[3].onmouseover=function(){
		youxia[3].style.display="block";
		youxia[1].style.display="none";
		youxia[2].style.display="none";
		youxia[0].style.display="none";
	}
	
	
	//配件1
	let youshang1=document.getElementsByClassName("youshang1");
	let youxia1=document.getElementsByClassName("youbian1");
	
	youxia1[0].style.display="block";
	youshang1[0].onmouseover=function(){
		youxia1[0].style.display="block";
		youxia1[1].style.display="none";
		youxia1[2].style.display="none";
		youxia1[3].style.display="none";
	}
	youshang1[1].onmouseover=function(){
		youxia1[1].style.display="block";
		youxia1[0].style.display="none";
		youxia1[2].style.display="none";
		youxia1[3].style.display="none";
	}
	youshang1[2].onmouseover=function(){
		youxia1[2].style.display="block";
		youxia1[1].style.display="none";
		youxia1[0].style.display="none";
		youxia1[3].style.display="none";
	}
	youshang1[3].onmouseover=function(){
		youxia1[3].style.display="block";
		youxia1[1].style.display="none";
		youxia1[2].style.display="none";
		youxia1[0].style.display="none";
	}
	
	
	//周边2
	let youshang2=document.getElementsByClassName("youshang2");
	let youxia2=document.getElementsByClassName("youbian2");
	
	youxia2[0].style.display="block";
	youshang2[0].onmouseover=function(){
		youxia2[0].style.display="block";
		youxia2[1].style.display="none";
		youxia2[2].style.display="none";
		youxia2[3].style.display="none";
	}
	youshang2[1].onmouseover=function(){
		youxia2[1].style.display="block";
		youxia2[0].style.display="none";
		youxia2[2].style.display="none";
		youxia2[3].style.display="none";
	}
	youshang2[2].onmouseover=function(){
		youxia2[2].style.display="block";
		youxia2[1].style.display="none";
		youxia2[0].style.display="none";
		youxia2[3].style.display="none";
	}
	youshang2[3].onmouseover=function(){
		youxia2[3].style.display="block";
		youxia2[1].style.display="none";
		youxia2[2].style.display="none";
		youxia2[0].style.display="none";
	}
	
	let right3 = document.getElementsByClassName("right3");
	let left3 = document.getElementsByClassName("left3");
	let tuijiana = document.getElementsByClassName("tuijiana");
	let tuijianaa = document.getElementsByClassName("tuijianaa");
	left3[0].onclick=function(){
		tuijianaa[0].style.transform="translateX(0)";
		tuijiana[0].style.transform="translateX(0)";
	}
	right3[0].onclick=function(){
		tuijianaa[0].style.transform="translateX(-1226px)";
		tuijiana[0].style.transform="translateX(-1226px)";
	}
	
	let nei1 = document.getElementsByClassName("nei1");
	let neidian = document.getElementsByClassName("neidian");
	let neili = neidian[0].getElementsByTagName("li");
	
	nei1[0].style.display="block";
	neili[0].onclick=function(){
		neili[0].className="hot";
		neili[1].className="";
		neili[2].className="";
		nei1[0].style.display="block";
		nei1[1].style.display="none";
		nei1[2].style.display="none";
	}
	neili[1].onclick=function(){
		neili[0].className="";
		neili[1].className="hot";
		neili[2].className="";
		nei1[0].style.display="none";
		nei1[1].style.display="block";
		nei1[2].style.display="none";
	}
	neili[2].onclick=function(){
		neili[0].className="";
		neili[1].className="";
		neili[2].className="hot";
		nei1[0].style.display="none";
		nei1[1].style.display="none";
		nei1[2].style.display="block";
	}
	
	
	
	
}
