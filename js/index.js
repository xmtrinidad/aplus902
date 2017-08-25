// TODO refactor if possible


// Dropdown objectives
$(".objective_title").on("click", function(){
    if ($(window).width() >= 768) {
        return;
    }
    $('i', this).toggleClass("arr_down");
    $(this).next().toggleClass("show_info");
});






