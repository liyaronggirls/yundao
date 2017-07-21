$(function(){
    $(".span1").hide();
	$(".span2").hide();
	$(".xing").hide();
	var i =60;
	var times = null
	$(".reg_section .input3").on("click",function(){
		times = setInterval(dian,1000)
	})
	function dian(){
		i--;
		if(i>=0){			
			$(".reg_section .input3").attr("value",i+"s后请重试")
		}
		else{
			$(".reg_section .input3").attr("value","重新获取短信验证码")		
			clearInterval(times)
			i=60;
		}
		
	};
	$(".reg_section .input5").on("click",function(){
		/*var suiji = suiji(15,153);*/
		var str =""
		for(var i=0;i<4;i++){
				str += Math.floor(Math.random()*16).toString(16);
		}
		$(".zi").html(str)

	})
	function suiji(m,n){
			  return (Math.floor(Math.random()*n-m+1)+m)
		}
	$(".reg_section .ul1 input").eq(0).blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".ul1 input:nth-of-type(1)").val()==""){
					 	    $(".ul1 i").eq(0).html("账号名不能为空")
					 	    $(".span2").eq(0).show();
					 	   $(".xing").eq(0).show();
					 	   $(".span1").eq(0).hide();
					 }else if(!usReg.test($(".ul1 input").eq(0).val())){
					 	$(".ul1 i").eq(0).html("输入的格式错误")
					 	   $(".span2").eq(0).show();
					 	   $(".xing").eq(0).show();
					 	   $(".span1").eq(0).hide();
					 }else{
					 	   $(".ul1 i").eq(0).html("格式正确").css("color","green")
					 	   $(".span2").eq(0).hide();
					 	   $(".xing").eq(0).hide();
					 	   $(".span1").eq(0).show();
					 }
				})
	$(".reg_section .ul1 input").eq(1).blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".ul1 input").eq(1).val()==""){
					 	    $(".ul1 i").eq(1).html("密码不能为空")
					 	    $(".span2").eq(1).show();
					 	   $(".xing").eq(1).show();
					 	   $(".span1").eq(1).hide();
					 }else if(!usReg.test($(".ul1 input").eq(1).val())){
					 	$(".ul1 i").eq(1).html("输入的格式错误")
					 	   $(".span2").eq(1).show();
					 	   $(".xing").eq(1).show();
					 	   $(".span1").eq(1).hide();
					 }else{
					 	   $(".ul1 i").eq(1).html("格式正确").css("color","green")
					 	   $(".span2").eq(1).hide();
					 	   $(".xing").eq(1).hide();
					 	   $(".span1").eq(1).show();
					 }
				})
	$(".reg_section .ul1 input").eq(2).blur(function(){
					 if($(".ul1 input").eq(2).val()==""){
					 	    $(".ul1 i").eq(2).html("请再次输入密码")
					 	    $(".span2").eq(2).show();
					 	   $(".xing").eq(2).show();
					 	   $(".span1").eq(2).hide();
					 }else if($(".ul1 input").eq(1).val()!=$(".ul1 input").eq(2).val()){
					 	$(".ul1 i").eq(2).html("请输入正确的密码")
					 	   $(".span2").eq(2).show();
					 	   $(".xing").eq(2).show();
					 	   $(".span1").eq(2).hide();
					 }else{
					 	   $(".ul1 i").eq(2).html("格式正确").css("color","green")
					 	   $(".span2").eq(2).hide();
					 	   $(".xing").eq(2).hide();
					 	   $(".span1").eq(2).show();
					 }
				})
  $(".reg_section ul input").eq(3).blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".ul1 input").eq(3).val()==""){
					 	    $(".ul1 i").eq(3).html("请输入公司名称")
					 	    $(".span2").eq(3).show();
					 	   $(".xing").eq(3).show();
					 	   $(".span1").eq(3).hide();
					 }else if(!usReg.test($(".ul1 i").eq(3).val())){
					 	$(".ul1 i").eq(3).html("输入的格式错误")
					 	   $(".span2").eq(3).show();
					 	   $(".xing").eq(3).show();
					 	   $(".span1").eq(3).hide();
					 }else{
					 	   $(".ul1 i").eq(3).html("格式正确").css("color","green")
					 	   $(".span2").eq(3).hide();
					 	   $(".xing").eq(3).hide();
					 	   $(".span1").eq(3).show();
					 }
				})
  $(".reg_section .ul1 input").eq(4).blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".ul1 input").eq(4).val()==""){
					 	    $("ul i").eq(4).html("请输入联系人")
					 	    $(".span2").eq(4).show();
					 	   $(".xing").eq(4).show();
					 	   $(".span1").eq(4).hide();
					 }else if(!usReg.test($(".ul1 input").eq(4).val())){
					 	$(".ul1 i").eq(4).html("输入的格式错误")
					 	   $(".span2").eq(4).show();
					 	   $(".xing").eq(4).show();
					 	   $(".span1").eq(4).hide();
					 }else{
					 	   $(".ul1 i").eq(4).html("格式正确").css("color","green")
					 	   $(".span2").eq(4).hide();
					 	   $(".xing").eq(4).hide();
					 	   $(".span1").eq(4).show();
					 }
				})
  $(".reg_section .ul1 select").blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".ul1 select").val()==""){
					 	    $(".ul1 i").eq(5).html("请选择区域")
					 	    $(".span2").eq(5).show();
					 	   $(".xing").eq(5).show();
					 	   $(".span1").eq(5).hide();
					 }else{
					 	   $(".ul1 i").eq(5).html("格式正确").css("color","green")
					 	   $(".span2").eq(5).hide();
					 	   $(".xing").eq(5).hide();
					 	   $(".span1").eq(5).show();
					 }
				})
  $(".reg_section .ul1 input").eq(5).blur(function(){
					 var usReg = /^[0-9]{11}$/;
					 if($(".ul1 input").eq(5).val()==""){
					 	    $(".ul1 i").eq(6).html("请输入联系人")
					 	    $(".span2").eq(6).show();
					 	   $(".xing").eq(6).show();
					 	   $(".span1").eq(6).hide();
					 }else if(!usReg.test($(".ul1 input").eq(5).val())){
					 	$(".ul1 i").eq(6).html("输入的格式错误")
					 	   $(".span2").eq(6).show();
					 	   $(".xing").eq(6).show();
					 	   $(".span1").eq(6).hide();
					 }else{
					 	   $(".ul1 i").eq(6).html("格式正确").css("color","green")
					 	   $(".span2").eq(6).hide();
					 	   $(".xing").eq(6).hide();
					 	   $(".span1").eq(6).show();
					 }
				})
  
     /*找回密码*/
    $(".zhaohui_section .input12").on("click",function(){
		/*var suiji = suiji(15,153);*/
		var str =""
		for(var i=0;i<4;i++){
				str += Math.floor(Math.random()*16).toString(16);
		}
		$(".zi").html(str)

	})
    $(".zhaohui_section .input13").blur(function(){
					 if($(".zhaohui_section .input13").val()==""){
					 	    $(".ul2 i").eq(1).html("请输入手机号")
					 	    $(".ul2 .span2").eq(1).show();
					 	   $(".ul2 .xing").eq(1).show();
					 	   $(".ul2 .span1").eq(1).hide();
					 }else if($(".ul1 input").eq(1).val()!= $(".zhaohui_section .input13").val()){
					 	$(".ul2 i").eq(1).html("账户存在")
					 	   $(".ul2 .span2").eq(1).show();
					 	   $(".ul2 .xing").eq(1).show();
					 	   $(".ul2 .span1").eq(1).hide();
					 }else{
					 	   $(".ul2 i").eq(1).html("格式正确").css("color","green")
					 	   $(".ul2 .span2").eq(1).hide();
					 	   $(".ul2 .xing").eq(1).hide();
					 	   $(".ul2 .span1").eq(1).show();
					 }
				});
		var j =60;
	    var times2 = null;
	    $(".zhaohui_section .input15").on("click",function(){
		    times2 = setInterval(dian2,1000)
	    })
	    function dian2(){
		   j--;
		    if(j>=0){			
			    $(".zhaohui_section .input15").attr("value",j+"s后请重试")
		    }
		    else{
			    $(".zhaohui_section .input15").attr("value","重新获取短信验证码")		
			    clearInterval(times2)
			    j=60;
		   }
		
	    };
	     $(".zhaohui_section .input17").blur(function(){
					 var usReg = /^[0-9]{7,19}$/;
					 if($(".zhaohui_section .input17").val()==""){
					 	    $(".ul2 i").eq(3).html("请输入联系人")
					 	    $(".ul2 .span2").eq(3).show();
					 	   $(".ul2 .xing").eq(3).show();
					 	   $(".ul2 .span1").eq(3).hide();
					 }else if(!usReg.test($(".zhaohui_section .input17").val())){
					 	$(".ul2  i").eq(3).html("输入的格式错误");
					 	   $(".ul2 .span2").eq(3).show();
					 	   $(".ul2 .xing").eq(3).show();
					 	   $(".ul2 .span1").eq(3).hide();
					 }else{
					 	   $(".ul2  i").eq(3).html("格式正确").css("color","green")
					 	   $(".ul2 .span2").eq(3).hide();
					 	   $(".ul2 .xing").eq(3).hide();
					 	   $(".ul2 .span1").eq(3).show();
					 }
				})

})
