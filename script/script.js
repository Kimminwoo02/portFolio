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



$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollHorizontally: true
    });
});