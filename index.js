
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

    const likeBttn = document.createElement("button")
    const likeIcon = document.createElement("i")
    likeIcon.className = "far fa-heart"
    likeBttn.className = "like-bttn"
    likeBttn.addEventListener("click", () => lightUpButton(likeIcon));

    const deleteBttn = document.createElement("button");
    deleteBttn.className = "delete-bttn";
    deleteBttn.textContent = "Delete";
    deleteBttn.addEventListener("click", () => deletePlayer(playerCard));

    const playerInfo = document.createElement('div')
    playerInfo.id = "info"

    const playerName = document.createElement('h4')
    playerName.textContent = cards.name

    const playerNumber = document.createElement('h4')
    playerNumber.textContent = `Number: ${cards.number}`
    
    const playerTeam = document.createElement('h4')
    playerTeam.textContent = cards.team

    const createButton = document.createElement('button')
    createButton.className = "info-bttn"
    createButton.textContent = "Player Info"

    likeBttn.append(likeIcon)
    playerCard.append(playerImg, likeBttn, createButton, playerInfo, deleteBttn)
    createButton.addEventListener('click', showInfo)
    
    function showInfo(e) {
        if (e.target.querySelector('.hide') === e.target.querySelector('.hide')){
          e.target.querySelector('.hide').classList.toggle('show') 
        } else e.target.querySelector('.show').classList.toggle('.hide')

        }

    const hiBttn = document.createElement('button')
    hiBttn.className = "hi-bttn"
    hiBttn.innerText = "Highlights"
    hiBttn.addEventListener('click', (e)=>{
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

    const button = document.querySelector('button') // player info button
    const cardsInfo = document.getElementById('info') // info displayed by button
    let cardsInfoVisible = "hidden" // info default state of hidden

    function toggleInfo() { // function to toggle info as hidden or visible
        cardsInfoVisible = cardsInfoVisible === "hidden" ? cardsInfoVisible = "visible" : cardsInfoVisible = "hidden";
        cardsInfo.style.visibility = cardsInfoVisible
    }

    button.onclick = toggleInfo

}

let clicked = false
function lightUpButton(likeIcon){
    likeIcon.preventDefault
    // funtion for light up the like buttom after it clicked
    
    if (!clicked){
        clicked = true;
        likeIcon.className = "fas fa-heart"
    } else {
        clicked = false;
        likeIcon.className = "far fa-heart"
    }
    
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

