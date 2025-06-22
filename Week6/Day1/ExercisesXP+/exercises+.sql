-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'ru-RU'
--     LC_CTYPE = 'ru-RU'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
--  id SERIAL PRIMARY KEY,
--  last_name VARCHAR(50) NOT NULL,
--  first_name VARCHAR(50) NOT NULL,
--  birth_date date
-- )

-- I added data (6 rows) from CSV file throwght command:
-- \copy students (first_name, last_name, birth_date) FROM 'C:\Users\plato\Desktop\Book1.csv' WITH (FORMAT csv, HEADER true);

--Insert data manualy with INSERT INTO
INSERT INTO students(first_name, last_name, birth_date)
VALUES ('Nils', 'Barsikovich', '2012-02-28');

-- Fetch all of the data from the table.
SELECT * FROM students;

-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id=2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name='Benichou';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name='Benichou';

-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students WHERE id=1 OR id=3;

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date >= '2000-01-01';