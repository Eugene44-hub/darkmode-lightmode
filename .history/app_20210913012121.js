const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if ( == 'white') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white'
    }
})