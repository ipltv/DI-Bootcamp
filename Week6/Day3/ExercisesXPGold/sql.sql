-- Exercise 1 : DVD Rentals
-- Instructions
-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
SELECT * FROM rental WHERE return_date IS NULL;
-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
SELECT c.customer_id, c.first_name, c.last_name FROM customer c 
JOIN rental r ON r.customer_id  = c.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;
-- Get a list of all the Action films with Joe Swank.
-- Before you start, could there be a shortcut to getting this information? Maybe a view?
SELECT f.title
FROM film f
JOIN film_category fc ON fc.film_id = f.film_id
JOIN category c ON c.category_id = fc.category_id
JOIN film_actor fa ON fa.film_id = f.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action' AND a.first_name = 'Joe' AND a.last_name = 'Swank';


CREATE VIEW film_actor_category_view AS
SELECT 
    f.film_id,
    f.title AS film_title,
    c.name AS category_name,
    a.first_name AS actor_first_name,
    a.last_name AS actor_last_name
FROM film f
JOIN film_category fc ON fc.film_id = f.film_id
JOIN category c ON c.category_id = fc.category_id
JOIN film_actor fa ON fa.film_id = f.film_id
JOIN actor a ON a.actor_id = fa.actor_id;

SELECT film_title
FROM film_actor_category_view
WHERE category_name = 'Action'
  AND actor_first_name = 'Joe'
  AND actor_last_name = 'Swank';


-- Exercise 2 – Happy Halloween
-- Instructions
-- There is a zombie plague approaching! 
-- The DVD rental company is offering to lend all of its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces. 
-- Prepare tables with the following data:
-- How many stores there are, and in which city and country they are located.
SELECT COUNT(*), c.city, co.country AS QTY FROM store s
JOIN address a on a.address_id = s.address_id
JOIN city c on a.city_id = c.city_id
JOIN country co ON c.country_id = co.country_id
GROUP BY c.city, co.country;
-- How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.
-- Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)
SELECT st.store_id, SUM(length)/60 FROM film f
JOIN inventory i ON i.film_id = f.film_id
JOIN rental r ON r.inventory_id = i.inventory_id
JOIN staff s ON s.staff_id = r.staff_id
JOIN store st ON st.store_id = s.store_id
WHERE r.return_date IS NOT NULL
GROUP BY st.store_id;
-- A list of all customers in the cities where the stores are located.
SELECT c.customer_id, c.first_name, c.last_name, ci.city FROM customer c
	JOIN address a ON c.address_id = a.address_id
	JOIN city ci ON ci.city_id = a.city_id
WHERE ci.city_id IN 
(SELECT city.city_id FROM city 
	JOIN address ON city.city_id = address.city_id 
	JOIN store ON store.address_id = address.address_id);

-- A list of all customers in the countries where the stores are located.
SELECT c.customer_id, c.first_name, c.last_name, ci.city, co.country FROM customer c
	JOIN address a ON c.address_id = a.address_id
	JOIN city ci ON ci.city_id = a.city_id
	JOIN country co ON co.country_id = ci.country_id
WHERE co.country_id IN 
(SELECT country.country_id FROM country
	JOIN city ON city.country_id = country.country_id
	JOIN address ON city.city_id = address.city_id 
	JOIN store ON store.address_id = address.address_id);
-- Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
-- Hint : use the CHECK contraint
-- For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
WITH safe_films AS (
SELECT DISTINCT * FROM film f
WHERE f.film_id NOT IN (
  SELECT fc.film_id FROM film_category fc
  JOIN category c ON c.category_id = fc.category_id
  WHERE c.name = 'Horror') 
AND NOT 
(LOWER(f.title) ILIKE ANY (ARRAY['%zombie%', '%undead%', '%ghost%', '%dead%', '%monster%', '%beast%'])
  OR 
  LOWER(f.description) ILIKE ANY (ARRAY['%zombie%', '%undead%', '%ghost%', '%dead%', '%monster%', '%beast%']))
)

SELECT 
  COUNT(*) AS total_safe_films,
  SUM(length) AS total_minutes,
  ROUND(SUM(length) / 60.0, 2) AS total_hours,
  ROUND(SUM(length) / 1440.0, 2) AS total_days
FROM safe_films;

WITH scary_films AS (
SELECT DISTINCT * FROM film f
WHERE f.film_id IN (
  SELECT fc.film_id FROM film_category fc
  JOIN category c ON c.category_id = fc.category_id
  WHERE c.name = 'Horror') 
OR 
(LOWER(f.title) ILIKE ANY (ARRAY['%zombie%', '%undead%', '%ghost%', '%dead%', '%monster%', '%beast%'])
  OR 
  LOWER(f.description) ILIKE ANY (ARRAY['%zombie%', '%undead%', '%ghost%', '%dead%', '%monster%', '%beast%']))
)
SELECT 
  COUNT(*) AS total_scary_films,
  SUM(length) AS total_minutes,
  ROUND(SUM(length) / 60.0, 2) AS total_hours,
  ROUND(SUM(length) / 1440.0, 2) AS total_days
FROM scary_films;
