const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.ri == '0px') {
        // document.body.style.backgroundColor = 'black';
        circle.style.right = '0px'
    } else {
        circle.style.left = '0px'
    }
})