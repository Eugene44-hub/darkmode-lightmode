const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.left == '0px') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white'
    }
})