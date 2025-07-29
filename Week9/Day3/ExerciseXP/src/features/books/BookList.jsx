// BookList.jsx
import { useSelector } from "react-redux";
import {
    selectHorrorBooks,
    selectFantasyBooks,
    selectScienceFictionBooks,
    selectBooks,
} from "./state/selectors";
import { useState } from "react";

const genreOptions = [
    { label: "All", value: "all" },
    { label: "Horror", value: "horror" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Science Fiction", value: "science fiction" },
];

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    const allBooks = useSelector(selectBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);

    let displayedBooks = allBooks;
    if (selectedGenre === "horror") displayedBooks = horrorBooks;
    if (selectedGenre === "fantasy") displayedBooks = fantasyBooks;
    if (selectedGenre === "science fiction") displayedBooks = sciFiBooks;

    return (
        <div>
            <h2>Book Inventory</h2>
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                {genreOptions.map((genre) => (
                    <option key={genre.value} value={genre.value}>{genre.label}</option>
                ))}
            </select>

            <ul>
                {displayedBooks.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
