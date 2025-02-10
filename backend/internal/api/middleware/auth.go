package middleware

import (
	"strings"

	"Syntegra/backend/internal/domain/contracts"
	"Syntegra/backend/internal/domain/dto"
	"github.com/gofiber/fiber/v2"
)

func Auth(authService contracts.AuthService) fiber.Handler {

	return func(c *fiber.Ctx) error {
		bearer := c.Get("Authorization")
		splited := strings.Split(bearer, " ")
		if len(splited) != 2 {
			return c.Status(401).JSON(dto.HttpErr{Message: "Request Unauthorized"})
		}
		tokenString := splited[1]
		ok, err := authService.TokenIsFresh(tokenString)
		if err != nil {
			return c.Status(401).JSON(dto.HttpErr{Message: err.Error()})

		}
		if !ok {
			return c.Status(401).JSON(dto.HttpErr{Message: "token is expired"})
		}
		_, err = authService.GetSubFromToken(tokenString)
		if err != nil {
			return c.Status(401).JSON(dto.HttpErr{Message: err.Error()})
		}
		return c.Next()
	}

}
