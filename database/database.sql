CREATE DATABASE ng_books_db; 

USE ng_books_db; 


CREATE TABLE book(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200), 
    ceated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

DESCRIBE book; 