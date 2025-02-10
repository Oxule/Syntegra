BEGIN;
CREATE TABLE services(
	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	project_id uuid NOT NULL REFERENCES projects(id),
	name text NOT NULL,
	endpoints_total int NOT NULL,
	endpoints_done int NOT NULL
);


ALTER TABLE endpoints
DROP shema_id,
ADD service_id uuid REFERENCES services(id),
ADD assigned_user uuid REFERENCES users(id),
ADD details jsonb;


DROP TABLE shemes;

COMMIT;
