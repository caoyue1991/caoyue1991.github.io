function Palette(obj,ctx,setting,mask){
    //obj -- canvas    ctx-->环境
    this.obj=obj;
    this.ctx=ctx;
    // 属性
    this.lineWidth = 5;
    this.fillStyle = '#0085d0';
    this.strockeStyle = setting.color || '#0085D0';
    this.lineCap = 'round';   //round圆  square方  butt无
    //填充  描边  默认是描边
    this.type = 'stroke';
    //字体
    this.text = 'bold 30px 宋体';
    this.textAlign = 'center';
    this.textBaseline = 'middle';
    //宽高
    this.width = obj.width;
    this.height = obj.height;
    this.width='1196';
    this.height='596';
	this.font='20px ’苹方‘';
	this.mask=mask;
    //历史记录
    this.arr=[]; //history

    //获取 选色区内的颜色
    this.color = setting.color || '#008500';
}
Palette.prototype={
	 init: function () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.setLineDash([]);
        this.ctx.font=this.font;
    },
    fill: function () {
        this.type = "fill";
    },
    miao: function () {
        this.type = "stroke";
    },
    fcolor: function (value) {
        this.fillStyle = value;
        this.strokeStyle = value;
    },
    quanpin: function(){
    	document.documentElement.webkitRequestFullscreen("canvas")
	},
	huabi: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.init();
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height)
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0)
                }
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            }
            self.mask.onmouseup = function () {
                self.ctx.closePath();
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
        document.body.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
        }
    },
    
    eraserclear: function (eraser) {
        let self = this;
        self.mask.onmousedown = function (e) {
            eraser.style.display = 'block';
            self.mask.onmousemove = function (e) {
                let ox = e.offsetX, oy = e.offsetY;
                if(ox>self.width-eraser.offsetWidth / 2 ){
                    ox=self.width-eraser.offsetWidth / 2;
                }
                if(ox< eraser.offsetWidth / 2){
                    ox=eraser.offsetWidth / 2;
                }
                if(oy>self.height-eraser.offsetHeight / 2 ){
                    oy=self.height-eraser.offsetHeight / 2;
                }
                if(oy< eraser.offsetHeight/2){
                    oy=eraser.offsetHeight/2;
                }
                eraser.style.left = ox - eraser.offsetWidth / 2 + 'px';
                eraser.style.top = oy - eraser.offsetHeight / 2 + 'px';
                self.ctx.clearRect(ox - eraser.offsetWidth / 2, oy - eraser.offsetHeight / 2, eraser.offsetWidth, eraser.offsetHeight);
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                eraser.style.display = 'none';
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },

	zhixian:function(){
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height)
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0)
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.closePath();
                self.ctx.stroke();
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
        document.body.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
        }
    },
    
    xuxian:function(){                      //  画虚线
        let self = this;
        self.mask.onmousedown = function (e) {
            self.init();
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height)
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.setLineDash([10, 25]);
                self.ctx.closePath();

                self.ctx.stroke();
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                 self.ctx.setLineDash([0, 0]);
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    //画矩形
    juxing:function(){
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height)
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                self.ctx.rect(ox, oy, (mx - ox), (my - oy));
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.onmouseup = null;
            }
        }
        document.body.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
        }
    },
    yuanjiao:function(){            //圆角矩形
        let self = this;
        self.mask.onmousedown = function (e) {
            self.init();
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                let w = mx - ox, h = my - oy, r = 10;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox - w + r, oy - h);
                self.ctx.lineTo(ox + w - r, oy - h);
                self.ctx.quadraticCurveTo(ox + w, oy - h, ox + w, oy - h + r);
                self.ctx.lineTo(mx, my - r);
                self.ctx.quadraticCurveTo(mx, my, mx - r, my);
                self.ctx.lineTo(ox - w + r, my);
                self.ctx.quadraticCurveTo(ox - w, oy + h, ox - w, oy + h - r);
                self.ctx.lineTo(ox - w, oy - h + r);
                self.ctx.quadraticCurveTo(ox - w, oy - h, ox - w + r, oy - h);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
        document.body.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
        }
    },
    yuanxing:function(){            //圆
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height)
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                let r = Math.sqrt((mx - ox) * (mx - ox) + (my - oy) * (my - oy));
                self.ctx.beginPath();
                self.ctx.arc(ox, oy, r, 0, Math.PI * 2);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
        document.body.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
        }
    },
    //多边形
    duobianxing : function(n){
        let langel=(360/n);              //角度转为弧度
        let self = this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;    //圆心 x ，y
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;   //移动到
                let radius=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.ctx.clearRect(0,0,this.width,this.height);
                if(self.arr.length > 0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+radius,oy);
                for(let i=0;i<n;i++){
                    let hudu=(Math.PI/180)*langel*i;
                    self.ctx.lineTo(ox+radius*Math.cos(hudu),oy+radius*Math.sin(hudu));
                }
                self.ctx.closePath();
                self.ctx.stroke();
            };
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    duojiaoxing:function(bian){   //多角形
        let self = this;
        self.mask.onmousedown=function(e) {
            let ox = e.offsetX, oy = e.offsetY;    //圆心 x ，y
            let angel = (360/bian)*Math.PI/180;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;   //移动到
                let radius = Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));//半径
                let radius1=radius/2;
                self.ctx.clearRect(0,0,this.width,this.height);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+radius,oy);
                let x1,y1;
                for(let i=0;i<bian;i++){
                    if(i%2 == 0){
                        x1 =radius*Math.cos(angel*i);
                        y1 =radius*Math.sin(angel*i);
                    }else{
                        x1 =radius1*Math.cos(angel*i);
                        y1 =radius1*Math.sin(angel*i);
                    }
                    self.ctx.lineTo(ox+x1,oy+y1);

                }
                self.ctx.closePath();
                self.ctx.stroke();
            };
            self.mask.onmouseup = function () {
                self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    save:function(){       //保存
        let data = this.obj.toDataURL('image/png');
        img.src = data;
    },
    chexiao:function(){   //撤销
        let last = this.arr.pop();
        this.ctx.putImageData(last,0,0);
    },
    xiazai:function(){          //下载
        let data = this.obj.toDataURL('image/png').replace(`data:image/png`,'data:stream/octet')
        location.href = data;
    },
    clearall:function(){       //清空
        this.arr=[];
        this.ctx.clearRect(0, 0, this.width, this.height);
    },
	  //文字
    text2:function(){
		let self = this;
        self.init();
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`
                width:50px;
                height:20px;
                border:1px solid #b0b0b0;
                position:relative;
                left:${ox}px;
                top:${oy}px;
                
            `;
            if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
            div.contentEditable="true";
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function(e){
                let ox=e.clientX-this.offsetLeft;
                
                let oy=e.clientY-this.offsetTop; 
                console.log(ox,oy)
            self.mask.onmousemove=function(e){                
                let mx=e.clientX,my=e.clientY;
                let lefts=mx-ox;
                let tops=my-oy;
                self.area.style.left=`${lefts}px`;
                self.area.style.top=`${tops}px`;
            }
            self.area.onmouseup=function(){
                self.area.onmouseup=null;
                self.mask.onmousemove=null;
            }
            }
            div.onblur=function(){
                self.ctx.font=self.text;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
                self.arr.push(self.ctx.getImageData(0,0,self.mask.width,self.mask.height));
            }
        }
	},

    
    file: function (value) {
        let self = this;
        value.onchange = function () {
            let files = this.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function () {
                let image = new Image;
                image.src = this.result;
                image.onload = function () {
                    self.ctx.drawImage(image, 0, 0);
                    self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                }
            }
        }
    },
    
	cut:function(cutobj){
        let self=this;
        self.mask.onmousedown=function(e){
            var startx=e.offsetX;
            var starty=e.offsetY;
            var minx,miny,w,h;
            self.init();
            self.mask.onmousemove=function(e){
                var endx=e.offsetX;
                var endy=e.offsetY;
                minx=startx>endx?endx:startx;//反向拉
                miny=starty>endy?endy:starty;
                w=Math.abs(endx-startx);//去绝对值，不管哪个方向拉都可以，获得裁剪框的宽高
                h=Math.abs(endy-starty);
                cutobj.style.width=w+'px';//设置一下裁剪那个框的样式，
                cutobj.style.height=h+'px';
                cutobj.style.top=miny+'px';
                cutobj.style.left=minx+'px';
                cutobj.style.border="1px dashed #f0f0f0"
            }
            self.mask.onmouseup=function(){
                self.mask.onmousemove=null;
                self.mask.onmouseu=null;
                self.cutimg=self.ctx.getImageData(minx,miny,w,h);//获取裁剪的那一块图片
                self.ctx.clearRect(minx,miny,w,h);//只清除maks上边裁剪的那一块
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));//清除完后保存一下当前状态
                self.ctx.putImageData(self.cutimg,minx,miny);//把裁剪的那一块图片放回原位
                self.drap(minx,miny,w,h,cutobj);
            }
        }
    },
    drap:function(minx,miny,w,h,cutobj){
        let self=this;
        self.mask.onmousemove=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            //判断鼠标的位置是否是在裁剪的那个框里
            if(ox>minx&&ox<w+minx&&oy>miny&&oy<h+miny){
                self.mask.style.cursor = "move";//在框内的话让mask上出现移动的小图标
            } else {
                self.mask.style.cursor = "default";
                return;
            }
        }
        self.mask.onmousedown=function(e){
            var ox = e.offsetX;
            var oy = e.offsetY;
            var cx = ox - minx;//当鼠标按下时计算鼠标距离裁剪框的位置
            var cy = oy - miny;
            if(ox > minx && ox < w + minx && oy > miny && oy < h + miny) {
               self.mask.style.cursor = "move";
            }else{
              self.mask.style.cursor = "default";
              return;
            }
            self.mask.onmousemove=function(e){
                self.ctx.clearRect(0, 0, self.width,self.height);
                    if (self.arr.length != 0) {
                         self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0)
                    }
                var endx = e.offsetX;
                var endy = e.offsetY;
                var left = endx - cx;//当鼠标移动时计算裁剪框距离上左的位置
                var top = endy - cy;
                if(left<0){//判断边界
                     left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }
                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                cutobj.style.left= left+'px';//让裁剪框跟着鼠标移动
                cutobj.style.top=top+'px';
                minx=left;
                miny=top;
                self.ctx.putImageData(self.cutimg,left,top);//把裁剪的图片放到和裁剪框同一个位置
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drap(minx,miny,w,h,cutobj);//回调函数，再次点击是还能移动裁剪框和图片
            }
        }
    }
}