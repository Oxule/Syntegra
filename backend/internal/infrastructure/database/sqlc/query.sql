-- name: GetUserByName :one
 select * from users where name = $1;

