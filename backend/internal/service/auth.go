package service

import (
	"fmt"
	"time"

	"Syntegra/backend/internal/domain/contracts"
	"github.com/golang-jwt/jwt/v5"
)

var _ contracts.AuthService = (*authService)(nil)

type authService struct {
	secretKey string
}

func NewAuthService(secretKey string) *authService {
	return &authService{
		secretKey: secretKey,
	}
}

func (s *authService) GenerateToken(username string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": username,
		"exp": time.Now().Add(time.Hour * 24 * 7).Unix(),
	})
	tokenString, err := token.SignedString([]byte(s.secretKey))
	return tokenString, err
}

func (s *authService) ParseToken(tokenString string) (jwt.Claims, error) {
	keyFunc := func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("bad signing method: %v", token.Header["alg"])
		}
		return []byte(s.secretKey), nil
	}

	token, err := jwt.Parse(tokenString, keyFunc)
	return token.Claims, err
}

func (s *authService) GetSubFromToken(tokenString string) (string, error) {
	token, err := s.ParseToken(tokenString)
	if err != nil {
		return "", err
	}
	username, err := token.GetSubject()
	if err != nil {
		return "", err
	}
	return username, nil

}

func (s *authService) TokenIsFresh(tokenString string) (bool, error) {
	token, err := s.ParseToken(tokenString)
	if err != nil {
		return true, err
	}
	expdate, err := token.GetExpirationTime()
	now := time.Now()
	return expdate.After(now), nil
}
