-- Exercise 1 : DVD Rentals
-- Instructions
-- We want to encourage families and kids to enjoy our movies.
-- Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).
SELECT
	*
FROM
	film f
	JOIN inventory i ON f.film_id = i.film_id
WHERE
	f.rating IN ('G', 'PG')
	AND NOT EXISTS (
		SELECT
			1
		FROM
			rental r
		WHERE
			r.inventory_id = i.inventory_id
			AND r.return_date IS NULL
	);

-- Create a new table which will represent a waiting list for children’s movies. 
-- This will allow a child to add their name to the list until the DVD is available (has been returned). 
-- Once the child takes the DVD, their name should be removed from the waiting list (ideally using triggers, but we have not learned about them yet. 
-- Let’s assume that our Python program will manage this). Which table references should be included?
CREATE TABLE children_waiting_list (
	child_wait_id serial PRIMARY KEY,
	child_first_name VARCHAR(100) NOT NULL,
	child_last_name VARCHAR(100) NOT NULL,
	film_id INT NOT NULL,
	add_date date NOT NULL DEFAULT current_date,
	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES film (film_id) ON DELETE CASCADE
);
-- Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.
INSERT INTO children_waiting_list (child_first_name, child_last_name, film_id)
VALUES
  ('Alice', 'Johnson', 1),
  ('Ben', 'Torres', 3),
  ('Chloe', 'Kim', 5),
  ('David', 'Smith', 7),
  ('Nils', 'Barsikovich', 1),
  ('vesta', 'Pukhlikova', 3);

 SELECT f.title, COUNT(c.child_wait_id) FROM children_waiting_list c
 JOIN film f ON f.film_id = c.film_id
 GROUP BY f.title;
 