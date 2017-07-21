		$('.list>li a').click(function(){
			$('.list>li a').css("color","#000000")
			$(this).css("color","#2288f6")
//			console.log($(this).text())
		})
		
		$('.main_list>li a').click(function(){
			$('.main_list>li a').css("color","#666666")
			$(this).css("color","#2288f6")
		})
		
		$('.main_list>li').click(function(){
			$('.main_list>li').css("border","none")
			$(this).css("border-left","3px solid #16a0fc")
		})

		$("#list_posi .list_1").click(function(){
			$("#list_posi .posi").slideToggle(500);
			trans++;
			if (trans%2 == 1) {
				$("#list_posi span").addClass('tran');
				$("#list_posi span").removeClass('trantion');
			}
			if(trans %2 ==0){
				$("#list_posi span").removeClass('tran');
				$("#list_posi span").addClass('trantion');
			}
		})
		


		$('.listb>li a').click(function(){
			$('.listb>li a').css("color","#000000")
			$(this).css("color","#2288f6")
		})
		
		
		$('.about_list>li a').click(function(){
			$('.about_list>li a').css("color","#666666")
			$(this).css("color","#2288f6")
		})
		
		$('.about_list>li').click(function(){
			$('.about_list>li').css("border","none")
			$(this).css("border-left","3px solid #16a0fc")
		})
		
		var trans = 0;
		$("#listb_posi .list_2").click(function(){
			$("#listb_posi .posib").slideToggle(500);
			trans++;
			if (trans%2 == 1) {
				$("#listb_posi span").addClass('tran');
				$("#listb_posi span").removeClass('trantion');
			}
			if(trans %2 ==0){
				$("#listb_posi span").removeClass('tran');
				$("#listb_posi span").addClass('trantion');
			}
			
			
		})


console.log(document.documentElement.clientWidth)

	var banimg = document.getElementById("banner_img");
	banimg.style.width = document.documentElement.clientWidth + "px"







