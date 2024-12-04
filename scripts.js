/* ============ NAVBAR OPENING ============ */

function openMenu(){
    document.getElementById("navbar").classList.toggle("navbar-toggle");
}


/* ============ SCROLL ANIMATIONS ============ */

document.addEventListener('scroll', function() {
    // animation of pre code (rotation)
    const element1 = document.getElementById('rotateElement');
    const position1 = element1.getBoundingClientRect();

    if (position1.top < (window.innerHeight - window.innerHeight / 2) && position1.bottom >= window.innerHeight / 2) {
        element1.classList.add('rotate');
    }else{
        element1.classList.remove('rotate');
    }

    // black-bg titles animation on scroll
    const titles = document.querySelectorAll('.black-bg h1');
    titles.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight &&
            rect.bottom >= 0
        ){
            el.classList.add('titles-scroll');
        }else{
            el.classList.remove('titles-scroll');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Home elements scroll animation
    const homeElements = document.querySelectorAll('.home-scroll');

    function checkVisibility() {
        homeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if ((rect.top <= window.innerHeight && rect.bottom >= 0) || window.scrollY === 0) {
                el.classList.add('home-scroll-visible');
                } else {
                    el.classList.remove('home-scroll-visible');
            }
        });
    }

    setTimeout(() => {
        checkVisibility();
    }, 100); 


    // Elements visible on scrolling
    const elements = document.querySelectorAll('.hidden');

    function visibleElements(){
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight &&
                rect.bottom >= 0
            ){
                el.classList.add('visible');
            }else{
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('scroll', visibleElements);
})


window.onload = function() {
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }
  };