//creating a variable for the jokeContainer div in my html
const jokeContainer = document.getElementById('jokeContainer'); 
// creating a new html element saved to const card variable
const card = document.createElement('div');
//adding the css classes to the card
card.classList.add('card', 'mb-3');

function displayJoke() {
  //fetching data from api
  fetch('https://official-joke-api.appspot.com/random_joke')
  //turning response data into a readable format
    .then(response => response.json())
    .then(data => {
      //extracting specific properties from received data
      const {type, setup, punchline} = data;
      //creating a newCard element that copies the original card
      const newCard = card.cloneNode(true); 
      //setting the copied cards content
      newCard.innerHTML = `
        <div class="card-header">${type}</div>
        <div class="card-body">
          <h5 class="card-title">${setup}</h5>
          <p class="card-text">${punchline}</p>
        </div>
      `;
      //checking if first card exists or not. depending on answer either the first card or a new card is displayed
      jokeContainer.firstChild ? jokeContainer.firstChild.replaceWith(newCard) : jokeContainer.appendChild(newCard);
    })
    //error handling 
    .catch(error => {
      console.error(error);
    });
}
//event listener for the button
document.getElementById('getDataButton').addEventListener('click', displayJoke);
