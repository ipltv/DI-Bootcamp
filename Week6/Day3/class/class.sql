-- ## EXERCISE IN CLASS
-- - 1 - Create a table called cars_set_default. 
-- It will have three columns: car_id (the primary key), car_name and car_color (CAR COLOR WILL BE SET DEFAULT):

-- - 2 - create a delete statement to delete from the colors table one color id. 
-- - 3 - select * from cars_set_default and analyse. What happened?

CREATE TABLE colors(
color_id SERIAL PRIMARY KEY,
name TEXT);

INSERT INTO colors (name)
VALUES ('Blue'),
('Yellow'),
('White');

CREATE TABLE cars(
car_id SERIAL PRIMARY KEY,
car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE,
car_name TEXT);

CREATE TABLE cars_set_default(
	car_id SERIAL PRIMARY KEY,
	car_name VARCHAR(50),
	car_color INTEGER DEFAULT 1 REFERENCES colors (color_id) ON DELETE SET DEFAULT
);