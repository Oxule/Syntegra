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
