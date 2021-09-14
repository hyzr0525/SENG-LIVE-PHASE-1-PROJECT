// type your main code here
const BASE_URL = "http://localhost:3000/players"
const cardsContainer = document.getElementById("cards-container")

const button = document.querySelector('button') // player info button
const cardsInfo = document.getElementById('cards-info') // info displayed by button
let cardsInfoVisible = "hidden" // info default state of hidden

function toggleInfo() { // function to toggle info as hidden or visible
   cardsInfoVisible = cardsInfoVisible === "hidden" ? cardsInfoVisible = "visible" : cardsInfoVisible = "hidden";
   cardsInfo.style.visibility = cardsInfoVisible
    }

button.onclick = toggleInfo

