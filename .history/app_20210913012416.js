const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.left == '0px') {
        // document.body.style.backgroundColor = 'black';
        circle.style.left == '100px'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})