//DATA
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
  { title: "The Midnight Observatory", author: "Adrian Blake" },
  { title: "The Silver Compass", author: "Juliette Reed" },
  { title: "Ashes Beneath the Sky", author: "Michael Rowan" },
  { title: "The Paper Moon Conspiracy", author: "Victoria Lang" },
  { title: "Lanterns Over Elysium", author: "Harvey Moore" },
  { title: "The River That Dreamed", author: "Claudia Hayes" },
  { title: "The Architect of Storms", author: "Damian Wells" },
  { title: "Beneath the Iron Trees", author: "Harriet Lowe" },
  { title: "The Astronomer’s Garden", author: "Philip Wren" },
  { title: "The Lost Harbor Lights", author: "Isla Morton" },
  { title: "The Children of Winterglass", author: "Rowan Pierce" },
  { title: "The Hourglass Dominion", author: "Sylvia Frost" },
  { title: "The Mapmaker’s Paradox", author: "Gareth Cole" },
  { title: "A Lantern for the Dead", author: "Nina Whitfield" },
  { title: "The Sky Without Wings", author: "Arthur Monroe" },
  { title: "The Book of Hollow Stars", author: "Ivy Harrington" },
  { title: "Dreams Beneath the Clocktower", author: "Julian Ellis" },
  { title: "The House of Ash and Mirrors", author: "Clara Frost" },
  { title: "The Shadow Over Blackthorn", author: "Victor James" },
  { title: "Letters from a Forgotten World", author: "Amara Snow" },
  { title: "The Firewatcher’s Daughter", author: "Derek Vaughn" },
  { title: "The Wolves of Evergreen Hollow", author: "Matilda Rose" },
  { title: "The Painter of Broken Light", author: "Samuel Gray" },
  { title: "Before the Stars Went Silent", author: "Celia Dray" },
  { title: "The City of Endless Rain", author: "Oliver Kent" },
  { title: "The Ghosts of Lantern Hill", author: "Mae Collins" },
  { title: "The Dream Archivist", author: "Jonathan Reid" },
  { title: "The Lake Beneath the Mountains", author: "Audrey Hale" },
  { title: "The Compass of Forgotten Dreams", author: "Rowan Ellis" },
  { title: "The Music of Falling Snow", author: "Clara Hayes" },
  { title: "A Crown of Ashes", author: "Juliette Monroe" },
  { title: "The Lighthouse Keeper’s Secret", author: "Nathan Frost" },
  { title: "The Clock of Silent Echoes", author: "Lucia Bennett" },
  { title: "The Garden Beyond Shadows", author: "Miles Jennings" },
  { title: "The Memory of Lanterns", author: "Sarah Blake" },
  { title: "The Whispering Tide", author: "Theo Wren" },
  { title: "The Last City of Glass", author: "Amelia Vaughn" },
  { title: "The Sea Between the Worlds", author: "James Cole" },
];

// CLASSES
class Book {
  constructor(title, author, key) {
    this.title = title;
    this.author = author;
    this.key = key;
    this.isAvailable = true;
  }

  checkOut() {
    this.isAvailable = false;
  }

  checkIn() {
    this.isAvailable = true;
  }
}

class Member {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      book.checkOut();
      this.books.push(book);
    } else {
      console.log(`${book.title} is already borrowed.`);
    }
  }

  returnBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      book.checkIn();
    }
  }
}

// INITIALIZATION
const LibraryInstances = {};
books.forEach((book, i) => {
  const key = `book${i + 1}`;
  LibraryInstances[key] = new Book(book.title, book.author, key);
});

const Joanna = new Member("Joanna");

// DOM ELEMENTS
const userName = document.querySelector(".user-name");
const userBooks = document.querySelector(".user-books");
const allBooks = document.querySelector(".all-books");

// DOM UPDATE FUNCTIONS
function addBookToUser(book) {
  const html = `
    <div class="book" data-key="${book.key}">
      <div class="title">${book.title}</div>
      <div class="author">${book.author}</div>
      <button class="btn return-book" data-key="${book.key}">Return</button>
    </div>
  `;
  userBooks.insertAdjacentHTML("afterbegin", html);
}

function removeBookFromUser(book) {
  const el = userBooks.querySelector(`[data-key="${book.key}"]`);
  if (el) el.remove();
}

function addBookToAll(book) {
  const html = `
    <div class="book" data-key="${book.key}">
      <div class="title">${book.title}</div>
      <div class="author">${book.author}</div>
      <button class="btn request-book" data-key="${book.key}">Request</button>
    </div>
  `;
  allBooks.insertAdjacentHTML("afterbegin", html);
}

function removeBookFromAll(book) {
  const el = allBooks.querySelector(`[data-key="${book.key}"]`);
  if (el) el.remove();
}

// INITIAL RENDER
document.addEventListener("DOMContentLoaded", () => {
  userName.textContent = `Hello, ${Joanna.name}`;

  // Render all available books
  for (const book of Object.values(LibraryInstances)) {
    if (book.isAvailable) addBookToAll(book);
  }
});

// EVENT HANDLERS
allBooks.addEventListener("click", (e) => {
  if (!e.target.classList.contains("request-book")) return;

  const key = e.target.dataset.key;
  const book = LibraryInstances[key];

  Joanna.borrowBook(book);

  removeBookFromAll(book);
  addBookToUser(book);
});

userBooks.addEventListener("click", (e) => {
  if (!e.target.classList.contains("return-book")) return;

  const key = e.target.dataset.key;
  const book = Joanna.books.find((b) => b.key === key);

  Joanna.returnBook(book);

  removeBookFromUser(book);
  addBookToAll(book);
});
