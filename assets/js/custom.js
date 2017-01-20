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

//Banner sidebar contact
jQuery(window).scroll(function(){
      var $this = jQuery(this);
     if ($this.scrollTop() > 300) {
      jQuery('.ad-contact').fadeIn();
      jQuery('.ad-contact').removeClass('hidden');
     } else {
      jQuery('.ad-contact').fadeOut();
     }
});
$('a.close-banner').on('click', function(e){
  //store hash
  var target = this.hash;
  e.preventDefault();

  $('.ad-contact').addClass('hidden');

});