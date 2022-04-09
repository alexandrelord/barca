/*----- start functions -----*/

/*----- constants -----*/
const player1 = 1
const player2 = -1

/*----- app's state (variables) -----*/
let board

/*----- cached element references -----*/
// const squareEls = document.querySelectorAll('.square')

/*----- event listeners -----*/
// squareEls.forEach(function(squareEl) {
//     squareEl.addEventListener('click', function(){
//         if (squareEl.style.backgroundImage) squareEl.style.backgroundColor = 'green'
//     })
// })


/*----- functions -----*/
initialize()

function initialize() {
    createBoardArray()
    setUpPieces()
    renderBoard()
    renderOasis()
    renderPieces()
}
// find elegant method to create an nth-dimensional array
function createBoardArray() {
    board = [
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }],
      [{ player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }, { player: null, piece: null, predator: null, pray: null, occupied: null }]]
  }

function setUpPieces() {
    // copies properties from source object to target object => Object.assign(target, source)
    // Player 1
    Object.assign(board[0][4], {player: 1, piece: 'E', occupied: true})
    Object.assign(board[0][6], {player: 1, piece: 'E', occupied: true})
    Object.assign(board[1][3], {player: 1, piece: 'L', occupied: true})
    Object.assign(board[1][6], {player: 1, piece: 'L', occupied: true})
    Object.assign(board[1][4], {player: 1, piece: 'M', occupied: true})
    Object.assign(board[1][5], {player: 1, piece: 'M', occupied: true})
    // Player 2
    Object.assign(board[9][4], {player: -1, piece: 'E', occupied: true})
    Object.assign(board[9][5], {player: -1, piece: 'E', occupied: true})
    Object.assign(board[8][3], {player: -1, piece: 'L', occupied: true})
    Object.assign(board[8][6], {player: -1, piece: 'L', occupied: true})
    Object.assign(board[8][4], {player: -1, piece: 'M', occupied: true})
    Object.assign(board[8][5], {player: -1, piece: 'M', occupied: true})
    

    
}

function renderBoard() {
    let counter = 0
    // create row elements
    for (let i = 0; i < 10; ++i) {
        let row = document.createElement('div')
        row.classList.add('row')
        // create square elements
        for (let j = 0; j < 10; j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            square.setAttribute('id', counter)
            // for each new row; reverse color scheme
            if (i % 2) {
                if (j % 2) {
                    square.style.backgroundColor = '#f5deb3'
                } else {
                    square.style.backgroundColor = '#d9a420'
                }
            } else {
                if (j % 2) {
                    square.style.backgroundColor = '#d9a420'
                } else {
                    square.style.backgroundColor = '#f5deb3'
                }
            }
            row.appendChild(square)
            counter++
        }
        document.querySelector('.board').appendChild(row)
    }
    
}

function renderOasis() {
    let oasisEls = [ document.getElementById('33'), document.getElementById('36'), document.getElementById('63'), document.getElementById('66')]
    oasisEls.forEach(oasisEl => {
        oasisEl.style.backgroundColor = '#2387bf'
        oasisEl.style.borderRadius = '50%'
    })   
}

function renderPieces() {
    // render pieces and add them to starting squares
    let startBlackEles = [document.getElementById('4'), document.getElementById('5')]
    startBlackEles.forEach(ele => ele.style.backgroundImage = 'url("img/black/ELEFANTE.png")')
    let startBlackLions = [document.getElementById('13'), document.getElementById('16')]
    startBlackLions.forEach(ele => ele.style.backgroundImage = 'url("img/black/LEON.png")')
    let startBlackMice = [document.getElementById('14'), document.getElementById('15')]
    startBlackMice.forEach(ele => ele.style.backgroundImage = 'url("img/black/RATON.png")')
    
    let startWhiteEles = [document.getElementById('94'), document.getElementById('95')]
    startWhiteEles.forEach(ele => ele.style.backgroundImage = 'url("img/white/ELEFANTE_BLANCO.png")')
    let startWhiteLions = [document.getElementById('83'), document.getElementById('86')]
    startWhiteLions.forEach(ele => ele.style.backgroundImage = 'url("img/white/LEON_BLANCO.png")')
    let startWhiteMice = [document.getElementById('84'), document.getElementById('85')]
    startWhiteMice.forEach(ele => ele.style.backgroundImage = 'url("img/white/RATON_BLANCO.png")')    
}