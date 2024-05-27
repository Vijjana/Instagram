import appendData from './scripts/main.js';
import navbar from './components/navbar.js';

let posts_div = document.getElementById('posts');
let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar();

const getData = async () => {
  let res = await fetch(`http://localhost:3000/posts`);

  let data = await res.json();
  console.log('data:', data);

  appendData(data, posts_div);
  console.log(data);
};

getData();
// const showButtons = (length) => {
//   var buttons = length / 10;

//   var buttons_div = document.getElementById('buttons');

//   for (let i = 1; i <= buttons; i++) {
//     var btn = document.createElement('BUTTON');

//     btn.innerText = i;

//     btn.setAttribute('id', `${i - 1}`);
//     btn.onclick = function () {
//       getData(i);
//     };

//     buttons_div.appendChild(btn);
//   }
// };

// showButtons(100);
