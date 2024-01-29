$(document).ready(function() {

function sticky_relocate_2() {
    var window_top = $(window).scrollTop();

    // About Section
    var about_top = $('#about').offset().top;
    var about_end = $('#about .end').offset().top;
    if (window_top >= about_top && window_top < about_end) {
        $('#about .mobile-nav').addClass('sticky');
    } else {
        $('#about .mobile-nav').removeClass('sticky');
    }

    // Relevant Experience Section
    var rel_experience_top = $('#rel-experience').offset().top;
    var rel_experience_end = $('#rel-experience .end').offset().top;
    if (window_top >= rel_experience_top && window_top < rel_experience_end) {
        $('#rel-experience .mobile-nav').addClass('sticky');
    } else {
        $('#rel-experience .mobile-nav').removeClass('sticky');
    }

    // Other Experience Section
    var other_experience_top = $('#other-experience').offset().top;
    var other_experience_end = $('#other-experience .end').offset().top;
    if (window_top >= other_experience_top && window_top < other_experience_end) {
        $('#other-experience .mobile-nav').addClass('sticky');
    } else {
        $('#other-experience .mobile-nav').removeClass('sticky');
    }

    // Certifications Section
    var certifications_top = $('#certifications').offset().top;
    var certifications_end = $('#certifications .end').offset().top - 100;
    if (window_top >= certifications_top && window_top < certifications_end) {
        $('#certifications .mobile-nav').addClass('sticky');
    } else {
        $('#certifications .mobile-nav').removeClass('sticky');
    }
}

$(window).scroll(sticky_relocate_2);

// Select the element with the class "focus"
let focus = document.querySelector(".focus");

// Listen for the "mousemove" event on the document
document.addEventListener("mousemove", function(e) {
    // Get the X and Y coordinates of the mouse cursor
    let x = e.pageX;
    let y = e.pageY;

    // Update the background of the ".focus" element with a radial gradient
    focus.style.background = "radial-gradient(circle at " + x + "px " + y + "px, rgba(190, 255, 255, 0.2), transparent 40%)";
});

const spotlight = document.querySelector(".spotlight");
document.addEventListener("mousemove",(e) => {
    let x = e.pageX;
    let y = e.pageY;

    spotlight.style.top = y + "px";
    spotlight.style.left = x + "px";
    
});

});
