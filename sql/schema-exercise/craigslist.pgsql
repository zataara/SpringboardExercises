

DROP DATABASE IF EXISTS craigslist_db;

CREATE DATABASE craigslist_db;

\c craigslist_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    preferred_region INTEGER REFERENCES regions ON DELETE SET NULL
);

CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id REFERENCES users ON DELETE CASCADE,
    region_id REFERENCES regions,
    title VARCHAR(140),
    content TEXT,
    category_id INTEGER REFERENCES categories ON DELETE SET NULL
    location LOCATION,
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT
);