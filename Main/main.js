jQuery(document).ready(function($) {
	var navIcon = $("#navIcon");
	var navBar = $("#navBar");
	var container = $("#container");
	var nav = $(".nav");
	var navBcg = $("#navBcg");
	var menu = $(".menu");
	var nav = $(".nav");

	navIcon.on('click', function () {

		event.stopPropagation();

		nav.delay( 100 ).fadeIn();
		menu.delay( 100 ).fadeIn();

		navBcg.css({
			width: '100vw'
		});

		navBar.css({
			width: '14vw'
		});

		container.css({
			"background-color": '#bdbdbd'
		});

		$("body").css({
			position: 'fixed'
		});
		
        if($(window).width() <= 414) {
           	navBar.css({
			width: '66vw'
			});
        } else {
           	navBar.css({
			width: '14vw'
		});
       	}
	});

	$("#container").click( function(){
		nav.delay( 70 ).fadeOut();
		menu.delay( 70 ).fadeOut();

		navBcg.css({
			width: '0'
		});
		navBar.css({
			width: '0'
		});
	   	container.css({
			"background-color": 'transparent'
		});
		$("body").css({
			position: 'absolute'
		});
	});
	
});
