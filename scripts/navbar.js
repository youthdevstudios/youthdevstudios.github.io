/*$(document).ready(function() {
	$('body').append('<header id="navbar"></header>','<nav></nav>','<ul></ul>')
        $('body ul').append('<li></li>','<a href="index.html" class="hover">Home</a>')
        $('body ul').append('<li></li>','<a href="index.html" class="hover">Games</a>')
        $('body ul').append('<li></li>','<a href="index.html" class="hover">News</a>')
        $('body ul').append('<li></li>','<a href="index.html" class="hover">Contact</a>')
}*/

var $header = $('header'),
    $activateAtY = 20;

function headerDisappear() {
        $('header').slideUp();
}

function headerAppear() {
        $('header').slideDown();
}

$(window).scroll(function() {
	if ($(window).scrollTop() > activateAtY) {
		headerDisappear();
	} else {
                headerAppear();
	}
});
