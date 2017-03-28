(function($) {

	// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	});


	/* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '.navbar', offset: 40});

    /* ======= Fixed header when scrolled ======= */
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#main-nav').addClass('navbar-fixed-top');
         }
         else {
             $('#main-nav').removeClass('navbar-fixed-top');
         }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

	    //store hash
	    var target = this.hash;

	    e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
		        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
		$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

    // Initialize WOW.js Scrolling Animations (animate.css & wow.js)
    new WOW().init();


})(jQuery);


//Scrollup
//This function gets smooth page scroll
jQuery(window).scroll(function(){
	    var $this = jQuery(this);
       if ($this.scrollTop() > 100) {
       	jQuery('.scrollup').fadeIn();
       } else {
       	jQuery('.scrollup').fadeOut();
       }
});

//Banner pop-up contact

var amountScrolled = 700;
var bannerClosed = false;
var banner = $('div.banner-popup');
var close = $("a.close-banner");
var open = $("a.open-banner");

$(window).scroll(function() {
    if (!bannerClosed && !banner.hasClass('popout') && $(window).scrollTop() > amountScrolled) {
        banner.addClass('popout');
        banner.animate({
            right: 0
        }, {
            duration: 'slow',
            complete: function() {
                close.click(function() {
                    bannerClosed = true;
                    closeBanner();
                });
            }
        });
    } else if (banner.hasClass('popout') && $(window).scrollTop() < amountScrolled) {
      //closeBanner();
    }
});

function closeBanner() {
    banner.animate({ right: -100 }, 'fast');
    $(this).unbind("click");
    banner.removeClass('popout');
    banner.find('a.open-banner').removeClass('hidden');

    banner.find('a.close-banner').addClass('hidden');
    banner.find('p').addClass('hidden');

    open.click(function() {
      bannerClosed = false;
      openBanner();
    });
}

function openBanner() {
  banner.animate({ right: 0 }, 'fast');
  $(this).unbind("click");
  banner.addClass('popout');
  banner.find('a.open-banner').addClass('hidden');
  banner.find('a.close-banner').removeClass('hidden');
  banner.find('p').removeClass('hidden');
}