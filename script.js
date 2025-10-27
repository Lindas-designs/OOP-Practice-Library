// 1. Library Book System

// Make classes for Books and Members. Books have a title, author, and whether they’re available. Members have a name and the books they’ve borrowed. You can borrow or return books with methods like borrowBook() and returnBook().

// www.javaassignmenthelp.com/blog/object-oriented-programming-project-ideas/#list-of-interesting-object-oriented-programming-project-ideas-%e2%80%93-beginners-to-advanced-level

// sākotnēji visas grāmatas ir pieejamas;
// Pēc tam lietotāji sāk ņemt grāmatas, mainot grāmatu pieejamību;

//domāt loģiku html un css!!! Lai izmantotu šo kodu (modificējot) reālā mājaslapā

const books = [
  { title: "The Silent Horizon", author: "Amelia Reed" },
  { title: "Whispers of the Past", author: "Liam Carter" },
  { title: "Echoes in the Valley", author: "Sophia Bennett" },
  { title: "The Last Ember", author: "Noah Sullivan" },
  { title: "Through the Glass Sky", author: "Isabella Moore" },
  { title: "Fragments of Tomorrow", author: "Ethan Walsh" },
  { title: "Beneath Crimson Waves", author: "Olivia Gray" },
  { title: "The Clockmaker’s Secret", author: "William Hayes" },
  { title: "Midnight at the Harbor", author: "Charlotte Brooks" },
  { title: "The Alchemist’s Daughter", author: "Henry Collins" },
  { title: "Shadows of Eden", author: "Mia Foster" },
  { title: "The Forgotten Map", author: "James Harrington" },
  { title: "Letters from the Stars", author: "Emily Pierce" },
  { title: "The Winter’s Veil", author: "Lucas Martin" },
  { title: "A Song for the Fallen", author: "Grace Thompson" },
  { title: "The Painted City", author: "Alexander Cruz" },
  { title: "When the Storm Ends", author: "Natalie Harper" },
  { title: "The Wanderer’s Promise", author: "Benjamin Ross" },
  { title: "Chasing the Northern Light", author: "Ella Richardson" },
  { title: "The Garden of Lost Time", author: "Daniel Peterson" },
  { title: "The Lantern Keeper", author: "Clara Jennings" },
  { title: "Footprints Beyond the Shore", author: "Evan Montgomery" },
  { title: "The Hollow Mirror", author: "Fiona Cross" },
  { title: "Silent Bells at Dusk", author: "Harper Wells" },
  { title: "The Ocean Between Shadows", author: "Julian Frost" },
  { title: "The House on Wren Street", author: "Lydia Chase" },
  { title: "The Seventh Lantern", author: "Patrick Monroe" },
  { title: "A Memory of Silver", author: "Rose Whitman" },
  { title: "The Bridge Over Starlight", author: "Gavin Price" },
  { title: "The Keeper’s Garden", author: "Mabel Sinclair" },
  { title: "When the Fire Sleeps", author: "Owen Baxter" },
  { title: "Whispering Pines", author: "Nora Dalton" },
  { title: "The Frost That Stayed", author: "Miles Carter" },
  { title: "Letters to the River", author: "Eliza Vaughn" },
  { title: "The Mask of Winter", author: "Declan Hayes" },
  { title: "Dreams of Hollow Hill", author: "Ruby Lawrence" },
  { title: "The Shadow Merchant", author: "Cole Everett" },
  { title: "Echoes of the Lantern Sea", author: "Ava Mitchell" },
  { title: "The Edge of Forever", author: "Sebastian Rowe" },
  { title: "The Painter’s Silence", author: "Lena Doyle" },
  { title: "Tides of Ash and Snow", author: "Henry Lowell" },
  { title: "The Clockwork Garden", author: "Tessa Monroe" },
  { title: "The Forgotten Letter", author: "Arthur Hale" },
  { title: "The Violet Path", author: "Chloe Winters" },
  { title: "In the Shadow of the Lighthouse", author: "Felix Harper" },
  { title: "The Song of Falling Stars", author: "Diana Holloway" },
  { title: "A Map of Broken Roads", author: "Isaac Bell" },
  { title: "The Glassmaker’s Son", author: "Naomi Ellis" },
  { title: "Winds of the Hollow Coast", author: "Theo Clarke" },
  { title: "The Ember Archives", author: "Lillian Ford" },
];

const userName = document.querySelector(".user-name");
const allBooks = document.querySelector(".all-books");
class Book {
  isAvailable = true;
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  checkOutBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} by ${this.author} has been checked out.`);
    } else {
      console.log(`${this.title} by ${this.author} is not available.`);
    }
  }
  checkInBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} by ${this.author} has been returned.`);
    } else {
      console.log(`${this.title} has not been checked out.`);
    }
  }
}

//creating Book instances
const LibraryInstances = {};
books.forEach((book, i) => {
  const key = `book${i + 1}`;
  LibraryInstances[key] = new Book(book.title, book.author);
});
console.log(LibraryInstances);

class Member {
  books = [];
  constructor(name) {
    this.name = name;
  }
  borrowBook(book) {
    if (book.isAvailable) {
      this.books.push(book);
    }
    book.checkOutBook();
  }
  //checking if a book exists in an array, if yes, taking that book out
  returnBook(book) {
    if (!(this.books.indexOf(book) === -1)) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    book.checkInBook();
  }
}

const Joanna = new Member("Joanna");
console.log(Joanna);

//visual representation of data
document.addEventListener("DOMContentLoaded", (e) => {
  userName.insertAdjacentHTML("afterbegin", `Hello, ${Joanna.name}`);
  for (const [key, value] of Object.entries(LibraryInstances)) {
    allBooks.insertAdjacentHTML(
      "beforeend",
      `<div class="book"> <div class="number">${key.slice(
        4
      )}</div><div class="title">${value.title}</div>
    <div class="author">${
      value.author
    }</div><button class="request-book" data-key="${key}">Request</button></div>`
    );
  }
  const buttons = document.querySelectorAll(".request-book");
  console.log(buttons);
  allBooks.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("request-book")) {
      const bookKey = e.target.dataset.key;
      const book = LibraryInstances[bookKey];
      console.log(book);
      book.checkOutBook();
    }
  });
  //checking availability of a book

  //if book is available, taking it out of 'All Books' list and adding to 'Your Books' section (in data and in DOM)
});

// const requestBtn = document.querySelector(".request-book");
// const GreatSeduction = new Book("Great Seduction", "Charles Smith");
// const LittleFools = new Book("Little Fools", "Jonas Sinkhole");

// Joanna.borrowBook(GreatSeduction);
// Joanna.borrowBook(GreatSeduction);
// console.log(Joanna);

// Joannas profils
//Saraksts ar Joannas grāmatām

//Pilns saraksts ar visām grāmatām
//Katrai grāmatai blakus poga Request
// Ja grāmata pieejama, tiek pievienots Joannas grāmatām

///////piemērs no AI

// function createBookInstancesFromObject(obj) {
//   const result = {};
//   for (const [key, value] of Object.entries(obj)) {
//     result[key] = new Book(value.title, value.author);
//   }
//   return result;
// }

// Usage
// const LibraryInstances = createBookInstancesFromObject(LibraryBooks);

// LibraryInstances.book3.checkOutBook();

////////// piemērs no AI
// const LibraryBooks = {};
// const LibraryInstances = {};

// books.forEach((book, i) => {
//   const key = `book${i + 1}`;
//   LibraryBooks[key] = book;
//   LibraryInstances[key] = new Book(book.title, book.author);
// });

// console.log(LibraryInstances.book1.checkOutBook());

// <div class="book">
//   <div class="number"></div>
// <div class="title"></div>
// <div class="author"></div>
// </div>;
//   <div class="book">
//     <div class="number"></div>
//     <div class="title"></div>
//     <div class="author"></div>
//   </div>

// for (const [key, value] of Object.entries(LibraryInstances)) {
//   bookList.insertAdjacentElement("afterbegin", `<li></li>`);
// }
//   for (const [key, value] of Object.entries(obj)) {

// bookList.insertAdjacentElement(
//   "afterbegin",
//   `<li></li>`
// );
