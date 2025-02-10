package contracts

import (
	"Syntegra/backend/internal/domain/dto"
	"context"

	"github.com/google/uuid"
)

type ProjectService interface {
	Create(ctx context.Context, p dto.ProjectCreate) (uuid.UUID, error)
}
