const circle = document.querySelector('.circle');
const box = document.querySelector('.box');
circle.addEventListener('click', e => {
    if (circle.style.left == '-6px') {
        document.body.style.backgroundColor = 'black';
        circle.style.left = '50px'
        box.style.backgroundColor = 'black';
    } else {
        circle.style.left = '-6px'
        document.body.style.backgroundColor = 'white';
        box.style.backgroundColor = 'white'
    }
})