const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (cir) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white'
    }
})