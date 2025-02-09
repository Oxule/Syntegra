package middleware

import (
	"context"

	"github.com/gofiber/fiber/v2"
)

func CustomContext(ctx context.Context) fiber.Handler {
	return func(c *fiber.Ctx) error {
		c.SetUserContext(ctx)
		return c.Next()
	}
}
