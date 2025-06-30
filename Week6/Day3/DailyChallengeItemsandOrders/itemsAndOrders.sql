CREATE TABLE users (
	user_id serial PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE product_orders (
	order_id serial PRIMARY KEY,
	order_date date NOT NULL DEFAULT current_date,
	status VARCHAR(50) DEFAULT 'New',
	user_id INTEGER NOT NULL,
	CONSTRAINT fk_user_id FOREIGN key (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE items (
	item_id serial PRIMARY KEY,
	description VARCHAR(50),
	price DECIMAL(10, 2),
	order_id INTEGER NOT NULL,
	CONSTRAINT fk_order_id FOREIGN key (order_id) REFERENCES product_orders (order_id) ON DELETE CASCADE
);

-- Insert users
INSERT INTO
	users (name)
VALUES
	('Nils Barsikovich'),
	('Vesta The Fluffy Paw');

-- Insert product orders linked to users by user_id
INSERT INTO
	product_orders (order_date, status, user_id)
VALUES
	('2025-06-20', 'New', 1),
	('2025-06-21', 'Shipped', 1),
	('2025-06-22', 'Processing', 2);

-- Insert items linked to orders by order_id
INSERT INTO
	items (description, price, order_id)
VALUES
	('Product A', 100.50, 1),
	('Product B', 250.00, 1),
	('Product C', 75.25, 2),
	('Product D', 320.00, 3);

CREATE OR REPLACE FUNCTION order_total_price (p_order_id INTEGER) returns DECIMAL(10, 2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN 
SELECT SUM(price) INTO total
FROM
items
WHERE order_id = p_order_id;

RETURN COALESCE(total, 0.00);

END;
$$ language plpgsql;

SELECT
	order_total_price(1);

CREATE or replace function order_total_price_by_user (p_order_id INTEGER, p_user_id INTEGER) returns DECIMAL(10, 2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN

SELECT SUM(i.price) INTO total
FROM items i
JOIN product_orders po ON po.order_id = i.order_id
WHERE i.order_id = p_order_id AND po.user_id = p_user_id;

RETURN COALESCE(total, 0.00);

END;
$$ language plpgsql;

SELECT order_total_price_by_user(3, 2); 