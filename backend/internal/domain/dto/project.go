package dto

import "github.com/google/uuid"

type ProjectCreate struct {
	Name        string `json:"name" validate:"required" example:"Project Syntegra"`
	Description string `json:"description" validate:"required"  example:"simple team project managing tool"`
}

type ProjectView struct {
	Name        string    `json:"project_name" validate:"required" example:"Project Syntegra"`
	Description string    `json:"description" validate:"required" example:"simple team project managing tool"`
	Id          uuid.UUID `json:"project_id" validate:"required" example:"550e8400-e29b-41d4-a716-446655440000" format:"uuid"`
}

type ProjectEdit struct {
	Name        *string `json:"name"  example:"Project Syntegra"`
	Description *string `json:"description"  example:"simple team project managing tool"`
}

type ProjectMember struct {
	MemberId string `json:"member_id" validate:"required" example:"member_id"`
	Name     string `json:"name" validate:"required" example:"msa"`
}
