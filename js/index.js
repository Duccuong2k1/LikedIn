var toggleMenu = document.querySelector('.setting-menu');
var btnDark = document.querySelector('#dark-btn');

function settingsMenuToggle() {
    toggleMenu.classList.toggle('setting-menu-height');
}
btnDark.onclick = function() {
    btnDark.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}