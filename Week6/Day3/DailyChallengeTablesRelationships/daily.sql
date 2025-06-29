CREATE TABLE Customer(
	customer_id SERIAL,
	first_name VARCHAR(50),
	last_name VARCHAR(50) NOT NULL,
	PRIMARY KEY(customer_id)
);

CREATE TABLE Customer_profile(
	profile_id SERIAL,
	isLoggedIn boolean DEFAULT false,
	customer_id INTEGER NOT NULL UNIQUE,
	PRIMARY KEY (profile_id),
	CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES Customer (customer_id) ON DELETE CASCADE	
);

INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (
  true,
  (SELECT customer_id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);

INSERT INTO Customer_profile (customer_id)
VALUES (
  (SELECT customer_id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);

-- The first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
LEFT JOIN Customer_profile cp ON c.customer_id = cp.customer_id
WHERE cp.isLoggedIn;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name, c.last_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.customer_id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*)
FROM Customer c
LEFT JOIN Customer_profile cp ON c.customer_id = cp.customer_id
WHERE cp.isLoggedIn != true OR cp.isLoggedIn IS NULL;


CREATE TABLE Book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL, 
	author VARCHAR(50) NOT NULL
);


INSERT INTO Book(title, author) VALUES
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee');

CREATE TABLE Student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	age smallint CHECK (age >= 0 AND age<=15)
);

INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


CREATE TABLE Library(
	book_fk_id INTEGER NOT NULL,
	student_fk_id  INTEGER NOT NULL,
	borrowed_date DATE NOT NULL,
	PRIMARY KEY (book_fk_id, student_fk_id),
	CONSTRAINT fk_book_id FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_student_id FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title='Alice In Wonderland'), (SELECT student_id FROM Student WHERE name='John'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),(SELECT student_id FROM Student WHERE name = 'Bob'),'2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),(SELECT student_id FROM Student WHERE name = 'Lera'),'2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter'),(SELECT student_id FROM Student WHERE name = 'Bob'),'2021-08-12');

-- Select all the columns from the junction table
SELECT * FROM Library; 
-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON l.book_fk_id = b.book_id;
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age) AS average_age FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
-- Delete a student from the Student table, what happened in the junction table ?
-- Answer: records about this student will be deleted also in the junction table because of ON CASCADE mode.
DELETE FROM Student
WHERE name = 'Patrick';
