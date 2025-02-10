-- name: CreateProject :one
insert into projects(name, creator_id, desctiption) values ($1, $2, $3) RETURNING id, name, desctiption;

-- name: FindByID :one
select * from projects where id = $1;

-- name: EditProject :one
UPDATE projects SET name = $2, desctiption = $3 WHERE id = $1 RETURNING  id, name, desctiption;

-- name: ListMembers :many
select member_id, name from project_members
                       left join public.users u on u.id = project_members.member_id
                       where project_id = $1;

-- name: InviteMember :exec
insert into project_members(project_id, member_id) values ($1, $2);