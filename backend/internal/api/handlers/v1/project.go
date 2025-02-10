package v1

import "github.com/gofiber/fiber/v2"

type projectHandler struct {
}

func NewProjectHandler() *projectHandler {
	return &projectHandler{}
}

func (uh *projectHandler) Setup(r fiber.Router) {
	p := r.Group("/project")
	// create/edit project
	p.Post("", uh.Create)
	p.Patch("/", uh.Edit)
	// invite/kick contributors
	byId := p.Group("/:project_id<guid/>")
	byId.Post("/:username", uh.Invite)
	byId.Delete("/:username", uh.UnInvite)
	// list all contributors
	byId.Get("/contributors", uh.ListContributors)

}

// CreateProject godoc
//
//	@Tags		project
//	@Summary	create new project
//	@Param		RequestBody	body	dto.ProjectCreate	true	"create new project for authenticated user"
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Accept		json
//	@Produce	json
//	@Success	201	{object}	dto.ProjectView
//	@Failure	400	{object}	dto.HttpErr
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/project [post]
func (uh *projectHandler) Create(c *fiber.Ctx) error {
	return nil
}

// EditProject godoc
//
//	@Tags		project
//	@Summary	edit existing project
//	@Param		RequestBody	body	dto.ProjectEdit	true	"edit project info"
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Accept		json
//	@Produce	json
//	@Success	200	{object}	dto.ProjectView
//	@Failure	400	{object}	dto.HttpErr
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/project [patch]
func (uh *projectHandler) Edit(c *fiber.Ctx) error {
	return nil
}

// ProjectInvite godoc
//
//	@Tags		project
//	@Summary	invite to project
//	@Security	Bearer
//	@Param		project_id		path	string	true	"Project id"
//	@Param		username		path	string	true	"User name"
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Produce	json
//	@Success	200	{object}	dto.OkResponse
//	@Failure	400	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/project/{project_id}/invite/{username} [post]
func (uh *projectHandler) Invite(c *fiber.Ctx) error {
	return nil
}

// ProjectUnInvite godoc
//
//	@Tags		project
//	@Summary	delete user from project
//	@Param		project_id	path	string	true	"Project id"
//	@Param		username	path	string	true	"User name"
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Produce	json
//	@Success	200	{object}	dto.OkResponse
//	@Failure	400	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/project/{project_id}/invite/{username} [delete]
func (uh *projectHandler) UnInvite(c *fiber.Ctx) error {
	return nil
}

// ListContributors godoc
//
//	@Tags		project
//	@Summary	list project members
//	@Security	Bearer
//	@Param		project_id		path	string	true	"Project id"
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Produce	json
//	@Success	200	{array}		dto.ProjectMember
//	@Failure	400	{object}	dto.HttpErr
//	@Failure	403	{object}	dto.HttpErr
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/project/{project_id}/contributors [get]
func (uh *projectHandler) ListContributors(c *fiber.Ctx) error {
	return nil
}
