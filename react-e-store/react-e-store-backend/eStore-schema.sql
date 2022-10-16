CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
    username VARCHAR(30) NOT NULL,
    password TEXT NOT NULL,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    phone VARCHAR(25),
    address1 TEXT,
    city VARCHAR(30),
    state VARCHAR(25),
    zipcode VARCHAR(10),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    product_name TEXT,
    quantity INTEGER NOT NULL,
    total_amount TEXT,
    order_date TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    order_status TEXT,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
);