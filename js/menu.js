let $opened = $(".opened"),
    $closed = $(".closed"),
    $mobileNav = $(".mobile_nav"),
    $menu = $(".menu");

// Ham menu functionality
$menu.on("click", function(){
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
    $mobileNav.addClass("show_menu");
    $opened.show();
    $closed.hide();
}

function closeMenu() {
    $mobileNav.removeClass("show_menu");
    $opened.hide();
    $closed.show();
}