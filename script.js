$(document).ready(function() {
    $('.slider').bxSlider();
});


$(function() {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        autoHover: false,
        controls: true,
        nextText: 'next',
        prevText: 'prev',
        controls: false,

    });
});



new fullpage('#fullpage', {
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction) {
        console.log("Leaving section" + origin.index);
    },
});