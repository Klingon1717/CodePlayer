var menuHeight = $("#menu").height();
var windowHeight=$(window).height();
var codeContainerHeight=windowHeight-menuHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggle").click(function(){
	$(this).toggleClass("selected");
	var activeDiv=$(this).html();
	$("#"+activeDiv+"Container").toggle();
	var showDiv=$(".codeContainer").filter(function(){
		return($(this).css("display") != "none");

	}).length;
	var width=100/showDiv;
	$('.codeContainer').width(width+"%");
});
$('#run').click(function(){
	$("iframe").contents().find("html").html($("#htmlCode").val());
});
