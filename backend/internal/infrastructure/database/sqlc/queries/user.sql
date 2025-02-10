-- name: CreateUser :one
insert into users(name, password) values ($1, $2) returning id;

-- name: GetUserByName :one
select * from users where name = $1;

