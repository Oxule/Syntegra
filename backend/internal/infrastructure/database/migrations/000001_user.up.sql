CREATE TABLE users(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	name text NOT NULL unique,
	password text NOT NULL
);

