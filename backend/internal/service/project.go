package service

import (
	"Syntegra/backend/internal/domain/contracts"
	"Syntegra/backend/internal/domain/dto"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"context"
	"github.com/google/uuid"
)

type projectService struct {
	authService contracts.AuthService
	projectRepo contracts.ProjectRepository
}

func NewProjectService(as contracts.AuthService, pr contracts.ProjectRepository) contracts.ProjectService {
	return &projectService{
		authService: as,
		projectRepo: pr,
	}
}

func (s *projectService) Create(ctx context.Context, p dto.ProjectCreate, parent uuid.UUID) (*dto.ProjectView, error) {
	info, err := s.projectRepo.Create(ctx, &storage.CreateProjectParams{
		Name:        p.Name,
		Desctiption: p.Description,
		CreatorID:   parent,
	})
	if err != nil {
		return nil, err
	}
	return &dto.ProjectView{
		Name:        info.Name,
		Description: info.Desctiption,
		Id:          info.ID,
	}, nil
}

func (s *projectService) Edit(ctx context.Context, p dto.ProjectEdit, projectID uuid.UUID) *dto.ProjectView {
	pr, err := s.projectRepo.GetByID(ctx, projectID)
	if err != nil {
		return nil
	}
	// replace nils to current values
	if p.Name == nil {
		p.Name = &pr.Name
	}
	if p.Description == nil {
		p.Description = &pr.Desctiption
	}

	info, err := s.projectRepo.Edit(ctx, &storage.EditProjectParams{
		ID:          pr.ID,
		Name:        *p.Name,
		Desctiption: *p.Name,
	})
	if err != nil {
		return nil
	}
	return &dto.ProjectView{
		Name:        info.Name,
		Description: info.Desctiption,
		Id:          info.ID,
	}
}

func (s *projectService) ListMembers(ctx context.Context, projectId uuid.UUID) []dto.ProjectMember {
	members, err := s.projectRepo.ListMembers(ctx, projectId)
	if err != nil {
		return nil
	}

	// maybe we need mapper (?)
	var result []dto.ProjectMember
	for _, member := range members {
		result = append(result, dto.ProjectMember{
			MemberId: member.MemberID.String(),
			Name:     member.Name.String,
		})
	}
	return result
}

func (s *projectService) Invite(ctx context.Context, projectId uuid.UUID, username string) error {
	// TODO: need user service for fetching userid by username
	return nil
}

func (s *projectService) UnInvite(ctx context.Context, projectId uuid.UUID, username string) error {
	// TODO: need user service for fetching userid by username
	return nil
}
