package main

import (
	"context"

	"Syntegra/backend/internal/app"
)

//	@title		Syntegra backend
//	@version	1.0
//	@host		localhost:3000
//	@BasePath	/api/v1

// @securitydefinitions.apikey	Bearer
// @in							header
// @name						Authorization
// @descrtiption				"access token 'Bearer {token}'"
func main() {
	ctx := context.Background()
	app := app.NewApp(ctx)
	app.Start()
}
