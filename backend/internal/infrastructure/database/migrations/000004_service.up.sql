CREATE TABLE services(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	project_id uuid NOT NULL REFERENCES projects(id),
	name text NOT NULL,
	endpoints_total int NOT NULL,
	endpoints_done int NOT NULL
);
