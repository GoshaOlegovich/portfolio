

const cases = document.querySelector('.portfolio__cards')
const projects = document.querySelectorAll('.portfolio__project')
cases.addEventListener('click', (e) => {
    let el = +e.target.dataset.num;
    closeopen(el)
})


const closeopen = (id) => {
    for (let i = 0; i < projects.length; i ++) {
        projects[i].style.display = 'none'
        projects[id].style.display = 'block'
    }
}