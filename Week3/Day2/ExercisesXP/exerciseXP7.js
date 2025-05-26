const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false
  }
];


const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }


  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(img);
  
  section.appendChild(bookDiv);
});