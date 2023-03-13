//////////////////////
// Global Variables //
//////////////////////

const arrayOfBookObjects = [
   {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publisher: "Little, Brown and Company",
      year: "1951",
      cover: "./images/covers/the_catcher_in_the_rhy.jpg",
      jacketColor: "#F2DE79",
      cover_background: "#262126",
      header_background: "#F2AE2E",
      buttons_background: "#D92B2B",
      buttons_color: "#262126",
      button_hover: "#736151"
   },
   {
      title: "The Alchemist",
      author: "Paulo Coelho",
      publisher: "HarperCollins",
      year: "1988",
      cover: "./images/covers/the_alchemist.jpg",
      jacketColor: "#F2C53D",
      cover_background: "#403013",
      header_background: "#BF2121",
      buttons_background: "#0D0D0D",
      buttons_color: "#594319",
      button_hover: "#BF2121"
   },
   {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publisher: "Charles Scribner's Sons",
      year: "1925",
      cover: "./images/covers/the_great_gatsby.jpg",
      jacketColor: "#F2AE2E",
      cover_background: "#3F3B40",
      header_background: "#D96704",
      buttons_background: "#30588C",
      buttons_color: "#2D3856",
      button_hover: "#F26A4B"
   },
   {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      publisher: "Pan Books",
      year: "1979",
      cover: "./images/covers/the_hitchhikers_guide_to_the_galaxy.jpg",
      jacketColor: "#FBBF11",
      cover_background: "#130824",
      header_background: "#1C8F31",
      buttons_background: "#6D5030",
      buttons_color: "#221949",
      button_hover: "#7FB5B8"
   }
]

let currentMouseOverColor = "#012626";
let currentMouseOutColor = "#5A838C";

const intro = document.getElementById("intro");
const info = document.getElementById("info");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPublisher = document.getElementById("bookPublisher");
const bookYear = document.getElementById("bookYear");
const bookImage = document.getElementById("bookImage");
const bookDisplay = document.getElementById("bookDisplay");
const image = document.getElementById("image");
const header = document.getElementById("header");
const buttons = document.getElementById("buttons");
const book = document.getElementsByClassName("book");

///////////////
// Functions //
///////////////

// Write your function(s) here

const displayBook = (bookNumber) => {
   const bookIndex = arrayOfBookObjects[bookNumber - 1];
   const {title, author, publisher, year, 
      cover, jacketColor, cover_background, 
      header_background, buttons_background, 
      buttons_color, button_hover
   } = bookIndex

   intro.hidden = true;
   info.hidden = false;

   bookTitle.innerHTML = title;
   bookAuthor.innerHTML = author;
   bookPublisher.innerHTML = publisher;
   bookYear.innerHTML = year;
   bookImage.innerHTML = "<img src ='" + cover + "' id='img' >";

   bookDisplay.style.backgroundColor = jacketColor;
   image.style.backgroundColor = cover_background;
   header.style.backgroundColor = header_background;
   buttons.style.backgroundColor = buttons_background;

   for (i = 0; i < 4; i++) {
      book[i].style.backgroundColor = buttons_color;
   }

   currentMouseOutColor = buttons_color;
   currentMouseOverColor = button_hover;
}

const reset = () => {
   intro.hidden = false;
   info.hidden = true;

   bookImage.innerHTML = "<img src ='./images/logos/library_logo_crop.png' id='img' >";

   bookDisplay.style.backgroundColor = "#BCBF63";
   image.style.backgroundColor = "#5A838C";
   header.style.backgroundColor = "#8C311C";
   buttons.style.backgroundColor = "#400D0D";

   for (i = 0; i < 4; i++) {
      book[i].style.backgroundColor = "#5A838C";
   }

   currentMouseOutColor = "#5A838C";
   currentMouseOverColor = "#012626";
}


////////////////////////////////////////////////////
// Event Listiners for Button Hover Colors Change //
////////////////////////////////////////////////////

const button1 = document.getElementById("book1");
const button2 = document.getElementById("book2");
const button3 = document.getElementById("book3");
const button4 = document.getElementById("book4");

button1.addEventListener("mouseover", function() {
   button1.style.backgroundColor = currentMouseOverColor;
});
button1.addEventListener("mouseout", function() {
   button1.style.backgroundColor = currentMouseOutColor;
});
button2.addEventListener("mouseover", function() {
   button2.style.backgroundColor = currentMouseOverColor;
});
button2.addEventListener("mouseout", function() {
   button2.style.backgroundColor = currentMouseOutColor;
});
button3.addEventListener("mouseover", function() {
   button3.style.backgroundColor = currentMouseOverColor;
});
button3.addEventListener("mouseout", function() {
   button3.style.backgroundColor = currentMouseOutColor;
});
button4.addEventListener("mouseover", function() {
   button4.style.backgroundColor = currentMouseOverColor;
});
button4.addEventListener("mouseout", function() {
   button4.style.backgroundColor = currentMouseOutColor;
});


const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;