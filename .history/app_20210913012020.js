const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (document.body.style.backgroundColor == 'white') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white'
    }
})