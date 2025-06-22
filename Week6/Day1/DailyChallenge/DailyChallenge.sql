SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Nils', ' ', '08/10/1970', 5);

-- ERROR: null value in column "last_name" violates not-null constraint
INSERT INTO actors (first_name, age, number_oscars)
VALUES('Vesta', '08/10/1970', 6);
