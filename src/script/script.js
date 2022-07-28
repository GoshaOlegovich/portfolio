const Header = document.querySelector('.header')
const links = document.querySelectorAll('.header__link')
const Services = document.querySelector('.services')

let servicesPos = Services.getBoundingClientRect().top




window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    if (scrollY >= servicesPos) {
        Header.style.top = `${servicesPos}px`;
        setTimeout(() => {
            Header.style.position = 'fixed';
            Header.style.top = `0`;
        }, 100);
       
        console.log('ok');
    } else if (scrollY < servicesPos - 200){
        Header.style.position = 'relative';
    }
})



window.addEventListener('scroll', () => {
    let scrollY = window.scrollY

    for (let i = 0; i < links.length; i++ ) {
        links[i].classList.remove('header__link-active')
        
        if (scrollY < servicesPos - 100) {
            links[0].classList.add('header__link-active')
        }
        if (scrollY >= servicesPos - 100) {
            links[1].classList.add('header__link-active')
        }
    }

})