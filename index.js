const board = document.getElementById('board')
const SQUARES_NUMBER = 700
const randomColor = []

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    board.append(square)

    square.addEventListener('mouseover',setColor)
    square.addEventListener('mouseleave',removeColor)
}

function setColor(e) {
    const elem = e.target
    elem.style.backgroundColor = 'white'
    elem.style.boxShadow = '0 0 10px white'
}
function removeColor(e) {
    const elem = e.target
    elem.style.backgroundColor = 'transparent'
    elem.style.boxShadow = '0 0 3px grey'
}