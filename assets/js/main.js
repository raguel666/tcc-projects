/* =========== Show Menu (Y-Axis) If Hidden =========== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/* =========== Show Menu =========== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* =========== Hide Menu =========== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =========== Remove Mobile Menu When Links Are Clicked =========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

/* =========== Skills Accordion =========== */

/* =========== Qualification Tabs =========== */

/* =========== Services Modal =========== */