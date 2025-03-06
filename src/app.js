import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const card = document.querySelector(".card");
  const cardNumber = document.querySelector(".card-number");
  const suits = ["heart", "spade", "diamond", "club"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
  console.log(card)
  console.log(cardNumber)
  console.log(suits)
  console.log(values)



    function randomizeCard() {
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];
        const randomNumber = values[Math.floor(Math.random() * values.length)];
    
        card.classList.add(randomSuit);
        cardNumber.textContent = randomNumber;

          if (randomSuit === "heart" || randomSuit === "diamond") {
            cardNumber.style.color = "red";
          } else {
            card.cardNumber.style.color = "black";
          }
    }
    
    randomizeCard();  
  }
  