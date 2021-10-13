const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.left == '0') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white'
    }
})