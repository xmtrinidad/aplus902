// TODO refactor if possible

/**
 * Section nav (1.0, 2.0, 3.0, etc)
 */
$(".my_row div").on("click", function(){
    $(this).parent().find(".obj_active").removeClass("obj_active");
    $(this).addClass("obj_active");
    getTitle($(this));
});

$(".nav_row").on("click", function(){
    getTitle($(this));
    getBackground($(this));
    getSVG($(this));
    toggleMenu($(this));

});

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




