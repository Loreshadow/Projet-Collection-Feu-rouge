document.addEventListener('DOMContentLoaded', function () {
  const headerTop = document.getElementById('main-header');
  const headerBottom = document.getElementById('user-header');
  const navbarToggle = document.getElementById('navbar-toggle');
  const dropdownList = document.getElementById('navbar-dropdown-list');
  const mainLinks = document.getElementById('main-navbar-links');

  // gestion de l'effet pour la nav du haut 
  document.addEventListener('scroll', function() {
    if(window.scrollY > 30) {
      headerTop.classList.add('navbar-scrolled');
      if (mainLinks) mainLinks.style.display = 'none';
      // on affiche plus la navv du bas au scroll (sinon c'est chiant a gérer)
      if (headerBottom && window.innerWidth > 700) {
        headerBottom.style.display = 'none';
      }
    } else {
      headerTop.classList.remove('navbar-scrolled');
      if (mainLinks && window.innerWidth > 900) mainLinks.style.display = '';
      if (dropdownList) dropdownList.classList.remove('open');
      if (navbarToggle) navbarToggle.classList.remove('active');
      // affiche la nav du bas si on monte sauf si c'est trop petit
      if (headerBottom && window.innerWidth > 700) {
        headerBottom.style.display = 'block';
      }
    }
  });

  // bon bah on ouvre ou on ferme le menu
  if (navbarToggle && dropdownList) {
    navbarToggle.addEventListener('click', function () {
      dropdownList.classList.toggle('open');
      navbarToggle.classList.toggle('active');
    });
  }

  // si on  clique pas sur la nav ou un des ses enfant on ferme le menu (C'est magique Harry !)
  document.addEventListener('click', function(e) {
    if (
      dropdownList &&
      navbarToggle &&
      !navbarToggle.contains(e.target) &&
      !dropdownList.contains(e.target)
    ) {
      dropdownList.classList.remove('open');
      navbarToggle.classList.remove('active');
    }
  });

  // responsive des navs
  function checkScreenSize() {
    if (window.innerWidth <= 700) {
      // et pouf la magie harry plus de nav du bas( sinon le zbeul ce sera harry)
      if (headerBottom) headerBottom.style.display = 'none';
    } else if (window.innerWidth <= 900) {
      // menu burger en haut et nav classic en bas
      if (mainLinks) mainLinks.style.display = 'none';
      if (!headerTop.classList.contains('navbar-scrolled')) {
        if (headerBottom) headerBottom.style.display = 'block';
      }
    } else {
      // nav de base et affichage de la nav du bas aussi
      if (!headerTop.classList.contains('navbar-scrolled')) {
        if (mainLinks) mainLinks.style.display = '';
        if (dropdownList) dropdownList.classList.remove('open');
        if (navbarToggle) navbarToggle.classList.remove('active');
        if (headerBottom) headerBottom.style.display = 'block';
      }
    }
  }

  // on check la taille de notre bel ecran
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});