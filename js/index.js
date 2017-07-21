$(function() {
    var i =0;
	$("#oLi").on("click", function() {
		$("#oLi .xiala").slideToggle(500);
		i++;
		if(i%2==1){
			$("#oLi a span").addClass("oLispan");			
			$("#oLi a span").removeClass("oLispans");			
		}
		if(i%2==0){
			$("#oLi a span").addClass("oLispans");	
			$("#oLi a span").removeClass("oLispan");	
		}
	})
	
	$("#oDiv").on("click", function() {
		$("#oDiv .xiala_2").slideToggle(500);
		i++;
		if(i%2==1){
			$("#oDiv a span").addClass("oLispan");			
			$("#oDiv a span").removeClass("oLispans");			
		}
		if(i%2==0){
			$("#oDiv a span").addClass("oLispans");	
			$("#oDiv a span").removeClass("oLispan");	
		}
	})
	
	$(".clearfix li").on("click",function(){
		$(this).addClass("oLi_1").siblings().removeClass("oLi_1");
	})
	
	
	var oImgs=document.documentElement.clientWidth;
	$("#aUl li").css("width",oImgs);
	
	var widths=document.documentElement.clientWidth*$("#aUl li").length+"px";
	$("#aUl").css("width",widths);
	
	var times = setInterval(run,2000);
	$(".dian li").eq(0).css("background","rgba(0,0,0,0)").css("width","10px").css("height","10px").css("border","1px solid #FFFFFF");
	
	var i = 0;
	function run(){
		i++;
		if(i>2){
			i=0
			$("#aUl").css("left","0px");
		}
		if(i>2){
			i=0;
		   $(".dian li").eq(0).css("background","rgba(0,0,0,0)").css("width","10px").css("height","10px").css("border","1px solid #FFFFFF");
		}
		$(".dian li").css("background-color","white")
		$(".dian li").eq(i).css("background","rgba(0,0,0,0)").css("width","10px").css("height","10px").css("border","1px solid #FFFFFF");
		$("#aUl").animate({"left":-i*oImgs+"px"},1000)
	}
	$(".banner").mouseover(function(){
		 clearInterval(times)
	});
	$(".banner").mouseout(function(){
		  times = setInterval(run,1000)
	});
    $(".dian li").click(function(){
	    i = $(this).index();
//  	 alert(index);
        run();
    	  
    	 
    })
    
    var oBox=document.getElementById('oBox');
    var oL=document.getElementById('left');
	var oR=document.getElementById('right');
    
    var oUl=document.getElementById('oUl');
    
    oUl.innerHTML+=oUl.innerHTML;
    
    var aLi=oUl.children;
    
    oUl.style.width=aLi[0].offsetWidth*aLi.length+250+'px';
    
    var n=0;
	var timer=null;
	
	oL.onclick=function(){
			toL();	
		};
	
    function toL(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n-=2;
				  
				  if(n<-oUl.offsetWidth/2){
					n=0;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},30)	
		};
	toL();
	
	oR.onclick=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n+=2;
				  
				  if(n>0){
					n=-oUl.offsetWidth/2;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},30)	
		};
		
		oBox.onmouseover=function(){
			clearInterval(timer);	
		};
		oBox.onmouseout=function(){
			toL();
		};
})