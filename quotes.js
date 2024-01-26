//variable decalere and assign
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//Crate array to store multipule data or object.
const quotes = [
 {
    quote : "A smooth sea never made a skilled Sailor.",
    person: `Franklin D. Roosevelt`,
 },
 {
    quote : "Ideas are easy. implementation is hard",
    person:`Guy Kawasaki`,
},
{
    quote : "IF you want to shine like sun, first burn like sun .",
    person: `Dr. A.P.J abdulkalam`,
},
{
    quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: `Albert Einstein`,
},
{
    quote : "If you really look closely, most overnight successes took a long time.",
    person: `Steve Jobs`,
},
{
    quote : "Be the servant while leading. Be unselfish. Have infinite patience, and success is yours.",
    person: `Franklin D. Roosevelt`,
},
{
    quote : "Be the servant while leading. Be unselfish. Have infinite patience, and success is yours.",
    person: `Swami Vivekananda`,
},
{
    quote : "An open heart is an open mind.",
    person: `Dalai Lama`,
},
{
    quote : "Build your own dreams or someone else will hire you to build theirs.",
    person: `Farrah Gray`,
},
{
    quote : "Our Attitude twowrds life determines lifes attitude towaords us.",
    person: `Jhone Mitchell`,
},
]

//add eventlistener on button 
btn.addEventListener("click", function () 
{
 let random = Math.floor(Math.random() * quotes.length); //use math functions to genrate random quotes

 quote.innerText = quotes[random].quote;   // to display random quotes which are presnet in quotes array.
 person.innerText = quotes[random].person; // to display auther name which are presnet in quotes array.

});