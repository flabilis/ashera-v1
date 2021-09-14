$(document).ready(function() {
    "use strict";
	
	// Peloader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

  //Sticky Nav
		$(".cripto_nav").sticky({ topSpacing: 0 });
  
  //Scroll Spy    
      $('body').scrollspy({ target: '.cripto_nav' })

  //Smoth scroll
    $("nav a").on('click', function(event) {
      if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       $('html, body').animate({
       scrollTop: $(hash).offset().top
       }, 1500, function(){
       window.location.hash = hash;
       });
      } // End if
    });

    new WOW().init();
});
