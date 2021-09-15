/* HTML

* Header 
    -NBA logo
    -background banner?
* Player's Container 
    -Cards with player's picture
        1. Eventlisener - display player's detail info when clicked
    -like button
        1. Eventlisener - able to like player when clicked
    -delete button
        1. Eventlisener - able to delete player
    -
* new player form
    -where user to submit new player
        1. Eventlisener - able to add new player
*/

const BASE_URL = "http://localhost:3000/players"
const cardsContainer = document.getElementById("cards-container")

getCards()

function getCards(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(function (cardsArray){
        cardsArray.forEach(function(cards){
            renderCards(cards)
        })
    })
}


  const cardsContainer = document.getElementById("cards-container")

  function renderCards(cards){
    const playerCard = document.createElement('div')
    playerCard.id = cards.id
    playerCard.className = "player-cards"

    const playerImg = document.createElement('img')
    playerImg.src = cards.image
    playerImg.alt = cards.name

    playerCard.append(playerImg, createButton, playerInfo)
    cardsContainer.appendChild(playerCard)

  }


  players.forEach(function (cards) {
    renderPokemon(cards);
  });
