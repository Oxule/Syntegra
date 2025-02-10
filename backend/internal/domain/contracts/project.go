package contracts

import (
	"Syntegra/backend/internal/domain/dto"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"context"

	"github.com/google/uuid"
)

type ProjectService interface {
	Create(ctx context.Context, p dto.ProjectCreate, parent uuid.UUID) (*dto.ProjectView, error)
	Edit(ctx context.Context, p dto.ProjectEdit, projectID uuid.UUID) *dto.ProjectView
	ListMembers(ctx context.Context, projectId uuid.UUID) []dto.ProjectMember
	Invite(ctx context.Context, projectId uuid.UUID, username string) error
	UnInvite(ctx context.Context, projectId uuid.UUID, username string) error
}

type ProjectRepository interface {
	Create(ctx context.Context, u *storage.CreateProjectParams) (storage.CreateProjectRow, error)
	GetByID(ctx context.Context, id uuid.UUID) (storage.Project, error)
	Edit(ctx context.Context, u *storage.EditProjectParams) (storage.EditProjectRow, error)
	ListMembers(ctx context.Context, projectid uuid.UUID) ([]storage.ListMembersRow, error)
}
