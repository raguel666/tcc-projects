/* =========== Show & Hide Menu alt =========== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('uil-times')
        })
    }
}

showMenu('header-toggle', 'nav-menu')

/* =========== Active Links alt =========== */
const navLink = document.getElementById('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
