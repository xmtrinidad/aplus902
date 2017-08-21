let $toTopBtn = $(".to_top");
// scroll to top
$toTopBtn.on("click", function(){
    $("body").animate({ scrollTop: 0 }, 500);
});

// hide/show to_top button depending on scroll position
$(window).scroll(function(){
    let position = $(document).scrollTop();
    if (position >= 400) {
        $toTopBtn.show();
    } else {
        $toTopBtn.hide();
    }
});