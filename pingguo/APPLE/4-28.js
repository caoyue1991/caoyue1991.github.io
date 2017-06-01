"use strict"
		
//function getstyle(obj,attr){
//				if(window.getComputedStyle){
//					return getComputedStyle(obj,null).[attr];
//				}else{
//					return getComputedStyle(attr);
//				}     //如何实现兼容
//		}
//			//html(obj,[content])用来设置或者获取某一个元素的内容
//			//obj  指定的对象
//			//content  可以传也可以不传
//			//没有，获取内容
//			//有，设置内容
//			function html(obj,content){
//				if(content){
//					//设置
//					 obj.innerHTML=content;
//				}else{
//					//获取
//					return obj.innerHTML;
//				}
//			}

//		alert("这是引入的第一个js")
		function $(selector,ranger=document){
			if(typeof selector=="string"){
				let select=selector.trim();
				let first=select.charAt(0);
				if(first== "."){
					return ranger.getElementsByClassName(select.substring(1));
				}else if(first=="#"){
					return ranger.getElementById(select.substring(1));
				}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
					return ranger.getElementsByTagName(select)
				}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
					return document.createElement(select.slice(1,-1))
				}
			}else if(typeof selector=="function"){
				addEvent(window,"load",selector)
				}
				function addEvent(obj,type,fn){
					obj.addEventListener(type,fn,false);
				}
			}
			


//alert(2)