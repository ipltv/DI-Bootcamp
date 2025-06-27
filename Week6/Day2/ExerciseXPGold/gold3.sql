CREATE TABLE purchases (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER REFERENCES customers(customer_id),
	item_id INTEGER REFERENCES items(item_id),
	quantity_purchased INTEGER NOT NULL
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES
(3, 3, 1),
(5, 2, 10),
(1, 1, 2);

SELECT * FROM purchases;

SELECT * FROM purchases INNER JOIN customers ON customers.customer_id = purchases.customer_id;

SELECT * FROM purchases WHERE customer_id = 5;

SELECT * FROM purchases WHERE item_id IN 
(SELECT item_id FROM items WHERE item_name = 'Small Desk' OR item_name = 'Large Desk');

SELECT customers.first_name, customers.last_name, items.item_name FROM customers 
INNER JOIN purchases ON customers.customer_id = purchases.customer_id
INNER JOIN items ON purchases.item_id = items.item_id;


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3, NULL, 5);