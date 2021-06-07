/*
There is a table called products with the following columns:

- id, an auto-incrementing integer that is the unique identifier for a product
- name, text that cannot be left null
- price, which is a non-blank floating-point number;
- can_be_returned, which is a boolean, and not nullable
*/

-- 1. Add a product to the table with the name of “chair”, price of 44.00, and can_be_returned of false.

INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, 'f');

-- 2. Add a product to the table with the name of “stool”, price of 25.99, and can_be_returned of true.

INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, 't');

-- 3. Add a product to the table with the name of “table”, price of 124.00, and can_be_returned of false.

INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, 'f');

-- 4. Display all of the rows and columns in the table.

SELECT * FROM products;

-- 5. Display all of the names of the products.

SELECT name FROM products;

-- 6. Display all of the names and prices of the products.

SELECT name, price FROM products;

-- 7. Add a new product - make up whatever you would like!

INSERT INTO products (name, price, can_be_returned) VALUES ('macbook', 2795.00, 'f');

-- 8. Display only the products that can_be_returned.

SELECT * FROM products WHERE can_be_returned = True;

-- 9. Display only the products that have a price less than 44.00.

SELECT * FROM products WHERE price < 44.00;

-- 10. Display only the products that have a price in between 22.50 and 99.99.

SELECT * FROM products WHERE price > 22.50 AND price < 99.99;

-- 11. There’s a sale going on: Everything is $20 off! Update the database accordingly.

UPDATE products SET price = price - 20;

-- 12. Because of the sale, everything that costs less than $25 has sold out. Remove all products whose price meets this criteria.

DELETE FROM products WHERE price < 25;

-- 13. And now the sale is over. For the remaining products, increase their price by $20.

UPDATE products SET price = price + 20;

--14. There is a new company policy: everything is returnable. Update the database accordingly.



