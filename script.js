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

    //Education
    var rel_experience_top = $('#education').offset().top;
    var rel_experience_end = $('#education .end').offset().top - 100;
    if (window_top >= rel_experience_top && window_top < rel_experience_end) {
        $('#about .mobile-nav h3').text('Education');
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





// active
const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', navHighlighter);

function navHighlighter(event) {
  // Check if the scroll event target is the document.body
  if (event.target !== document.body) {
    return;
  }

  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');

    const link = document.querySelector(`.nav a[href="#${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else {
      console.error(`Link not found for section with ID: ${sectionId}`);
    }
  });
}




//scroll

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  // Removing 'active' class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Adding 'active' class to the clicked link
  this.classList.add('active');

  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error(`Element with ID ${targetId} not found.`);
  }
}


});