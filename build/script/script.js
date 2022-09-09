
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.style.display = 'block'
    
    setTimeout(() => {
        preloader.style.display = 'none'
        console.log('end')
    }, 3000);
}) 
const progressbar = document.querySelector('.progressbar')

window.addEventListener('scroll', () => {
    let clientY = scrollY ;
    let documentHeigth = 1093;

    let scrollPosition = (clientY * 100) / documentHeigth;
    console.log(clientY, documentHeigth, scrollPosition);

    progressbar.style.width = `${scrollPosition}%`
})

const themeSwitchBtn = document.querySelector('.header__theme'),
      themeDayIco = document.querySelector('.theme-btn__theme_day'),
      themeNightIco = document.querySelector('.theme-btn__theme_nigth');
// const activeThemeClass = 'theme-btn__active', 'header__theme__active';
let currentTheme = true;

themeSwitchBtn.addEventListener('click', () => {

    if (currentTheme === true) {
        currentTheme = false;
        themeNightIco.classList.remove('theme-btn__active');
        themeSwitchBtn.classList.add('header__theme__active');
        themeDayIco.classList.add('theme-btn__active');
        themCheck()
        console.log('Day');
    }
    else if (currentTheme === false) {
        currentTheme = true;
        themeSwitchBtn.classList.remove('header__theme__active');
        themeDayIco.classList.remove('theme-btn__active');
        themeNightIco.classList.add('theme-btn__active');
        themCheck()
        console.log('Nigth');
    }
})


// 
const about = document.querySelector('.about')



const themCheck = () => {
    if (currentTheme === true) {
        about.classList.remove('about__theme_nigth')
        about.classList.add('about__theme_day')

    }
    else if (currentTheme === false) {
        about.classList.remove('about__theme_day')
        about.classList.add('about__theme_nigth')
    }
}
