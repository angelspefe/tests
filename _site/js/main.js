// - - - - - - - - - OWL CAROUSEL

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    responsive:{
        0:{
            items:1,
            // autoHeight:true
        },
        600:{
            items:1,
          // autoHeight:true
        },
        1000:{
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:false,
          // autoHeight:true
        }
    }
  })
});



// - - - - - - - - - MAGNIFIC GALLERY

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});
