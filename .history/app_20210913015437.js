const circle = document.querySelector('.circle');
const box = document.querySelector('.box');
const text = document.querySelector('p');
circle.addEventListener('click', e => {
    if (circle.style.left == '-6px') {
        document.body.style.backgroundColor = 'black';
        circle.style.left = '50px'
        box.style.backgroundColor = 'white'
        text.style.color = 'white';
        text.textContent = 'light mode'

    } else {
        circle.style.left = '-6px'
        document.body.style.backgroundColor = 'white';
        text.style.color = 'black';
        box.style.backgroundColor = 'black';
        text.textContent = 'dark mode';
    }
})