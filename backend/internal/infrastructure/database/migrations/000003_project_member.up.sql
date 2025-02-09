CREATE TABLE project_members(
	member_id uuid NOT NULL REFERENCES users(id),
	project_id uuid NOT NULL REFERENCES projects(id)
);

