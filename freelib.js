//////////////////////
// Global Variables //
//////////////////////

// array of book objects with extra colors added for each and an image
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
      button_hover: "#736151",
      long_description: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable."
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
      buttons_background: "#260101",
      buttons_color: "#594319",
      button_hover: "#BF2121",
      long_description: "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
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
      button_hover: "#F26A4B",
      long_description: "F. Scott Fitzgerald's 'The Great Gatsby' follows the story of Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier. Gatsby's quest for love leads him from a life of poverty to one of immense wealth, all in the hopes of winning Daisy's heart."
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
      button_hover: "#7FB5B8",
      long_description: "The The Hitchhiker's Guide to the Galaxy is an adaptation of the first four parts of Adams's radio series of the same name, centering on the adventures of the only man to survive the destruction of Earth; while roaming outer space, he comes to learn the truth behind Earth's existence. The novel was first published in London on 12 October 1979."
   }
]

// current mouse over and mouse out set to home colors
let currentMouseOverColor = "#012626";
let currentMouseOutColor = "#27730B";

// variables for dom elements
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
   // variable for object position
   const bookIndex = arrayOfBookObjects[bookNumber - 1];
   // deconstruction of object
   const {title, author, publisher, year, cover, jacketColor, cover_background, 
      header_background, buttons_background, buttons_color, button_hover, long_description} = bookIndex

   // hide main screen and show first book
   intro.hidden = true;
   info.hidden = false;

   // set inner html with information from object[number]
   bookTitle.innerHTML = title;
   bookAuthor.innerHTML = author;
   bookPublisher.innerHTML = publisher;
   bookYear.innerHTML = year;
   bookImage.innerHTML = "<img src ='" + cover + "' id='img' > <p class='overlay text-center' id='about' style='font-size:90%;'>" + long_description + "</p>";

   // set background colors to that in the current object
   bookDisplay.style.backgroundColor = jacketColor;
   image.style.backgroundColor = cover_background;
   header.style.backgroundColor = header_background;
   buttons.style.backgroundColor = buttons_background;

   // loop to change button colors
   for (i = 0; i < 4; i++) {
      book[i].style.backgroundColor = buttons_color;
   }

   // set current mouse out and over colors
   currentMouseOutColor = buttons_color;
   currentMouseOverColor = button_hover;
}


// resets everything back to the main menu colors and text
const reset = () => {
   // switch visibility of booksDisplay divs back to main screen
   intro.hidden = false;
   info.hidden = true;

   // display main screen image
   bookImage.innerHTML = "<img src='./images/logos/library_logo.png' id='img' style='filter: drop-shadow(1px 1px 1px black);'>";

   // set backgrounds to main menu colors
   bookDisplay.style.backgroundColor = "#BCBF63";
   image.style.backgroundColor = "#5A838C";
   header.style.backgroundColor = "#8C311C";
   buttons.style.backgroundColor = "#400D0D";

   // set button colors to main menu colors
   for (i = 0; i < 4; i++) {
      book[i].style.backgroundColor = "#27730B";
   }

   // set mouse out and over colors to main screen colors
   currentMouseOutColor = "#27730B";
   currentMouseOverColor = "#012626";
}


////////////////////////////////////////////////////
// Event Listiners for Button Hover Colors Change //
////////////////////////////////////////////////////

// variables for dom button elements
const button1 = document.getElementById("book1");
const button2 = document.getElementById("book2");
const button3 = document.getElementById("book3");
const button4 = document.getElementById("book4");


// event listeners for mouseover and mouseout for all 4 buttons
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

/////////////////
// Footer Date //
/////////////////

// get date
const date = new Date();
// get year
let year = date.getFullYear();
// display year next to name on main screen
document.getElementById("year").innerHTML = year;