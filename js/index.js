// TODO refactor if possible

$(".objective_title").on("click", function(){
    if ($(window).width() >= 768) {
        return;
    }
    $(this).next().toggleClass("show_info");
});






