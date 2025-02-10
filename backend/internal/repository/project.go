package repository

import (
	"Syntegra/backend/internal/domain/contracts"
	"Syntegra/backend/internal/infrastructure/database"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"context"
	"github.com/google/uuid"
)

type projectRepo struct {
	query *storage.Queries
}

func (r *projectRepo) Create(ctx context.Context, u *storage.CreateProjectParams) (storage.CreateProjectRow, error) {
	row, err := r.query.CreateProject(ctx, *u)
	if err != nil {
		return storage.CreateProjectRow{}, err
	}
	return row, nil
}

func (r *projectRepo) GetByID(ctx context.Context, projectid uuid.UUID) (storage.Project, error) {
	row, err := r.query.FindByID(ctx, projectid)
	if err != nil {
		return storage.Project{}, err
	}
	return row, nil
}

func (r *projectRepo) Edit(ctx context.Context, u *storage.EditProjectParams) (storage.EditProjectRow, error) {
	row, err := r.query.EditProject(ctx, *u)
	if err != nil {
		return storage.EditProjectRow{}, err
	}
	return row, nil
}

func (r *projectRepo) ListMembers(ctx context.Context, projectid uuid.UUID) ([]storage.ListMembersRow, error) {
	row, err := r.query.ListMembers(ctx, projectid)
	if err != nil {
		return nil, err
	}
	return row, nil
}

func NewProjectRepository(db *database.Pg) contracts.ProjectRepository {
	return &projectRepo{
		query: db.Queries(),
	}
}
