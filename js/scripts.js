/* Author:

*/

/* Table of Content
==================================================
	#12  Tabs
	#36  Back to Top
	*/

/* Tabs
================================================== */

$('body').on('click', 'ul.tabs > li > a', function(e) {

    //Get Location of tab's content
    var contentLocation = $(this).attr('href');

    //Let go if not a hashed one
    if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});


/* Anchor animations
================================================== */

		// Scroll to top (works on and a tag with a class of 'back-to-top')
		$('a.back-to-top').click(function(e){
			 $('html, body').animate({scrollTop: '0px'}, 300, 'easeInOutExpo');	
				e.preventDefault();
		});
		
		// Scroll to top (works on and a tag with a class of 'straight-to-top')
		$('a.straight-to-top').click(function(e){
			 $('html, body').animate({scrollTop: '0px'}, 0);	
				e.preventDefault();
		});
		
		// Anchor Link (works on and a tag with a class of 'anchorLink' when href is an Css ID element)
		$(document).ready(function() {
			$("a.anchorLink").anchorAnimate();
		});
		jQuery.fn.anchorAnimate = function(settings) {
		
			settings = jQuery.extend({
				speed : 700
			}, settings);	
			
			return this.each(function(){
				var caller = this;
				$(caller).click(function (event) {	
					event.preventDefault();
					var locationHref = window.location.href;
					var elementClick = $(caller).attr("href");
					
					var destination = $(elementClick).offset().top;
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: (destination) - 0 }, settings.speed, 'easeInOutExpo', function() {
						/*window.location.hash = elementClick*/
					});
					return false;
				})
			})
		};
		
		
		


/* Correctley format form inputs --> Forename Surname
================================================== */

		$('.capital').change(function() {
            var arr = $(this).val().split(' '); 
            var result = ""; 
            for (var i=0; i<arr.length; i++){ 
                result+=arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
                if (i < arr.length-1) {
                    result += ' ';
                }
            } 
            $(this).val(result); 
        });

/* Input Placeholders for older browsers
================================================== */

		if(!Modernizr.input.placeholder){
			
				$('[placeholder]').focus(function() {
				  var input = $(this);
				  if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				  }
				}).blur(function() {
				  var input = $(this);
				  if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				  }
				}).blur();
				$('[placeholder]').parents('form').submit(function() {
				  $(this).find('[placeholder]').each(function() {
					var input = $(this);
					if (input.val() == input.attr('placeholder')) {
					  input.val('');
					}
				  })
				});
			
			}
