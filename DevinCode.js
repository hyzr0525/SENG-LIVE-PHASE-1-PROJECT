const BASE_URL = "http://localhost:3000/players"
const cardsContainer = document.getElementById("cards-container")



const getCards = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(function (cardsArray){
        cardsArray.forEach(function (cards){
            renderCards(cards)
        })
    })
}


const renderCards = (cards) => {
    const playerCard = document.createElement('div')
    playerCard.id = cards.id
    playerCard.className = "player-cards"

    const playerImg = document.createElement('img')
    playerImg.src = cards.image
    playerImg.alt = cards.name
    playerImg.id = 'players'

    const playerInfo = document.createElement('div')
    playerInfo.id = "info"
    

    const playerName = document.createElement('h2')
    playerName.textContent = cards.name
    playerName.class = 'player-font'

    const playerNumber = document.createElement('h4')
    playerNumber.textContent = `Number ${cards.number}`
    playerNumber.class = 'player-font'

    const playerTeam = document.createElement('h3')
    playerTeam.textContent = cards.team
    playerTeam.class = 'player-font'

    const createButton = document.createElement('button')
    createButton.innerHTML = "Player Info"
    createButton.className = "button"
    createButton.addEventListener('click', toggleHide)


    playerCard.append(playerName, playerImg, createButton, playerInfo)
    playerInfo.append(playerNumber, playerTeam)
    cardsContainer.appendChild(playerCard)

 
}



    

getCards()
 // player info button

const toggleHide = () => {
    let info = document.querySelectorAll('info')
    console.log(info)
    if (info.style.display === 'none') {
                     info.style.display === 'block'
                     } else {
                     info.style.display = "none"
                 }
}