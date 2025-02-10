package contracts

import (
	"Syntegra/backend/internal/domain/dto"
	"context"

	"github.com/google/uuid"
)

type ProjectService interface {
	Create(ctx context.Context, p dto.ProjectCreate) (dto.ProjectView, *dto.HttpErr)
	Edit(ctx context.Context, p dto.ProjectCreate) (dto.ProjectView, *dto.HttpErr)
	ListMembers(ctx context.Context, projectId uuid.UUID) ([]dto.ProjectMember, *dto.HttpErr)
	Invite(ctx context.Context, projectId uuid.UUID, username string) *dto.HttpErr
	UnInvite(ctx context.Context, projectId uuid.UUID, username string) *dto.HttpErr
}

type ProjectRepository interface{}
