
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
    playerImg.className = "player-img"
    playerImg.src = cards.image
    playerImg.alt = cards.name
    playerImg.id = "player-pictures"

    const likeBttn = document.createElement("button")
    likeBttn.className = "like-bttn"
    likeBttn.id = 'like'
    likeBttn.textContent = "🏀"
    likeBttn.addEventListener("click", lightUpButton);

    function lightUpButton(){
        if(likeBttn.classList.contains('active')){
            likeBttn.classList.remove('active')
        } else likeBttn.classList.add('active')
    }

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
    createButton.textContent = "Click me for Player Info!"
    createButton.addEventListener('click', showInfo)
    
    function showInfo(e) {
        if (e.target.querySelector('.hide') === e.target.querySelector('.hide')){
          e.target.querySelector('.hide').classList.toggle('show') 
        } else e.target.querySelector('.show').classList.toggle('.hide')

        }

    const hiBttn = document.createElement('button')
    hiBttn.className = "hi-bttn"
    hiBttn.innerText = "Highlights"
    hiBttn.addEventListener('click', ()=>{
        const HI_PATH = 'https://www.youtube.com/results?search_query='
        const PLAYER_URL = playerCard.querySelector('h4').textContent
        console.log(PLAYER_URL)
        window.open(`${HI_PATH}${PLAYER_URL}+highlights`)
    })

    hiBttn.appendChild(playerInfo)
    createButton.appendChild(playerInfo)
    playerCard.append(playerImg, likeBttn, createButton, hiBttn, deleteBttn)
    playerInfo.append(playerName, playerNumber, playerTeam)
    cardsContainer.appendChild(playerCard)
    
    
    }





function deletePlayer(cards){
    cards.remove();
    fetch(`${BASE_URL}/${cards.id}`, {
        method: "DELETE",
    })}

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

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayerCard)
    }
    
    renderCards(newPlayerCard);
    
    fetch(BASE_URL, configObj)
    
    playerForm.reset();
}


playerForm.addEventListener("submit", createNewCard)
