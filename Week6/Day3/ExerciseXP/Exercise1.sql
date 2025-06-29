-- Exercise 1: DVD Rental
-- Get a list of all the languages, from the language table.
SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name FROM film 
JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name FROM film 
RIGHT JOIN language ON film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

INSERT INTO new_film(name)
VALUES 
('La-La-Lend'),
('Lilo and Stitch'),
('Sherlock Holmes');

-- Create a new table called customer_review, which will contain film reviews that customers will make.

-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY,
	film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
	language_id INTEGER NOT NULL REFERENCES language(language_id) ON DELETE CASCADE,
	title VARCHAR(100),
	score INTEGER CHECK (score BETWEEN 1 AND 10),
	review_text TEXT,
	last_update DATE DEFAULT CURRENT_DATE
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (
    film_id, language_id, title, score, review_text
) VALUES 
(1, 1, 'Amazing Movie!', 9, 'The plot was engaging and the acting was top-notch.'),
(2, 2, 'Not my type', 5, 'Too slow for my taste, but the cinematography was beautiful.');

SELECT * FROM customer_review;

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id IN (SELECT film_id FROM customer_review);
