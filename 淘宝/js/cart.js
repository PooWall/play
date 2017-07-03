//$().css({"background":"url()","background-size":"100%"});


$(".cen-top .check span").click(function(){
	if($(this).hasClass("in")){
		$(this).removeClass("in");
		$(this).parents(".cen-top").siblings(".all-list").find(".check span").removeClass("in");
		$(this).css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
		h = $(".shopp").children(".cen-top").find(".in").length; //已选头部的"in" 数量
		g = $(".shopp").length;
		
		if(h < g){
			$(".footer .check span").removeClass("in");
			$(".footer .check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
		}

		
	}else{
		$(this).removeClass("in");
		$(this).parents(".cen-top").siblings(".all-list").find(".check span").addClass("in");
		$(this).addClass("in");
		$(this).css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
		h = $(".shopp").children(".cen-top").find(".in").length; //已选头部的"in" 数量
		g = $(".shopp").length;
		
		if(h == g){
			$(".footer .check span").addClass("in");
			$(".footer .check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
		}
	}
})

$(".all-list .check-cont .check span").click(function(){
	if($(this).hasClass("in")){
		c = $(this).parents(".all-list").find(".in").length;
		a = $(this).parents(".all-list").find(".check span").length;
		$(this).removeClass("in");
		$(this).parents(".all-list").siblings(".cen-top").find(".check span").removeClass("in");
		$(this).css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
		c = c - 1;
		if(c < a){
			$(".footer .check span").removeClass("in");
			$(this).parents(".all-list").siblings(".cen-top").find(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"})
			$(".footer .check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
		}
	}else{
		c = $(this).parents(".all-list").find(".in").length;
		a = $(this).parents(".all-list").find(".check span").length;
//		$(this).removeClass("in");
		$(this).addClass("in");
		$(this).parents(".all-list").siblings(".cen-top").find(".check span").addClass("in");
		$(this).css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
		c = c + 1;
		h = $(".shopp").children(".cen-top").find(".in").length; //已选头部的"in" 数量
		g = $(".shopp").length;
		if(c == a){
			$(this).parents(".all-list").siblings(".cen-top").find(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"})
			if(h == g){
				$(".footer .check span").addClass("in");
				$(".footer .check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
			}
		}else{
			$(this).parents(".all-list").siblings(".cen-top").find(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"})
		}
	}
	
})

$(".footer .check span").click(function(){
	if($(this).hasClass("in")){
		$(".check span").removeClass("in");
		$(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)","background-size":"100%"});
	}else{
		$(".check span").addClass("in");
		$(".check span").css({"background":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)","background-size":"100%"});
	}
})


//$(funcntion(){
//	var width = $(".check-cont") - 48;
//	$(".check-right").width(width);
//})
//$(window).resize(function(){
//	var width = $(".check-cont") - 48;
//	$(".check-right").width(width);
//})

aa = false;

$(".edit").click(function(){
	if($(this).hasClass("active")){
		aa = false;
		$(this).removeClass("active");
		$(this).html("编辑");
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .right-2").css({"display":"-webkit-box"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .right-3").css({"display":"none"});

		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .delete").animate({"width":"0"},700);
//		$(this).parents(".cen-top").siblings(".all-list").children().find(".delete").css({"display":"none"});
	}else{
		aa = true;
		$(this).removeClass("active");
		$(this).addClass("active");
		$(this).html("完成");
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .right-2").css({"display":"none"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .right-3").css({"display":"-webkit-box"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .delete").css({"display":"-webkit-box"});
		$(this).parents(".cen-top").siblings(".all-list").children().find(".check-right .delete").animate({"width":"18%"},700);
		
		
	}
})


   
$(".minus").click(function(){
	var	bb = $(this).siblings(".num").children("input").val();
	bb = parseInt(bb);
	if(bb < 2){
		bb = 1;
		$(this).siblings(".num").children("input").val(bb);
		$(this).parents(".right-3").siblings(".right-2").find(".price-fr .num").html(bb);
	}else{
		$(this).siblings(".num").children("input").val(bb - 1);
		bb--;
		$(this).parents(".right-3").siblings(".right-2").find(".price-fr .num").html(bb);
	}
})
$(".add").click(function(){
	var	bb = $(this).siblings(".num").children("input").val();
	bb = parseInt(bb);
	$(this).siblings(".num").children("input").val(bb + 1);
		bb++;
	$(this).parents(".right-3").siblings(".right-2").find(".price-fr .num").html(bb);
})


$(".check-right .right-3 .arrow").click(function(){
	$(".style").animate({"right":"0"},900);
	
})
$(".style .close").click(function(){
	$(".style").animate({"right":"-100%"},800);
})







nn = false;
mm = false;

$(".size span").click(function(){
	if($(this).hasClass("on")){
		nn = false;
		$(".size span").removeClass("on");
		dd = $(this).html();
		$(".head-fr dl dd:eq(0) span:eq(0)").html(dd);
		$(".head-fr dl dd:last").show();
		$(".head-fr dl dd:last span:eq(0)").show();
		if(nn == false && mm == false){
			$(".head-fr dl dd:eq(0)").hide();
			$(".head-fr dl dd:last span:eq(1)").show();
		}else if(nn == false && mm == true){
			$(".head-fr dl dd:last span:eq(1)").hide();
			$(".head-fr dl dd:eq(0)").show();
			$(".head-fr dl dd:eq(0) span:eq(0)").html("");
		}
		
		
	}else{
		nn = true;
		$(".size span").removeClass("on");
		$(this).addClass("on");
		dd = $(this).html();
		$(".head-fr dl dd:eq(0)").show();
		$(".head-fr dl dd:eq(0) span:eq(0)").html(dd);
		$(".head-fr dl dd:last span:eq(0)").hide();
		if(nn == true && mm == true){
			$(".head-fr dl dd:last").hide();
			$(".head-fr dl dd:eq(0) span:eq(0)").html(dd);
		}else if(nn == true && mm == false){
			$(".head-fr dl dd:last").show();
			$(".head-fr dl dd:last span:eq(1)").show();
			$(".head-fr dl dd:eq(0) span:eq(1)").html("");
		}
	}

})

$(".color span").click(function(){
	if($(this).hasClass("on")){
		mm = false;
		$(".color span").removeClass("on");
		ff = $(this).html();
		$(".head-fr dl dd:eq(0) span:eq(1)").html(ff);
		$(".head-fr dl dd:last").show();
		$(".head-fr dl dd:last span:eq(1)").show();
		if(nn == false && mm == false){
			$(".head-fr dl dd:eq(0)").hide();
			$(".head-fr dl dd:last span:eq(0)").show();
			$(".head-fr dl dd:last span:eq(1)").show();
		}else if(nn == true && mm == false){
			$(".head-fr dl dd:eq(0)").show();
			$(".head-fr dl dd:eq(0) span:eq(0)").html(dd);
			$(".head-fr dl dd:eq(0) span:eq(1)").html("");
			$(".head-fr dl dd:last span:eq(0)").hide();
		}else if(nn == false && mm == true){
			$(".head-fr dl dd:eq(0)").show();
			$(".head-fr dl dd:eq(0) span:eq(0)").html("");
			$(".head-fr dl dd:eq(0) span:eq(1)").html(ff);
			$(".head-fr dl dd:last span:eq(0)").show();
			$(".head-fr dl dd:last span:eq(1)").hide();
		}
		
	}else{
		mm = true;
		$(".color span").removeClass("on");
		$(this).addClass("on");
		ff = $(this).html();
		$(".head-fr dl dd:eq(0)").show();
		$(".head-fr dl dd:eq(0) span:eq(1)").html(ff);
		$(".head-fr dl dd:last span:eq(1)").hide();
		if(nn == true && mm == true){
			$(".head-fr dl dd:last").hide();
			$(".head-fr dl dd:eq(0) span:eq(0)").html(dd);
		}else if(nn == false && mm == true){
			$(".head-fr dl dd:eq(0) span:eq(0)").html("");
			$(".head-fr dl dd:last").show();
			$(".head-fr dl dd:last span:eq(1)").hide();
			$(".head-fr dl dd:last span:eq(0)").show();
		}
	}
})









