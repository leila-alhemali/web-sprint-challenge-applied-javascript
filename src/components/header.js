import { createConfigItem } from "@babel/core"

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//create elements
const header = document.createElement('div');
const objDate = document.createElement('span');
const objTitle = document.createElement('h1');
const objTemp = document.createElement('span');

//add text/classes
header.classList.add('header');
objDate.classList.add('date');
objDate.textContent = title;
objTemp.classList.add('temp');
objTemp.textContent = temp;

//create hierarchy
header.appendChild(objDate);
header.appendChild(objTitle);
header.appendChild(objTemp);

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const entryPoint = document.querySelector(selector)
entryPoint.appendChild(Header('BloomTech News', '45F', 'Dec. 3rd 2021'))
}

headerAppender('.header-container')

export { Header, headerAppender }
