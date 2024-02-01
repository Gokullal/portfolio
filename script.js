$(document).ready(function() {

function sticky_relocate_2() {
    var window_top = $(window).scrollTop();

    // About Section
    var about_top = $('#about').offset().top;
    var about_end = $('#about .end').offset().top - 100;
    if (window_top >= about_top ) {
        $('#about .mobile-nav').addClass('sticky');
    } 
    else {
        $('#about .mobile-nav').removeClass('sticky');
        $('#about .mobile-nav h3').text('About');
    }

    // Relevant Experience Section
    var rel_experience_top = $('#rel-experience').offset().top;
    var rel_experience_end = $('#rel-experience .end').offset().top - 100;
    if (window_top >= rel_experience_top && window_top < rel_experience_end) {
        $('#about .mobile-nav h3').text('Relavent Experience');
    } 
    // else {
    //     $('#rel-experience .mobile-nav').removeClass('sticky');
    // }

    // Other Experience Section
    var other_experience_top = $('#other-experience').offset().top;
    var other_experience_end = $('#other-experience .end').offset().top - 100;
    if (window_top >= other_experience_top && window_top < other_experience_end) {
        $('#about .mobile-nav h3').text('Other Experience');
} 
    // else {
    //     $('#other-experience .mobile-nav').removeClass('sticky');
    // }

    // Certifications Section
    var certifications_top = $('#certifications').offset().top;
    var certifications_end = $('#certifications .end').offset().top - 100;
    if (window_top >= certifications_top && window_top < certifications_end) {
        $('#about .mobile-nav h3').text('Certifications');
    } 
    // else {
    //     $('#certifications .mobile-nav').removeClass('sticky');
    // }
}

$(window).scroll(sticky_relocate_2);




const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #011411 350px)`;
}

document.addEventListener("mousemove", handleMouseMove)
});