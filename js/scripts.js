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


/* Back to Top - Anchor
================================================== */

$('a.top').click(function(){
     $('html, body').animate({scrollTop: '0px'}, 500);
     return false;

});

