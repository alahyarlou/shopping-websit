const mobileMenu = document.getElementById('mobileMenu'),
    mobileMenuClose = document.getElementById('mobileMenuClose'),
    mobileNavbar = document.getElementById('mobileNavbar');


mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuClose.classList.remove('hidden');
    mobileNavbar.classList.remove('hidden');
})
mobileMenuClose.addEventListener('click', () => {
    mobileMenuClose.classList.add('hidden');
    mobileMenu.classList.remove('hidden');
    mobileNavbar.classList.add('hidden');
})