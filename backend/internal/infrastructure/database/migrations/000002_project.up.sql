CREATE TABLE projects(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	name text NOT NULL,
	creator_id uuid NOT NULL REFERENCES users(id)
);
