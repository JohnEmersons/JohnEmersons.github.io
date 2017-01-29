(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


		/*
		$('.our-story-area').YTPlayer({
			fitToBackground: true,
			videoId: 'LSmgKRx5pBo'
		});
		*/
		
		
		$(".testimonial-list").lightSlider({
			item: 1,
			gallery: true,
			thumbItem:5,
			
		}); 

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	