$(document).ready(function(){

$(".musicbuttonbottom").hide();


var toggle = "out";
$(".musicbuttonright").click(function(){		
	console.log(toggle);
	var css = {};
	if (toggle == "in"){
		$(".musiccontentvideo").get(0).pause();
		$(".musiccover").animate({opacity:'0'});
		$(".musicbuttonleft").animate({
			width:'245',
			height:'480',
			opacity:'1',
			top:'110',
			left:'523'		
		}).css("background-color","#f6f6f6");
		$(".musicbuttonright").animate({
			width:'245',
			height:'480',
			opacity:'1',
			top:'110',
			left:'768'
		}).css("background-color","#f6f6f6");
		$(".musicbuttontop").animate({
			height:'0',
			top:'0'
		}).hide();
		$(".musicbuttonbottom").animate({
			height:'0',
			top:'700'
		}).hide();
		$("#hideicon").animate({
			opacity:'0'
		});
		$("#playpauseicon").animate({
			opacity:'0'
		});
		$(".musicdivvideo").animate({
			width:'0',
			height:'480',
			opacity:'0',
			top:'110',
			left:'768'
		});
		
	toggle = "out";
	} else {
		$(".musiccontentvideo").get(0).play();
		$(".musiccover").animate({opacity:'.4'});	
		$(".musicbuttonleft").animate({
		width:'245',
		height:'480',
		opacity:'1',
		top:'110',
		left:'96'
		}).css("background-color","black");
		$(".musicbuttonright").animate({
		width:'245',
		height:'480',
		opacity:'1',
		top:'110',
		left:'1195'
		}).css("background-color","black");
		$(".musicbuttontop").animate({
			height:'110',
			top:'0'
		}).show();
		$(".musicbuttonbottom").animate({
			height:'110',
			top:'590'
		}).fadeIn();
		$("#hideicon").animate({
			opacity:'1'
		});
		$("#playpauseicon").animate({
			opacity:'1'
		});
		$(".musicdivvideo").animate({
		width:'854',
		height:'480',
		opacity:'1',
		top:'110',
		left:'341'
		});
	toggle = "in";
	}
 	$(this).animate(css);
});

$(".musicbuttonleft").click(function(){		
	console.log(toggle);
	var css = {};
	if (toggle == "in"){
		$(".musiccover").animate({opacity:'0'});
		$(".musicbuttonleft").animate({
			width:'245',
			height:'480',
			opacity:'1',
			top:'110',
			left:'523'		
		}).css("background-color","#f6f6f6");
		$(".musicbuttonright").animate({
			width:'245',
			height:'480',
			opacity:'1',
			top:'110',
			left:'768'
		}).css("background-color","#f6f6f6");
		$(".musicbuttontop").animate({
			height:'0',
			top:'0'
		}).hide();
		$(".musicbuttonbottom").animate({
			height:'0',
			top:'700'
		}).hide();
		$("#hideicon").animate({
			opacity:'0'
		});
		$("#playpauseicon").animate({
			opacity:'0'
		});
		$(".musicdivvideo").animate({
			width:'0',
			height:'480',
			opacity:'0',
			top:'110',
			left:'768'
		});
		
	toggle = "out";
	} else {
		$(".musiccontentvideo").get(0).play();
		$(".musiccover").animate({opacity:'.4'});	
		$(".musicbuttonleft").animate({
		width:'245',
		height:'480',
		opacity:'1',
		top:'110',
		left:'96'
		}).css("background-color","black");
		$(".musicbuttonright").animate({
		width:'245',
		height:'480',
		opacity:'1',
		top:'110',
		left:'1195'
		}).css("background-color","black");
		$(".musicbuttontop").animate({
			height:'110',
			top:'0'
		}).show();
		$(".musicbuttonbottom").animate({
			height:'110',
			top:'590'
		}).fadeIn();
		$("#hideicon").animate({
			opacity:'1'
		});
		$("#playpauseicon").animate({
			opacity:'1'
		});
		$(".musicdivvideo").animate({
		width:'854',
		height:'480',
		opacity:'1',
		top:'110',
		left:'341'
		});
	toggle = "in";
	}
 	$(this).animate(css);
});

$(".musiccontent5").click(function(){	
	$(".main").fadeIn();
	$(".main1").fadeOut();
});
$(".musiccontent6").click(function(){	
	$(".main").fadeOut();
	$(".main1").fadeIn();
});


});