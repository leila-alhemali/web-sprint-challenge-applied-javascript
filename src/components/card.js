import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

//create card  
const cards = document.createElement('div');
cards.classList.add('card');

//create headline
const headLine = document.createElement('div');
headLine.classList.add('headline');
headLine.textContent = article.headline

//create author
const author = document.createElement('div')
author.classList.add('author')
const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
const authorPhoto = document.createElement('img');
authorPhoto.src = article.authorPhoto;
const span = document.createElement('span');
span.textContent = article.authorName


//create hierarchy
cards.appendChild(headLine);
cards.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(authorPhoto);
author.appendChild(span);

const cardsContainer = document.querySelector('.cards-container')
cardsContainer.appendChild(cards)

//create clickEvent
cards.addEventListener('click', () => {
  console.log(article.headline)
})

//return
 return cards
}

// console.log(Card({authorPhoto: 'test'}))

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      const entryPoint = document.querySelector(selector)
      for (let i = 0; i < resp.data.articles.javascript.length; i++ ) {
      entryPoint.appendChild(Card(resp.data.articles.javascript[i]))
      }
    }).catch(error => {
      console.error(error);
    }).finally(() => console.log('here we go'));
}



export { Card, cardAppender }
