const board = document.querySelector('#board');
const colors = ['red', 'blue', 'green', 'white', 'purple', 'yellow', 'pink', 'black', 'orange']
const squares_number = 500;

for (let i = 0; i < squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square)
    )

    square.addEventListener('mouseleave', () => 
    removeColor(square)
)

    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.backgroundColor = 'grey'
    element.style.boxShadow = `0 0 2px grey`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}