package v1

import "github.com/gofiber/fiber/v2"

type userHandler struct {
}

func NewUserHandler() *userHandler {
	return &userHandler{}
}

func (uh *userHandler) Setup(r fiber.Router) {
	u := r.Group("/user")
	u.Post("/sign-in", uh.Login)
	u.Get("/projects", uh.MyProjects)
	u.Get("/projects/:project_id<guid/>/endpoints", uh.MyEndpointsInProject)
	u.Post("/projects/:project_id<guid/>/endpoints/:endpoint_id<guid/>", uh.SubmitCompletion)

}

// LoginUser godoc
//
//	@Tags		user
//	@Summary	login existed user
//	@Param		RequestBody	body	dto.UserLogin	true	"Logins existed user and returns access token"
//	@Accept		json
//	@Produce	json
//	@Success	200	{object}	dto.UserAuthResponse
//	@Failure	400	{object}	dto.HttpErr
//	@Router		/user/sign-in [post]
func (uh *userHandler) Login(c *fiber.Ctx) error {
	return nil
}

// ListProjects godoc
//
//	@Tags		user
//	@Summary	get list of user projects
//
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Produce	json
//	@Success	200	{array}		dto.ProjectView
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/user/projects [get]
func (uh *userHandler) MyProjects(c *fiber.Ctx) error {
	return nil
}

// ListEndpoints godoc
//
//	@Tags		user
//	@Summary	get list of user endpoints inside given project
//
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Param		project_id		path	string	true	"Project Id"
//	@Produce	json
//	@Success	200	{array}		dto.ProjectView
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/user/projects/{project_id}/endpoints [get]
func (uh *userHandler) MyEndpointsInProject(c *fiber.Ctx) error {
	return nil
}

// ListEndpoints godoc
//
//	@Tags		user
//	@Summary	submit completion of endpoint
//
//	@Security	Bearer
//	@Param		Authorization	header	string	true	"access token 'Bearer {token}'"
//	@Param		project_id		path	string	true	"Project Id"
//	@Param		endpoint_id		path	string	true	"Endpoint Id"
//	@Produce	json
//	@Success	200	{array}		dto.ProjectView
//	@Failure	401	{object}	dto.HttpErr
//	@Router		/user/projects/{project_id}/endpoints/{endpoint_id} [post]
func (uh *userHandler) SubmitCompletion(c *fiber.Ctx) error {
	return nil
}
