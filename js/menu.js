// Ham menu functionality
$(".menu").on("click", function(){
    toggleMenu($(this));
});

function toggleMenu(ele) {
    if ($(ele).hasClass("closed")) {
        openMenu();
    } else {
        closeMenu()
    }
}

function openMenu() {
    $(".mobile_nav").addClass("show_menu");
    $(".opened").show();
    $(".closed").hide();
}

function closeMenu() {
    $(".mobile_nav").removeClass("show_menu");
    $(".opened").hide();
    $(".closed").show();
}