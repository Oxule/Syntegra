package dto

import "github.com/google/uuid"

type SchemaCreate struct {
	ProjectId  uuid.UUID      `json:"project_id" validate:"required" example:"550e8400-e29b-41d4-a716-446655440000" format:"uuid"`
	Name       string         `json:"name" validate:"required" example:"user"`
	ServiceTag string         `json:"service_tag"`
	NeedsAuth  bool           `json:"needs_auth" example:"false"`
	Details    map[string]any `json:"details" validate:"required"`
}

type EndpointCreate struct {
	Name   string `json:"name" validate:"required" example:"user sign-up endpoint"`
	Path   string `json:"path" validate:"required" example:"/user/sign-up"`
	Method string `json:"method" validate:"required,oneofci=GET POST PUT PATCH DELETE" enums:"GET,POST,PUT,PATCH,DELETE" example:"POST"`
}
