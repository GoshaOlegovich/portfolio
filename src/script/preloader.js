const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.style.display = 'block'
    
    setTimeout(() => {
        preloader.style.display = 'none'
        console.log('end')
    }, 3000);
}) 