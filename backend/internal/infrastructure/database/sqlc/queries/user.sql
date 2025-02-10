-- name: CreateUser :exec
insert into users(name, password) values ($1, $2);

