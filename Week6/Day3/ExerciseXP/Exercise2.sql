-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = 2 WHERE film_id IN (3, 4);

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- Answer: The customer table consists one foreign key for address table. It means that each record for the customer should include valid address_id value.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, film.rental_rate FROM film 
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT film.title FROM film JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.fulltext @@ to_tsquery('wrestler');

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM film WHERE length < 60 AND rating = 'R' AND fulltext @@ to_tsquery('documentari');
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title FROM film 
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON  rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.rental_rate > 4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT film.title FROM film 
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON  rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1;