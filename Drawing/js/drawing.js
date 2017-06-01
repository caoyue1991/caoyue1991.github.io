window.onload=function(){
	let wenjian=document.getElementsByClassName("wenjian")[0];
	let wenjiana=document.getElementsByClassName("wenjiana")[0]
	let wenli=document.getElementsByClassName("wenli");
	let img=document.querySelector("img")
	let index=0;
	 let mask=document.querySelector(".mask")
	wenjian.onmouseover=function(){
		wenjian.style.background="#984116"
		wenjiana.style.height="385px";	
		wenjian.style.color="#fff";
	}
	wenjian.onmouseout=function(){
		wenjiana.style.height="0";	
		wenjian.style.background="#EDA82D"
		wenjian.style.color="#000";
	}
	
	let zhuye=document.getElementsByClassName("zhuye")[0];
	let zhuyea=document.getElementsByClassName("zhuyea")[0];
	let chakan=document.getElementsByClassName("chakan")[0];
	let chakana=document.getElementsByClassName("chakana")[0];
	zhuye.onclick=function(){
		zhuye.style.background="#984116";
		chakan.style.background="#EDA82D";
		zhuyea.style.display="block";
		chakana.style.display="none";
	}
	
	chakan.onclick=function(){
		zhuye.style.background="#EDA82D";
		chakan.style.background="#984116";
		zhuyea.style.display="none";
		chakana.style.display="block";
	}
	
	let canvas=document.querySelector("canvas")
	let ctx=canvas.getContext("2d");
	let color;
	let colorchoose = document.querySelector('input[type=color]');

	let palette = new Palette(canvas,ctx,{color:color},mask);
	colorchoose.onchange=function(){    //颜色设置
        color=this.value;
        console.log(color);
        palette.ctx.color=color;
        console.log(palette.ctx.color);
    };
	
	//铅笔开始
	let qianbi=document.querySelector('.qianbi');
	let arr=[];
	qianbi.onclick=function(){         //画笔
        palette.huabi();
    };
	//铅笔结束
	
	
	//橡皮开始
//	let xiangpi=document.querySelector('.xiangpi');
//	let eraser1=document.querySelector('.eraser');
//	xiangpi.onclick=function(){             //   橡皮擦
//      palette.ca(eraser1);
//  };
	
	let xiangpi=$(".xiangpi")[0];
    let eraser=$(".eraser")[0];
   
    xiangpi.onclick=function(){
        palette.eraserclear(eraser);
    }
	
	//直线开始
	let zhixian1=document.querySelector('.zhixian');
	zhixian1.onclick=function(){        //直线
        palette.zhixian();
    };
	//直线结束
	
	//虚线
	let xuxian=document.querySelector('.xuxian');
	xuxian.onclick=function(){        //直线
        palette.xuxian();
    };
    //虚线结束
    
    //矩形
    let juxing1=document.querySelector('.juxing');
    juxing1.onclick=function(){         //矩形
        palette.juxing();
    };
	//矩形结束
	
	//圆角矩形
	let yuanjiao1 = document.querySelector('.yuanjiaojuxing');   //圆角矩形
	yuanjiao1.onclick=function(){        //圆角矩形
        palette.yuanjiao();
    };
	//圆角矩形结束
	
	//圆开始
	let yuan=document.querySelector('.yuan');
	yuan.onclick=function(){        //圆
        palette.yuanxing();
    };
    //圆结束
    
    //多边形
    let duobianxing=document.querySelector('.wubianxing');
    duobianxing.onclick=function(){    //多边形
        let n = prompt('请输入边数','10');
        palette.duobianxing(Number(n));
    };
    //多边形结束
    
    //多角星开始
    let duojiaoxing1 = document.querySelector('.wujiaoxing');   //多角形
    duojiaoxing1.onclick=function(){        //多角形
        let n = prompt('请输入角数','5');
        palette.duojiaoxing(n*2);
    };
    //多角形结束
    
    //保存
    let baocun=document.querySelector(".baocun");
    baocun.onclick=function(){       //保存
        palette.save();
    };
    //保存结束     ????
    
    //撤销
    let chexiao=document.querySelector(".shangyibu");
    chexiao.onclick=function(){    //撤销
        palette.chexiao();
    };
    //撤销结束
    
    //下载
    let xiazai=document.querySelector(".xiazai");
    xiazai.onclick=function(){       //保存
        palette.xiazai();
    };
    //下载结束
    
    //清空
    let qingkong=document.querySelector(".qingkong");
    qingkong.onclick=function(){             // 清空
        palette.clearall();
    };
    //清空结束
    
    let tuichu=document.querySelector(".f4")
	tuichu.onclick=function(){
		close();
	}
    let baocun2=document.querySelector(".baocun2")
    baocun2.onclick=function(){
    	palette.xiazai();
    }
    let text1=document.querySelector(".wenzi")
    text1.onclick=function(){
        palette.text2();
    }
    
    let cutbox=document.getElementsByClassName('cutbox')[0];
    let caijian=document.querySelector(".caijian")
    caijian.onclick=function(){
        palette.cut(cutbox);
    }
    
    let file=$(".file")[0];
    file.onclick=function(){
        palette.file(file)
    }
    
    //填充
    let fill=$(".tianchong")[0];
    fill.onclick=function(){
        palette.fill();
    }
    //描边
    let miao=$(".miaobian")[0];
    miao.onclick=function(){
        palette.miao();
    }
    //填充色/描边色
    let fcolor=$(".fcolor")[0];
    fcolor.onchange=function(){
        palette.fcolor(fcolor.value);
    }
    
    let quanpin=document.querySelector(".quanpin")
    quanpin.onclick=function(){
    	palette.quanpin()
    }
}
