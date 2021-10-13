const circle = document.querySelector('.circle');

circle.addEventListener('click', e => {
    if (circle.style.left == '0px') {
        // document.body.style.backgroundColor = 'black';
        circle.style.right = '100%'
    } else {
        circle.style.left = '0%'
    }
})