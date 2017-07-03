
$(".error-click div").click(function(){
		$(".error-hiddden").hide();
		$(".empty-top").hide();
	})
	$(document).ready(function(){
          $('.slider6').bxSlider({

			mode: 'fade',

            slideWidth: 800, 

            slideMargin: 0

          });

    });
    
    
    
    
    
    
    
    $(document).click(function(){
	  	$("#cover-2").hide();
    	$("#cover").hide();
    	$("#slid").show();
    	$("#cover #B-img").animate({"top":"10%"},200);
    })
    $("#cover-2").click(function(event){
    	event.stopPropagation();
    	if($("#cover-2").is(":hidden")){
    		
    	}else{
    		$("#cover-2 .cover-cen").animate({"bottom":"-100%"},300,ab);
    	}
    })
    function ab(){
    	$("#cover-2").hide();
    }
    $("#cover-2 .cover-cen").click(function(event){
    	event.stopPropagation();
    	$("#cover-2 .cover-cen").show();
    })
    $(".shop-cart").click(function(event){
    	event.stopPropagation();
    	$("#cover-2").show();
    	$("#cover-2 .cover-cen").animate({"bottom":"0"},500);
    })
    $(".head-fr dl dd:eq(1)").css({"color":"#999"});
    $(".head-fr dl dd:eq(1)").hide();
    aa = false;
    bb = false;
    $(".size span").click(function(event){
    	if($(this).hasClass("active")){
    		aa = false;
    		$(".size span").removeClass("active");
    		dd = $(this).html();
    		$(".head-fr dl dd:eq(1) span:eq(0)").html(dd);
    		$(".head-fr dl dd:last").show();
    		$(".head-fr dl dd:last span:eq(0)").show();
    		if(aa == false && bb == false){
    			$(".head-fr dl dd:last").show();
    			$(".head-fr dl dd:eq(1)").hide();
    		}else if(aa == false && bb == true){
    			$(".head-fr dl dd:eq(1)").show();
    			$(".head-fr dl dd:eq(1) span:eq(0)").html("");
    			$(".head-fr dl dd:last span:eq(0)").show();
    			$(".head-fr dl dd:last span:eq(1)").hide();
    		}
    		
    	}else{
    		aa = true;
    		$(".size span").removeClass("active");
    		$(this).addClass("active");
    		dd = $(this).html();
    		$(".head-fr dl dd:eq(1)").show();
    		$(".head-fr dl dd:eq(1) span:eq(0)").html(dd);
    		$(".head-fr dl dd:last span:eq(0)").hide();
    		if(aa == true && bb == true){
    			$(".head-fr dl dd:last").hide();
    			$(".head-fr dl dd:eq(1) span:eq(0)").html(dd);
    		}else if(aa == true && bb == false){
    			$(".head-fr dl dd:last").show();
    			$(".head-fr dl dd:eq(1) span:eq(1)").html("");
    			$(".head-fr dl dd:last span:eq(1)").show();
    		}
    	}
    	
    })
    $(".color span").click(function(event){
    	if($(this).hasClass("active")){
    		bb = false;
    		$(".color span").removeClass("active");
    		ee = $(this).html();
    		$(".head-fr dl dd:eq(1) span:eq(1)").html(ee);
			$(".head-fr dl dd:last").show();
    		
    		if(aa == false && bb == false){
    			$(".head-fr dl dd:last").show();
    			$(".head-fr dl dd:eq(1)").hide();
    			$(".head-fr dl dd:last span:eq(0)").show();
    			$(".head-fr dl dd:last span:eq(1)").show();
    			
    		}else if(aa == false && bb == true){  	
    			$(".head-fr dl dd:eq(1)").show();
    			$(".head-fr dl dd:eq(1) span:eq(0)").html("");
    			$(".head-fr dl dd:eq(1) span:eq(1)").html(ee);
    			$(".head-fr dl dd:last span:eq(0)").show();
    			$(".head-fr dl dd:last span:eq(1)").hide();
  			}else if(aa == true && bb == false){
    			$(".head-fr dl dd:eq(1)").show();
    			$(".head-fr dl dd:eq(1) span:eq(1)").html("");
    			$(".head-fr dl dd:last span:eq(0)").hide();
    			$(".head-fr dl dd:last span:eq(1)").show();
    		}
    		
    	}else{
    		bb = true;
    		$(".color span").removeClass("active");
    		$(this).addClass("active");
    		ee = $(this).html();  		
    		$(".head-fr dl dd:eq(1) span:eq(1)").html(ee);
    		$(".head-fr dl dd:last").show();
    		$(".head-fr dl dd:eq(1)").show();
    		$(".head-fr dl dd:last span:eq(1)").hide();
    		if(aa == true && bb == true){
    			$(".head-fr dl dd:last").hide();
    			$(".head-fr dl dd:eq(1) span:eq(0)").html(dd);
    			$(".head-fr dl dd:eq(1) span:eq(1)").html(ee);
    		}else if(aa == false && bb == true){
    			$(".head-fr dl dd:eq(1) span:eq(0)").html("");
    			$(".head-fr dl dd:eq(1) span:eq(1)").html(ee);
    			$(".head-fr dl dd:last span:eq(0)").show();
    		}
    	}
    })
    $(function(){
    	$(".num-fr span:eq(0)").css({"background":"#f9f9f9"});
		
    })
    w = 1;
	$(".num-fr span:eq(0)").click(function(){
		 w = $(".num-fr span:eq(1)").html();
		 w = parseInt(w);
		 w = w - 1;
		if(w < 2){
			$(".num-fr span:eq(0)").css({"background":"#f9f9f9"});
			w = 1;
			$(".num-fr span:eq(1)").html(w);
		}else{
			$(".num-fr span:eq(0)").css({"background":"#f1f1f1"});
			$(".num-fr span:eq(1)").html(w - 1);
		}
	})

	$(".num-fr span:eq(2)").click(function(){
		$(".num-fr span:eq(1)").html(w + 1);
		$(".num-fr span:eq(0)").css({"background":"#f1f1f1"});
		w = w + 1;
	})
    
    
    
    $(".slider6 li img,.tabbox-cont img").click(function(event){
    	event.stopPropagation();
    	var b = $(this).attr("src");
    	$("#slid").hide();
    	$("#cover #B-img").attr("src",b);
    	$("#cover #B-img").animate({"top":"50%"},200);
    	$("#cover").show();
    })
    $("#cover #B-img").click(function(event){
    	event.stopPropagation();
    	$("#cover").show();
    })
    $(".tab-bar ul li").click(function(){
    	$(".tab-bar ul li").removeClass("on");
    	$(this).addClass("on");
    })
    $(".tab-bar ul li:first").click(function(){
    	$(".tabbox-cont").show();
    	$("#goods").hide();
    	$(".store-cont").hide();
    })
    $(".tab-bar ul li:eq(1)").click(function(){
    	$("#goods").show();
    	$(".tabbox-cont").hide();
    	$(".store-cont").hide();
    })
    $(".tab-bar ul li:last").click(function(){
    	$(".store-cont").show();
    	$(".tabbox-cont").hide();
    	$("#goods").hide();
    })
   
    $(function(){
		 a = $("#tab-bar").offset().top;
    })
    $(window).scroll(function(){
    	if($(window).scrollTop() >= a ){
    		
    		$("#head").hide();
    		$("#tab-bar").css({"position":"fixed","top":"0"});
    		$("#tab-bar-empty").show();
    	}else{
    		$("#head").show();
    		$("#tab-bar").css({"position":"relative"});    		    		
    		$("#tab-bar-empty").hide();
    		
    	}
    })
	
	
	





