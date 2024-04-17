(() => {
  document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero__left', 1, {
      y: 200,
    });

    const tlLeft = gsap.timeline();
    const tlRight = gsap.timeline({delay: .9});

    tlLeft.from('.hero__title, .hero__btn', 3.1, {opacity: 0});
    tlLeft.from('.hero__descr', 3.1, {opacity: 0}, `-=2.3`);

    const photoTween = {
      scale: .7,
      opacity: 0
    };

    tlRight.from('.photos__photo--1', .9, photoTween);
    tlRight.from('.photos__photo--2', .9, photoTween, `-=.5`);
    tlRight.from('.photos__photo--3', .9, photoTween, `-=.5`);
    tlRight.from('.photos__author', 2.1, {opacity: 0}, `-=1`);

    // menu
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.burger');
    const menuClose = document.querySelector('.close');

    const tlMenu = gsap.timeline({paused: true});

    const menuTween = {
      y: 15,
      opacity: 0,
    }

    tlMenu.from('.menu', 1, {opacity: 0});
    tlMenu.from('.menu__top', 1, {paddingTop: 100, opacity: 0, ease: 'slow'}, `-=1`);
    tlMenu.from('.nav__list', 1, menuTween, `-=1`);
    tlMenu.from('.menu__right, .social', 1, menuTween);

    menuOpen.addEventListener('click', () => {
      menu.classList.add('menu--open');
      tlMenu.play();
    });

    menuClose.addEventListener('click', () => {
      tlMenu.reverse();
      setTimeout(() => {
        menu.classList.remove('menu--open');
      }, 2000);
    });
  });
})();
