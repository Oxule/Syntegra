package database

import (
	"context"
	"errors"
	"log"

	"Syntegra/backend/internal/config"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/jackc/pgx/v5"
)

type Pg struct {
	queries *storage.Queries

	url string
}

func NewPg(ctx context.Context, config *config.Config) *Pg {
	conn, err := pgx.Connect(ctx, config.PostgresUrl)
	if err != nil {
		log.Fatalf("DB error: %s", err.Error())
		return nil
	}
	return &Pg{queries: storage.New(conn), url: config.PostgresUrl}
}

func (d *Pg) Migrate() {
	m, err := migrate.New("file://internal/infrastructure/database/migrations", d.url+"?sslmode=disable")
	if err != nil {
		log.Fatalf("Migration error: %s", err.Error())
	}
	err = m.Up()
	if err != nil && !errors.Is(err, migrate.ErrNoChange) {
		log.Fatalf("Migration error: %s", err.Error())
	}
}

func (d *Pg) Queries() *storage.Queries {
	return d.queries
}
