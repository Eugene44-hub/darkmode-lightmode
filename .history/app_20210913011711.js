const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    document.body.style.backgroundColor = 'black';
    if (document.body.style.backgroundColor == 'black')
        document.body.style.backgroundColor = 'white'
})