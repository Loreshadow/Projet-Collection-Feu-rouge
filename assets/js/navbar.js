document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.navbar-burger');
  const menuResponsive = document.querySelector('.navbar-menu-responsive');

  if (burger && menuResponsive) {
    burger.addEventListener('click', function () {
      menuResponsive.classList.toggle('navbar-open');
      burger.classList.toggle('active');
    });
  }
});