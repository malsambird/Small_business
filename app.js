$(document).ready(function(){


$("#mobilenav").click(function(event){
	event.preventDefault();
	$("#mobilenavbox").slideToggle();
});

$(window).resize(function(){
	$("#mobilenavbox").hide();
});




});

