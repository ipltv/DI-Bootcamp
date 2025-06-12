// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces

interface Book {
    title: string,
    author: string,
    isbn: string,
    publishedYear: number,
    genre?: string
}

class Library {
    private books: Book[]
    constructor() {
        this.books = [];
    }

    addBook(newBook: Book): void {
        this.books.push(newBook);
    }

    getBookDetails(isbn: string): string | undefined {
        const book: Book | undefined = this.books.find((value) => value.isbn === isbn);

        if (book === undefined) return book;
        else return `--Boook details--\nTitle: ${book.title}\nAuthor: ${book.author}
                                        \nISBN: ${book.isbn}\nPublished Year: ${book.publishedYear}
                                        \nGenre: ${book.genre}`;
    }

    public getBooks(): Book[] {
        return this.books.map(book => ({ ...book }));
    }
}

class DigitalLibrary extends Library {
    constructor(
        readonly website: string,
    ) {
        super();
    }
    listBooks(): string[] {
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
