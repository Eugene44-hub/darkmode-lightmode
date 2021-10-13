const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.left == '0px') {
        // document.body.style.backgroundColor = 'black';
        circle.style.left = '50px'
    } else {
        circle.style.left = '0px'
    }
})