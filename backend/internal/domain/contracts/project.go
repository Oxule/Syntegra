package contracts

import (
	"Syntegra/backend/internal/domain/dto"
	"context"

	"github.com/google/uuid"
)

type ProjectService interface {
	Create(ctx context.Context, p dto.ProjectCreate) (dto.ProjectView, error)
	Edit(ctx context.Context, p dto.ProjectCreate) dto.ProjectView
	ListMembers(ctx context.Context, projectId uuid.UUID) []dto.ProjectMember
	Invite(ctx context.Context, projectId uuid.UUID, username string) error
	UnInvite(ctx context.Context, projectId uuid.UUID, username string) error
}

type ProjectRepository interface{}
