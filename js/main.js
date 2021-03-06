$(document).ready(function () {

    $(".bar").each(function () {
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        }, 2000)
    });
    // Logo
    var $logo = $('#logo');
    if (location.href.indexOf("#") != -1) {
        if (location.href.substr(location.href.indexOf("#")) != '#about') {
            $logo.show();
        }
    }

    // Show logo
    $('#tab-container .tab a').click(function () {
        $logo.slideDown('slow');
    });
    // Hide logo
    $('#tab-about').click(function () {
        $logo.slideUp('slow');
    });

    function animMeter() {
        $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
        });
    }


    $('#tab-container').easytabs({
        animate: true,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabActiveClass: 'active'
    }).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
        if ($targetPanel.selector == '#resume') {
            animMeter();
        }
    });
    $('#lightSlider').lightSlider({
        gallery: false,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });

});