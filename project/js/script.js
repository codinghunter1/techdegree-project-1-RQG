/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//array of object being quotes
const quotes = [
  //Quote 1
  {
    //Properties
    quote:     "We live on this speck called Earth, I think about what you might do, today or tomorrow - and make the most of it ",
    source:    "Neil Degrasse Tyson",
    citation:  "Book, 'Astrophysics for people in a hurry'",
    year:      2017,
    tag:       "Scince"
  },
  //Quote 2
  {
    //Properties
    quote:     "Every living thing is a masterpiece, written by nature and edited by evolution",
    source:    "Neil Degrasse Tyson",
    citation:  "Webpage, 'Best Neil Degrasse Tyson Quotes to Increase Brainpower' ",
    year:      2021,
    tag:       "Scince"
  },
  //Quote 3
  {
    //Properties
    quote:     "Train hard, turn up, run your best and the rest will take care of itself",
    source:    "Usain Bolt",
    citation:  "Interview",
    year:      2016,
    tag:       "Sport"
  },
  //Quote 4
  {
    //Properties
    quote:     "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have  enough",
    source:    "Oprah Winfrey",
    citation:  "Interview",
    year:      2015,
    tag:       "Life"
  },
  //Quote 5
  {
    //Properties
    quote:     "The greatest glory in living lies not in never falling, but in rising every time we fall",
    source:    "Nelson Mandela",
    citation:  "Speach",
    year:      1960,
    tag:       "Inspirational"
  },
  //Quote 6
  {
    //Properties
    quote:     "Tough times never last but tough people do",
    source:    "Robert H. Schuller",
    citation:  "Online",
    year:      2010,
    tag:       "Life"
  },
  //Quote 7
  {
    //Properties
    quote:     "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth",
    source:    "Mark Twain",
    citation:  "Speach",
    year:      1897,
    tag:       "Inspirational"
  },
  //Quote 8
  {
    //Properties
    quote:     "Remember that the happiest people are not those getting more, but those giving more",
    source:    "H. Jackson Brown, Jr.",
    citation:  "Book",
    year:      197,
    tag:       "Life"
  },
  //Quote 9
  {
    //Properties
    quote:     "The only impossible journey is the one you never begin",
    source:    "Tony Robbins",
    citation:  "Podcast",
    year:      2022,
    tag:       "Life"
  },
  //Quote 10
  {
    //Properties
    quote:     "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid",
    source:    "Audre Lorde",
    citation:  "Book",
    year:      1983,
    tag:       "Inspirational"
  },
  //Quote 11
  {
    //Properties
    quote:     "THE WAY I SEE IT, IFYOU WANT THE RAINBOW, YOU GOTTA PUT UP WITH THE RAIN",
    source:    "DOLLY PARTON",
    citation:  "Website",
    year:      1991,
    tag:       "Life"
  },
  //Quote 12
  {
    //Properties
    quote:     "Spread love everywhere you go. Let no one ever come to you without leaving happier",
    source:    "Mother Teresa",
    citation:  "Book",
    year:      1973,
    tag:       "Life"
  },
  //Quote 13
  {
    //Properties
    quote:     "Don't judge each day by the harvest you reap but by the seeds that you plant",
    source:    "Robert Louis Stevenson",
    citation:  "Website",
    year:      1880,
    tag:       "Life"
  },
  //Quote 14
  {
    //Properties
    quote:     "The future belongs to those who believe in the beauty of their dreams",
    source:    "Eleanor Roosevelt",
    citation:  "Website",
    year:      1952,
    tag:       "Life"
  },
  //Quote 15
  {
    //Properties
    quote:     "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    source:    "Benjamin Franklin",
    citation:  "Website",
    year:      1749,
    tag:       "Teaching"
  },
  //Quote 16
  {
    //Properties
    quote:     "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart",
    source:    "Helen Keller",
    citation:  "Website",
    year:      1938,
    tag:       "Life"
  },
  //Quote 17
  {
    //Properties
    quote:     "Do not go where the path may lead, go instead where there is no path and leave a trail",
    source:    "Ralph Waldo Emerson",
    citation:  "Website",
    year:      1873,
    tag:       "Life"
  },
  //Quote 18
  {
    //Properties
    quote:     "In the end, it's not the years in your life that count. It's the life in your years",
    source:    "Abraham Lincoln",
    citation:  "Book",
    year:      1845,
    tag:       "Life"
  },
  //Quote 19
  {
    //Properties
    quote:     "Love the life you live. Live the life you love",
    source:    "Bob Marley",
    citation:  "Song",
    year:      1969,
    tag:       "Life"
  },
  //Quote 19
  {
    //Properties
    quote:     "Success usually comes to those who are too busy to be looking for it",
    source:    "Henry David Thoreau",
    citation:  "Website",
    year:      1843,
    tag:       "Life"
  }  
]

function printQuote() {
  do {  //loop with no opening condition
  randomNumber  = Math.floor(Math.random() * quotes.length) + 1; //random number from 0 - amount of objects in array quotes
  
  if (lastRandomNumber != randomNumber) { //checking that last random number isnt the same to the next
    lastRandomNumber = randomNumber;  //reset vaule of last random number
    break; //end loop
  }
  lastRandomNumber = randomNumber; //reset vaule of last random number
  
  } while(true); //loop while condition isnt broken
  
  let writing = quotes[randomNumber]; //set writing to array of the subject object quotes properties
  
  html =  //create string of html printing data and formatting
         `<p class = "quote"><strong>${writing.quote}</strong></p>
          <p align="right"><em> - ${writing.source}, ${writing.citation}, ${writing.year}, ${writing.tag}</em></>`;
  
  document.querySelector('main').innerHTML = html; //send printing data and formatting (html) to the html file in the <main></main> section 
}
 /* 
 function getRandomQuote(){
       randomNumber  = Math.floor(Math.random() * quotes.length) + 1;
       console.log(randomNumber);
       printQuote(randomNumber);   
 }
*/
let lastRandomNumber = 0; //declare varible
let html = ' ';  //set variable empty 
printQuote();  //call funtion


/***
<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
        <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);