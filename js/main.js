$('nav').onePageNav();

// When user clicks the menu button
$('#menu-button').click(function() {
	// Toggle the nav
	$('nav').slideToggle();

	$('body').toggleClass('move-down');
});

var menu = $('nav');

$(window).resize(function(){
   var w = $(window).width();
   if(w > 768 && menu.is(':hidden')) {
       menu.removeAttr('style');
   }
});