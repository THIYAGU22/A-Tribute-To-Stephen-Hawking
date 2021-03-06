// alert('works');
let didScroll;
let lastScrollPosition = 0;
let delta = 5;
let nav = $('.navbar');
let navHeight = nav.outerHeight();

// TODO: Set didScroll to true when user scrolls
$(window).scroll(function(e) {
    didScroll = true;
});
// TODO: Check if the user scrolled every 250ms
setInterval(checkScrolled, 250);

function checkScrolled() {
    if(didScroll) {
        hasScrolled();
        didScroll = false;
    }
}

function hasScrolled() {
    let currentScroll = $(this).scrollTop();
    // Make sure to fire only when the user scrolls more than delta
    if(Math.abs(lastScrollPosition - currentScroll) <= delta)
        return;

    // TODO: When user scrolls down, hide navbar
    // TODO: When user scrolls up, show navbar
    if(currentScroll > lastScrollPosition && currentScroll > navHeight) {
        // scroll down
        nav.addClass('hide-nav');
    } else {
        // scroll up
        // if user has not scrolled past document which is possible for mac users
        if(currentScroll + $(window).height() < $(document).height()) {
            nav.removeClass('hide-nav');
        }
    }
    lastScrollPosition = currentScroll;
    
}
