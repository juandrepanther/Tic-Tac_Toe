const index = ['1','2','3','4','5','6','7','8','9']
let player = false //false is player1, true - player2
const player1 = []
const player2 = []
const winCheck = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let catsGame = 0

index.forEach(i=> {
    const el = document.createElement('div')
    const att = document.createAttribute('class')
    att.value = 'square'
    const idAtt = document.createAttribute('id')
    idAtt.value = `${i}`
    el.setAttributeNode(att)
    el.setAttributeNode(idAtt)
    const square = document.getElementById('wrapper')
    square.appendChild(el)
    square.addEventListener('click', getValue)
})

function getValue(e) {
        let value = e.target.id
        
        switch(player) {
            case false:
                player1.push(parseInt(value))
                player = true
                const cross = document.getElementById(value)
                cross.innerHTML = 'X'
                cross.style.color = 'red'
                const res = JSON.stringify(player1.sort((a,b) => a-b))
                winCheck.forEach(win => {
                    if (res == JSON.stringify(win)) {
                       alert('Player 1 (CROSS) has WON!'), location.reload() 
                    } else {
                        catsGame++
                        if (catsGame === 72) alert('Cats Game'), location.reload() 
                    }
                })
                break
            case true:
                player2.push(parseInt(value))
                player = false
                const cycle = document.getElementById(value)
                cycle.innerHTML = 'O'
                const res2 = JSON.stringify(player2.sort((a,b) => a-b))
                winCheck.forEach(win => {
                    if (res2 == JSON.stringify(win)) {
                        alert('Player 2 (CYCLE) has WON!'), location.reload() 
                     } else {
                        catsGame++
                         if (catsGame === 72) alert('Cats Game'), location.reload() 
                     }
                })
                break
        }
        console.log(catsGame)
    }

       