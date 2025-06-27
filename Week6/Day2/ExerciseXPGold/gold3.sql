CREATE TABLE purchases (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER REFERENCES customers(customer_id),
	item_id INTEGER REFERENCES items(item_id),
	quantity_purchased INTEGER NOT NULL
);