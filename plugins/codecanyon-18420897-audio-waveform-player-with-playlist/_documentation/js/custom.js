(function($) {
    "use strict";

    /* ==============================================
    ANIMATION -->
    =============================================== */

    new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    }).init();

    /* ==============================================
    LIGHTBOX -->
    =============================================== */

    jQuery('a[data-gal]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: true,
        overlay_gallery: true,
        social_tools: false,
        deeplinking: false
    });

    /* ==============================================
    SCROLL -->
    =============================================== */

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
	
	
	
	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.intro a').each(function () {
			var currLink = $(this),
			refElement = $(currLink.attr("href"));
			if(typeof refElement !== 'undefined' && typeof refElement.position() !== 'undefined'){
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('#sidebar ul li').removeClass("active");
					currLink.parent().addClass("active");
				}
				else{
					currLink.parent().removeClass("active");
				}
			}
		});
	}

    /* ==============================================
    VIDEO FIX -->
    =============================================== */

    $(document).ready(function() {
        // Target your .container, .wrapper, .post, etc.
        $(".media").fitVids();
    });

    /* ==============================================
    VIDEO FIX -->
    =============================================== */

    $('.intro>li>a').click(function() {
       // $('.intro>li').removeClass('active');
       // $(this).parent().addClass('active');
    });
	
	$(document).on("scroll", onScroll);

})(jQuery);
