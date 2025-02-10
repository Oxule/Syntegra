package contracts

import (
	"Syntegra/backend/internal/domain/dto"
	"context"
)

type ProjectService interface {
	Create(ctx context.Context, p dto.ProjectCreate) (dto.ProjectView, error)
	Edit(ctx context.Context, p dto.ProjectCreate) dto.ProjectView
}
