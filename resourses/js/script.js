$(document).ready(function() {
    $(".about-section").waypoint(function(direction) {
        if(direction=="down") {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    });

    $(".js--scroll-to-contact").click(function() {
        $('html,body').animate({scrollTop:$('.js--contact-section').offset().top},1000);
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    $(".js--about-section").waypoint(function(direction) {
        $(".js--about-box").addClass("animate__animated animate__fadeIn");    
    }, {
        offset: '50%'
    });

    $(".js--services-section").waypoint(function(direction) {
        $(".js--service-box").addClass("animate__animated animate__zoomIn");    
    }, {
        offset: '100%'
    });

    $(".js--packages-section").waypoint(function(direction) {
        $(".js--package-box").addClass("animate__animated animate__pulse");    
    });

});

function toggleNav() {
    var nav = document.getElementById("myNav");
    if (nav.style.width === "100%") {
        nav.style.width = "0";
    } else {
        nav.style.width = "100%";
    }
}

function closeNav() {
    var nav = document.getElementById("myNav");
    nav.style.width = "0";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function() {
    var mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeNav();
        });
    });
});