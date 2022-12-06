let theme_switcher = document.querySelector('.theme-switcher')
let icon = localStorage.getItem('icon');
let theme = localStorage.getItem('theme');

setTheme(theme, icon)
theme_switcher.addEventListener('click', () => {
    if (theme_switcher.getAttribute('name') == 'sunny-outline') {
        setTheme('dark', 'moon-outline');
        theme_switcher.setAttribute('name', 'moon-outline');
    } else {
        setTheme('light', 'sunny-outline');
        theme_switcher.setAttribute('name', 'sunny-outline');
    }
});

function setTheme(theme, icon){
    document.documentElement.className = theme;
    theme_switcher.setAttribute('name', icon);
    localStorage.setItem('theme', theme);
    localStorage.setItem('icon', icon);
    if(
        (theme_switcher.getAttribute('name') == '' && theme == '') ||
        (theme = null && icon == null)
    ){
        theme_switcher.setAttribute('name','moon-outline');
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });