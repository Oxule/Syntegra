package v1

import "github.com/gofiber/fiber/v2"

type endpointHandler struct{}

func NewEndpointHandler() *endpointHandler {
	return &endpointHandler{}
}

func (uh *endpointHandler) Setup(r fiber.Router) {
	// service create/edit
	s := r.Group("/service")
	s.Post("/", uh.CreateService)

	// endpoint create/edit
	serviceById := s.Group("/:service_id<guid/>")
	serviceById.Post("/endpoint", uh.CreateEndpoint)
	// assign/discharge endoint to user
	endpointById := serviceById.Group("/endpoint/:endpoint_id<guid/>")
	endpointById.Post("/:username", uh.AssignEndpoint)

}

// ServiceCreate godoc
//
//	@Tags		service
//	@Summary	create new service inside of project
//	@Security	Bearer
//	@Param		Authorization	header	string				true	"access token 'Bearer {token}'"
//	@Param		RequestBody		body	dto.ServiceCreate	true	"body"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/service [post]
func (uh *endpointHandler) CreateService(c *fiber.Ctx) error {
	return nil
}

// EndpointCreate godoc
//
//	@Tags		service
//	@Summary	create new endpoint inside of service
//	@Security	Bearer
//	@Param		Authorization	header	string				true	"access token 'Bearer {token}'"
//	@Param		RequestBody		body	dto.EndpointCreate	true	"body"
//	@Param		service_id		path	string				true	"Service Id"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/service/{service_id}/endpoint [post]
func (uh *endpointHandler) CreateEndpoint(c *fiber.Ctx) error {
	return nil
}

// EndpointAssign godoc
//
//	@Tags		service
//	@Summary	assign endpoint to contributor
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Param		service_id		path	string	true	"Service Id"
//	@Param		endpoint_id		path	string	true	"Endpoint Id"
//	@Param		username		path	string	true	"username"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/service/{service_id}/endpoint/{endpoint_id}/assign/{username} [post]
func (uh *endpointHandler) AssignEndpoint(c *fiber.Ctx) error {
	return nil
}
