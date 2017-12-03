$(document).ready(function(){
$(".homecover").hide();
$(".view").hide();

$(".content4").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'120',
	opacity: '1'
	}).attr("src", "../project/img/thatsthespirit.png");
	$(".desc").html("Bring Me The Horizon<br>That's The Spirit");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content5").click(function(){
 	$(".zoom").css({
	height:'345',
	width:'auto',
	left:'10',
	opacity: '1'
	}).attr("src", "../project/img/sunset.gif");
	$(".desc").html("Sunset.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content6").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'120',
	opacity: '1'
	}).attr("src", "../project/img/sws.jpg");
	$(".desc").html("...");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content7").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'175',
	opacity: '1'
	}).attr("src", "../project/img/cat.jpg");
	$(".desc").html("Cat.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content10").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'125',
	opacity: '1'
	}).attr("src", "../project/img/doge.jpg");
	$(".desc").html("Much Wow.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content11").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'50',
	opacity: '1'
	}).attr("src", "../project/img/potato.jpg");
	$(".desc").html("Chips.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content13").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'115',
	opacity: '1'
	}).attr("src", "../project/img/apple.jpg");
	$(".desc").html("Apples.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content14").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'95',
	opacity: '1'
	}).attr("src", "../project/img/onions.jpg");
	$(".desc").html("Onions.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content16").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'95',
	opacity: '1'
	}).attr("src", "../project/img/batulao.jpg");
	$(".desc").html("Mt. Batulao, March 5, 2016.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content18").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'95',
	opacity: '1'
	}).attr("src", "../project/img/eclipse.jpg");
	$(".desc").html("Solar Eclipse.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".content20").click(function(){
 	$(".zoom").css({
	height:'370',
	width:'auto',
	left:'125',
	opacity: '1'
	}).attr("src", "../project/img/pizza.jpg");
	$(".desc").html("Pizza.");
	$(".homecover").css({
	"opacity": ".4"
	}).show();
	$(".view").css({
	"opacity": "1"
	}).show();
});

$(".homecover").click(function(){
	$(".zoom").attr("src", "");
	$(".desc").html("");
	$(".homecover").css({
	"opacity": "0"
	}).hide();
	$(".view").css({
	"opacity": "0"
	}).hide();
});
	
});

