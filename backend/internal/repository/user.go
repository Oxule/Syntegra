package repository

import (
	"Syntegra/backend/internal/domain/contracts"
	"Syntegra/backend/internal/infrastructure/database"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"context"

	"github.com/google/uuid"
)

var _ contracts.UserRepository = (*userRepo)(nil)

type userRepo struct {
	query *storage.Queries
}

func NewUserRepository(db *database.Pg) *userRepo {
	return &userRepo{
		query: db.Queries(),
	}
}

func (r *userRepo) Create(ctx context.Context, u *storage.CreateUserParams) (uuid.UUID, error) {
	return r.query.CreateUser(ctx, *u)
}

func (r *userRepo) GetByName(ctx context.Context, name string) (*storage.User, error) {
	u, err := r.query.GetUserByName(ctx, name)
	return &u, err
}
