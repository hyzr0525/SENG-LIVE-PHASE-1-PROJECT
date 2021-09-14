
const BASE_URL = "http://localhost:3000/players"
const cardsContainer = document.getElementById("cards-container")

getCards()

function getCards(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(function (cardsArray){
        cardsArray.forEach(function (cards){
            renderCards(cards)
        })
    })
}

function renderCards(cards){
    const playerCard = document.createElement('div')
    playerCard.id = cards.id
    playerCard.className = "player-cards"

    const playerImg = document.createElement('img')
    playerImg.src = cards.image
    playerImg.alt = cards.name

    const playerInfo = document.createElement('div')
    playerInfo.id = "info"

    const playerName = document.createElement('h2')
    playerName.textContent = cards.name

    const playerNumber = document.createElement('h4')
    playerNumber.textContent = `wears number ${cards.number} for the`
    
    const playerTeam = document.createElement('h3')
    playerTeam.textContent = cards.team

    const createButton = document.createElement('bttn')
    createButton.textContent = "Player Info"


    playerCard.append(playerImg, createButton, playerInfo)
    playerInfo.appendChild(playerName, playerNumber, playerTeam)
    cardsContainer.appendChild(playerCard)

    const button = document.querySelector('button') // player info button
    const cardsInfo = document.getElementById('info') // info displayed by button
    let cardsInfoVisible = "hidden" // info default state of hidden

    function toggleInfo() { // function to toggle info as hidden or visible
        cardsInfoVisible = cardsInfoVisible === "hidden" ? cardsInfoVisible = "visible" : cardsInfoVisible = "hidden";
        cardsInfo.style.visibility = cardsInfoVisible
    }

button.onclick = toggleInfo

    }






