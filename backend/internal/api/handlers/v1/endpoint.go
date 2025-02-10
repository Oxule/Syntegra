package v1

import "github.com/gofiber/fiber/v2"

type endpointHandler struct{}

func NewEndpointHandler() *endpointHandler {
	return &endpointHandler{}
}

func (uh *endpointHandler) Setup(r fiber.Router) {
	// service create/edit
	s := r.Group("/service")
	s.Post("/", uh.CreateSchema)

	// endpoint create/edit
	serviceById := s.Group("/:service_id<guid/>")
	serviceById.Post("/endpoint", uh.CreateEndpoint)
	// assign/discharge endoint to user
	endpointById := serviceById.Group("/endpoint/:endpoint_id<guid/>")
	endpointById.Post("/:username", uh.AssignEndpoint)

}

// SchemaCreate godoc
//
//	@Tags		endpoint
//	@Summary	create new schema inside of project
//	@Security	Bearer
//	@Param		Authorization	header	string				true	"access token 'Bearer {token}'"
//	@Param		RequestBody		body	dto.SchemaCreate	true	"schema body"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/shema [post]
func (uh *endpointHandler) CreateSchema(c *fiber.Ctx) error {
	return nil
}

// EndpointCreate godoc
//
//	@Tags		endpoint
//	@Summary	create new endpoint
//	@Security	Bearer
//	@Param		Authorization	header	string				true	"access token 'Bearer {token}'"
//	@Param		RequestBody		body	dto.EndpointCreate	true	"body"
//	@Param		schema_id		path	string				true	"Schema Id"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/schema/{schema_id}/endpoint [post]
func (uh *endpointHandler) CreateEndpoint(c *fiber.Ctx) error {
	return nil
}

// EndpointAssign godoc
//
//	@Tags		endpoint
//	@Summary	assign endpoint to contributor
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Param		schema_id		path	string	true	"Schema Id"
//	@Param		endpoint_id		path	string	true	"Endpoint Id"
//	@Param		username		path	string	true	"username"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.OkResponse
//	@Failure	401	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/schema/{schema_id}/endpoint/{endpoint_id}/assign/{username} [post]
func (uh *endpointHandler) AssignEndpoint(c *fiber.Ctx) error {
	return nil
}
