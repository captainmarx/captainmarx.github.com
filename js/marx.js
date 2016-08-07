	function drag(){
		var oBox=document.getElementById('box');
		var y=0;
		var x=0;

		oBox.onmousedown=function(ev){
			var disX=ev.clientX-y;
			var disY=ev.clientY-x;
			document.onmousemove=function(ev){
				y=ev.clientX-disX;
				x=ev.clientY-disY;				
				oBox.style.transform='perspective(800px) rotateX('+-x+'deg) rotateY('+y+'deg)';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;
		}
	}
	
	function gotop(){
		var oGotop=document.getElementById('gotop');
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=300){
				oGotop.style.display='block';
			}else{
				oGotop.style.display='none';
			}	
		}
		oGotop.onclick=function(){
			var timer=null;
			var count=Math.ceil(1000/30);
			var start=document.documentElement.scrollTop||document.body.scrollTop;
			var iTarget=0;
			var time=1000;
			var dis=iTarget-start;
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=n/count;
				var cur=start+dis*a*a;
				document.documentElement.scrollTop=document.body.scrollTop=cur;
				if(n>=count){
					clearInterval(timer);
				}
			},30);			
		}
	}

	window.onresize=function(){
		var oWorks=document.getElementById('works');
		var winW=document.documentElement.clientWidth;
		var n=1050/document.documentElement.clientWidth;

		if(winW>940){
			oWorks.style.width= winW*n+'px';
		}
		if(winW<940){
			oWorks.style.width= winW+'px';
		}
	}

	window.onload=function(){
		drag();
		gotop();
		

	}