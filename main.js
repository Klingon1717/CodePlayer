var menuHeight = $("#menu").height();
var windowHeight=$(window).height();
var codeContainerHeight=windowHeight-menuHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggle").click(function(){
	$(this).toggleClass("selected");
	var activeDiv=$(this).html();
	alert(activeDiv);
});
