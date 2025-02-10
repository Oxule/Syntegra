package contracts

import (
	"context"

	"Syntegra/backend/internal/domain/dto"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"github.com/google/uuid"
)

type UserService interface {
	RegisterTrusted(users map[string]string) error
	Login(ctx context.Context, uLogin *dto.UserLogin) (token string, id uuid.UUID, err error)
}

type UserRepository interface {
	Create(ctx context.Context, u *storage.CreateUserParams) (uuid.UUID, error)
	GetByUserName(ctx context.Context, email string) (*storage.User, error)
}
