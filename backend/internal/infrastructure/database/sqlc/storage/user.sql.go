// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: user.sql

package storage

import (
	"context"
)

const exampleUser = `-- name: ExampleUser :exec
select (1) from users
`

func (q *Queries) ExampleUser(ctx context.Context) error {
	_, err := q.db.Exec(ctx, exampleUser)
	return err
}
