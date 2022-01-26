$(document).ready(function() {
    $('.slider').bxSlider();
});


$(function() {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        autoHover: false,
        controls: true,

        infiniteLoop: true,
        auto: true,



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


// 탭 메뉴
$(document).ready(function() {


    //----------Select the first tab and div by default

    $('#vertical_tab_nav > ul > li > a').eq(0).addClass("selected");
    $('#vertical_tab_nav > div > article').eq(0).css('display', 'block');


    //---------- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function

    $('#vertical_tab_nav > ul').click(function(e) {

        if ($(e.target).is("a")) {

            /*Handle Tab Nav*/
            $('#vertical_tab_nav > ul > li > a').removeClass("selected");
            $(e.target).addClass("selected");

            /*Handles Tab Content*/
            var clicked_index = $("a", this).index(e.target);
            $('#vertical_tab_nav > div > article').css('display', 'none');
            $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();

        }

        $(this).blur();
        return false;

    });


}); //end ready

/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $("article").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li a").removeClass("selected");
    $("ul.tabs li a[rel^='" + d_activeTab + "']").addClass("selected");
});