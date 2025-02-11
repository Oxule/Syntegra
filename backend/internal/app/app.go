package app

import (
	"context"
	"log"

	_ "Syntegra/backend/docs"
	v1 "Syntegra/backend/internal/api/handlers/v1"
	"Syntegra/backend/internal/api/middleware"
	"Syntegra/backend/internal/config"
	"Syntegra/backend/internal/infrastructure/database"
	"Syntegra/backend/internal/repository"
	"Syntegra/backend/internal/service"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/swagger"
)

type App struct {
	Config *config.Config
	Fiber  *fiber.App
	DB     *database.Pg
}

func NewApp(ctx context.Context) *App {
	var app App
	app.Config = config.New()
	app.init(ctx)
	return &app
}

func (app *App) Start() {
	log.Fatal(app.Fiber.Listen(app.Config.ServerAddr))
}

func (app *App) init(ctx context.Context) {
	app.connectDB(ctx)
	app.engineSetup(ctx)
	app.handlersSetup(ctx)
}

func (app *App) connectDB(ctx context.Context) {
	app.DB = database.NewPg(ctx, app.Config)
	app.DB.Migrate()
}

func (app *App) engineSetup(ctx context.Context) {
	app.Fiber = fiber.New()
	app.Fiber.Use(recover.New())
	app.Fiber.Use(logger.New())
	app.Fiber.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "*",
	}))
	app.Fiber.Use(middleware.CustomContext(ctx))
}

func (app *App) handlersSetup(ctx context.Context) {
	// route groups
	apiV1 := app.Fiber.Group("/api/v1")

	//add swagger spec
	apiV1.Get("docs/*", swagger.HandlerDefault)

	// repos
	userRepo := repository.NewUserRepository(app.DB)
	// services
	authService := service.NewAuthService(app.Config.SecretKey)

	userService := service.NewUserService(authService, userRepo)

	// handlers
	userHandler := v1.NewUserHandler(userService, app.Config.TrustedUsers())
	projectHandler := v1.NewProjectHandler()

	// setup
	err := userService.RegisterTrusted(ctx, app.Config.TrustedUsers())
	if err != nil {
		log.Fatalf("USER REGISTRATION ERROR: %s", err.Error())
		return
	}
	userHandler.Setup(apiV1)
	projectHandler.Setup(apiV1)
}
