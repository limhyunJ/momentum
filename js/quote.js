const quotes = [
  {
    quote: "You do not have to worry'cause I'll protect you",
    author: "Ponyo on the Cliff",
  },
  {
    quote: "Kiki, don't worry about your appearance like that. What's important is the heart",
    author: "Witch's Delivery Service Kiki",
  },
  {
    quote:"is it so.My heart is heavy",
    author: "Howl's Moving Castle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;







//Random  활용
const bgImg = [ "0.jpg", "1.jpg", "3.jpg", "4.jpg","5.jpg"];

const randomImg = bgImg[Math.floor(Math.random() * bgImg.length)];


const background = document.createElement("img");

background.src = `img/${randomImg}`;

document.body.appendChild(background);

// 중요  3개의 array를 가져오려면 숫자 2가 필요함 
// .length 는 길이 를 가져옴 array에 자주쓰이고  안에 몇개가 담겼있는 길이를  number 로 알 수 있음 
