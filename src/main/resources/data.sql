INSERT INTO users (id, name, email, password, role) VALUES (1, 'Admin User', 'admin@example.com', 'admin123', 'ADMIN');
INSERT INTO users (id, name, email, password, role) VALUES (2, 'John Doe', 'john@example.com', 'password123', 'USER');

INSERT INTO jobs (id, title, company, location, salary, description, posted_date, user_id) 
VALUES (1, 'Software Engineer', 'TechCorp', 'New York', 85000, 'Looking for a skilled Java Developer.', '2025-02-21', 2);

INSERT INTO jobs (id, title, company, location, salary, description, posted_date, user_id) 
VALUES (2, 'Data Analyst', 'Data Inc.', 'San Francisco', 75000, 'Seeking an experienced Data Analyst.', '2025-02-20', 1);
