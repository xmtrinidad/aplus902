let $desktopIcons = $(".my_row div");
let $mobileIcons = $(".nav_row");

/**
 * Section nav (1.0, 2.0, 3.0, etc)
 */
$desktopIcons.add($mobileIcons).on("click", function(){
    let $this = $(this);
    toggleMenu($this);
    activeIcon($this);
    getTitle($this);
    getSVG($this);
    getBackgroundColor($this);
    getSection($this);
    toTopAndClose()
});

function toTopAndClose() {
    let position = $(document).scrollTop();
    // Prevent scroll to top if viewport is less than 300 height
    if (position <= 300 && $(window).width() >= 768) {
        return;
    }
    window.scrollTo(0, 0);

    // Close open dropdowns when switching objectives
    $(".show_info").removeClass("show_info");
}

// background color for objective numbers and svg on mobile
function getBackgroundColor(clicked) {
    let $objectiveNumber = $(".objective_number");
    let $svgContainer = $(".section_svg_container");
    let $sectionTitle = $(".section_heading h2");
    switch(true) {
        case ($(clicked).hasClass("wos")):
            $objectiveNumber.css('background', wosBG);
            $svgContainer.css('background', wosBG);
            $sectionTitle.css('color', wosBG);
            break;
        case (clicked.hasClass("oos")):
            $objectiveNumber.css('background', oosBG);
            $svgContainer.css('background', oosBG);
            $sectionTitle.css('color', oosBG);
            break;
        case (clicked.hasClass("security")):
            $objectiveNumber.css('background', securityBG);
            $svgContainer.css('background', securityBG);
            $sectionTitle.css('color', securityBG);
            break;
        case (clicked.hasClass("sts")):
            $objectiveNumber.css('background', stsBG);
            $svgContainer.css('background', stsBG);
            $sectionTitle.css('color', stsBG);
            break;
        default:
            $objectiveNumber.css('background', opBG);
            $svgContainer.css('background', opBG);
            $sectionTitle.css('color', opBG);
    }
}

// switch out sections depending on icon clicked
function getSection(clicked) {
    let sectionClassName = getSectionClassName(clicked);
    let $section = $("section");
    $section.parent().find(".curr").removeClass("curr");
    $section.parent().find(sectionClassName).addClass("curr");
}

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

