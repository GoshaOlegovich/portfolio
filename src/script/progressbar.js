const progressbar = document.querySelector('.progressbar')

window.addEventListener('scroll', () => {
    let clientY = scrollY ;
    let documentHeigth = 1093;

    let scrollPosition = (clientY * 100) / documentHeigth;
    console.log(clientY, documentHeigth, scrollPosition);

    progressbar.style.width = `${scrollPosition}%`
})