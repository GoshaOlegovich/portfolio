
// Menu
const menuBtn = document.querySelector('.menu__btn');
const menuLinks = document.querySelector('.menu__links');


menuBtn.addEventListener('click', () => {   
    if(menuBtn.classList.contains('menu__btn--active')) {
        menuBtn.classList.remove('menu__btn--active')
        menuLinks.classList.remove('menu__links--active')
    } else {
        menuBtn.classList.add('menu__btn--active')
        menuLinks.classList.add('menu__links--active')
    }
})

//

const projectLinks = document.querySelectorAll('.project-card')
const projects = document.querySelectorAll('.project')
console.log(projects);
for (let i = 0; i < projectLinks.length; i++) {
    console.log(projectLinks[i].dataset.index);
    projectLinks[i].addEventListener('click', (e) => {
       let el = e.target.dataset.index;
        projectShow(el)
    })
}

const projectShow = (index) => {
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none"
        projects[index].style.display = "grid"
    }
} 