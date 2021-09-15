
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

const playerForm = document.querySelector("#form-container")


function renderCards(cards){
    const playerCard = document.createElement('div')
    playerCard.id = cards.id
    playerCard.className = "player-cards"

    const playerImg = document.createElement('img')
    playerImg.src = cards.image
    playerImg.alt = cards.name
    playerImg.id = "player-pictures"

    const likeBttn = document.createElement("button")
    likeBttn.className = "like-bttn"
    likeBttn.textContent = "♥"
    likeBttn.addEventListener("click", () => lightUpButton());

    const deleteBttn = document.createElement("button");
    deleteBttn.className = "delete-bttn";
    deleteBttn.textContent = "Delete";
    deleteBttn.addEventListener("click", () => deletePlayer(playerCard));

    const playerInfo = document.createElement('div')
    playerInfo.id = `player ${cards.id}`
    playerInfo.className = "hide"

    const playerName = document.createElement('h4')
    playerName.textContent = cards.name

    const playerNumber = document.createElement('h4')
    playerNumber.textContent = `Number: ${cards.number}`
    
    const playerTeam = document.createElement('h4')
    playerTeam.textContent = cards.team

    const createButton = document.createElement('button')
    createButton.className = "info-bttn"
    createButton.textContent = "Player Info"
    createButton.addEventListener('click', showInfo)
    
    function showInfo(e) {
        if (e.target.querySelector('.hide') === e.target.querySelector('.hide')){
          e.target.querySelector('.hide').classList.toggle('show') 
        } else e.target.querySelector('.show').classList.toggle('.hide')

        }
    createButton.appendChild(playerInfo)
    playerCard.append(playerImg, likeBttn, createButton, deleteBttn)
    playerInfo.append(playerName, playerNumber, playerTeam)
    cardsContainer.appendChild(playerCard)
    
    
    }






function lightUpButton(){
    // funtion for light up the like buttom after it clicked
}

function deletePlayer(playerCard){
    playerCard.remove();

}

function createNewCard(event) {
    event.preventDefault();
    const newPlayer = document.querySelector("#player-input").value;
    const newTeam = document.querySelector("#team-input").value;
    const newNumber = document.querySelector("#number-input").value;
    const newImg = document.querySelector("#image-input").value;
    
    const newPlayerCard = {
      name: newPlayer,
      number: newNumber,
      team: newTeam,
      img: newImg
    };
    renderCards(newPlayerCard);
    playerForm.reset();
}

playerForm.addEventListener("submit", createNewCard)
