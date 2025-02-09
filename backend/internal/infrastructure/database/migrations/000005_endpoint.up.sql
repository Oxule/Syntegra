CREATE TABLE endpoints(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	service_id uuid NOT NULL REFERENCES services(id),
	assigned_user uuid NOT NULL REFERENCES users(id),
	done boolean NOT NULL DEFAULT false,
	name text NOT NULL,
	path text NOT NULL,
	method text NOT NULL,
	description text NOT NULL

);
