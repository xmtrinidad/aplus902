let dropdownOpen = false;

// prevent drop down if link click on title
$(".objective_title a").on("click", function(e){
    e.stopPropagation();
});

// Dropdown objectives
$(".objective_title").on("click", function(){
    if ($(window).width() >= 768) {
        return;
    }
    console.log($(this));
    $('i', this).toggleClass("arr_down");
    $(this).next().toggleClass("show_info");
});






