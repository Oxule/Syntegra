BEGIN;


CREATE TABLE shemes(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	project_id uuid REFERENCES projects(id), 
	service_tag text NOT NULL,
	needs_auth boolean NOT NULL DEFAULT false,
	name text NOT NULL,
	details jsonb

);

ALTER TABLE endpoints
ADD shema_id uuid REFERENCES shemes(id),
DROP service_id,
DROP assigned_user,
DROP details;

DROP TABLE services;

COMMIT;
