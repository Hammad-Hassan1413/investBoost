const input = document.querySelector('.support__email-input');
input.focus();
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.site-header__navbar');
  const logoImg = document.querySelector('.site-header__logo img');
  const hamburgerImg = document.querySelector('.site-header__hamburger img');

  if (window.scrollY > 10) {
    navbar.classList.add('site-header__navbar--scrolled');
    logoImg.src = 'assets/images/logo-dark.svg';
    hamburgerImg.src = 'assets/images/hamburger-dark.svg';
  } else {
    navbar.classList.remove('site-header__navbar--scrolled');
    logoImg.src = 'assets/images/logo.svg';
    hamburgerImg.src =
      'assets/images/burger-list-menu-navigation-svgrepo-com.svg';
  }
});

const hamburger = document.querySelector('.site-header__hamburger');
const sideMenu = document.querySelector('.sidebar__menu');
const cancel = document.querySelector('.sidebar__cancel');
const overlay = document.querySelector('.site-overlay');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('sidebar__menu--show');
  overlay.classList.remove('site-overlay--hidden');
  overlay.classList.add('site-overlay--active');
  document.body.classList.add('no-scroll');
});

function closeSidebar() {
  sideMenu.classList.remove('sidebar__menu--show');
  overlay.classList.remove('site-overlay--active');
  overlay.classList.add('site-overlay--hidden');
  document.body.classList.remove('no-scroll');
}

cancel.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
