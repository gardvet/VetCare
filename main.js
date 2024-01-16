function onScroll() {
    if (scrollY > 0){
        navega.classList.add('scroll')
    } else {
        navega.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}