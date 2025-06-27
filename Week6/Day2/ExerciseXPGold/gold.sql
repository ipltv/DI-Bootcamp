-- Exercise 1: DVD Rental
-- Find out how many films there are for each rating.
SELECT rating, COUNT(*) FROM film GROUP BY rating;


-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT * FROM film 
WHERE rating in ('G', 'PG-13') AND length < 120 AND rental_rate < 3
ORDER BY title;

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer
SET first_name = 'Nils',
	last_name = 'Barsikovich'
WHERE customer_id = 1;

-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE address
SET address = 'Boulevard of Broken Dreams'
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 1);


