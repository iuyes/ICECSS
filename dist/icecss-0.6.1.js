jQuery(document).ready(function($) {

    //menu

    $('.ice-main-nav').on('click', function(event) {
        if ($(event.target).is('.ice-main-nav')) $(this).children('ul').toggleClass('is-visible');
    });
    $('.ice-close').click(function() {
	this.parentNode.style.display='none';
});
});
