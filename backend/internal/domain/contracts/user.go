package contracts

import (
	"context"

	"Syntegra/backend/internal/domain/dto"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"github.com/google/uuid"
)

type UserService interface {
	RegisterTrusted(ctx context.Context, users map[string]string) error
	Login(ctx context.Context, uLogin *dto.UserLogin) (token string, id uuid.UUID, err *dto.HttpErr)
}

type UserRepository interface {
	Create(ctx context.Context, u *storage.CreateUserParams) (uuid.UUID, error)
	GetByName(ctx context.Context, name string) (*storage.User, error)
}
