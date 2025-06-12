"use strict";
// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces
class Library {
    constructor() {
        this.books = [];
    }
    addBook(newBook) {
        this.books.push(newBook);
    }
    getBookDetails(isbn) {
        const book = this.books.find((value) => value.isbn === isbn);
        if (book === undefined)
            return book;
        else
            return `--Boook details--\nTitle: ${book.title}\nAuthor: ${book.author}
                                        \nISBN: ${book.isbn}\nPublished Year: ${book.publishedYear}
                                        \nGenre: ${book.genre}`;
    }
    getBooks() {
        return this.books.map(book => (Object.assign({}, book)));
    }
}
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getBooks().map(book => book.title);
    }
}
const myDigitalLibrary = new DigitalLibrary("https://books.io");
myDigitalLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0261102217",
    publishedYear: 1937,
    genre: "Fantasy"
});
myDigitalLibrary.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    publishedYear: 2008
});
console.log(myDigitalLibrary.getBookDetails("978-0261102217"));
console.log("All Titles:", myDigitalLibrary.listBooks());
console.log("Website:", myDigitalLibrary.website);
