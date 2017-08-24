/**
 * Section nav (1.0, 2.0, 3.0, etc)
 */
$(".my_row div, .nav_row").on("click", function(){
    toggleMenu($(this));
    activeIcon($(this));
    getTitle($(this));
    getSVG($(this));
    getBackground($(this));
});


// add/remove class to scale icon on desktop_nav
function activeIcon(clicked) {
    let sectionClassName = getSectionClassName(clicked);
    let $myRow = $(".my_row");
    /**
     * Continue to activate clicked icon while screen size is mobile
     */
    if ($(window).width() < 768) {
        $myRow.find(".obj_active").removeClass("obj_active");
        $myRow.find(sectionClassName).addClass("obj_active");
        // open/close menu when clicking
    } else {
        $(clicked).parent().find(".obj_active").removeClass("obj_active");
        $(clicked).addClass("obj_active");
    }
}

/**
 *
 * @param clicked the element clicked
 * @returns section class name}
 * Should be first class, but just in case it isn't
 */
function getSectionClassName(clicked) {
    switch(true) {
        case ($(clicked).hasClass("wos")):
            return ".wos";
            break;
        case (clicked.hasClass("oos")):
            return ".oos";
            break;
        case (clicked.hasClass("security")):
            return ".security";
            break;
        case (clicked.hasClass("sts")):
            return ".sts";
            break;
        default:
            return ".op";
    }
}

// change main section title based on clicked section
function getTitle(clicked) {
    let $title = $(".section_heading h2");
    switch(true) {
        case ($(clicked).hasClass("wos")):
            $title.text("1.0 Windows Operating Systems");
            break;
        case (clicked.hasClass("oos")):
            $title.text("2.0 Other Operating Systems and Technologies");
            break;
        case (clicked.hasClass("security")):
            $title.text("3.0 Security");
            break;
        case (clicked.hasClass("sts")):
            $title.text("4.0 Software Troubleshooting");
            break;
        default:
            $title.text("5.0 Operational Procedures");
    }
}

function getSVG(clicked) {
    let $mobileSVG = $(".mobile_active svg");
    switch(true) {
        case ($(clicked).hasClass("wos")):
            $mobileSVG.html(wosSVG);
            break;
        case (clicked.hasClass("oos")):
            $mobileSVG.html(oosSVG);
            break;
        case (clicked.hasClass("security")):
            $mobileSVG.html(securitySVG);
            break;
        case (clicked.hasClass("sts")):
            $mobileSVG.html(stsSVG);
            break;
        default:
            $mobileSVG.html(opSVG);
    }
}

function getBackground(clicked) {
    let $svgContainer = $(".section_svg_container");
    switch(true) {
        case ($(clicked).hasClass("wos")):
            $svgContainer.css('background', wosBG);
            break;
        case (clicked.hasClass("oos")):
            $svgContainer.css('background', oosBG);
            break;
        case (clicked.hasClass("security")):
            $svgContainer.css('background', securityBG);
            break;
        case (clicked.hasClass("sts")):
            $svgContainer.css('background', stsBG);
            break;
        default:
            $svgContainer.css('background', opBG);
    }
}