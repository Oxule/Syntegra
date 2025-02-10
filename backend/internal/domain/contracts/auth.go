package contracts

import "github.com/golang-jwt/jwt/v5"

type AuthService interface {
	GenerateToken(username string) (string, error)
	ParseToken(tokenString string) (jwt.Claims, error)
	GetSubFromToken(tokenString string) (string, error)
	TokenIsFresh(tokenString string) (bool, error)
}
