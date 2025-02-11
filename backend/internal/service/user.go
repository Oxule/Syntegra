package service

import (
	"Syntegra/backend/internal/domain/contracts"
	"Syntegra/backend/internal/domain/dto"
	"Syntegra/backend/internal/infrastructure/database/sqlc/storage"
	"Syntegra/backend/internal/utils"
	"context"

	"github.com/google/uuid"
)

var _ contracts.UserService = (*userService)(nil)

type userService struct {
	authService contracts.AuthService
	userRepo    contracts.UserRepository
}

func NewUserService(as contracts.AuthService, ur contracts.UserRepository) *userService {
	return &userService{
		authService: as,
		userRepo:    ur,
	}
}

func (s *userService) RegisterTrusted(ctx context.Context, users map[string]string) error {
	for k, v := range users {
		if _, err := s.GetByName(ctx, k); err == nil{
			continue
		}
		_, err := s.userRepo.Create(ctx, &storage.CreateUserParams{Name: k, Password: v})
		if err != nil {
			return err
		}
	}
	return nil
}

func (s *userService) Login(ctx context.Context, uLogin *dto.UserLogin, trustedUsers map[string]string) (token string, id uuid.UUID, err *dto.HttpErr) {
	_, ok := trustedUsers[uLogin.Name]
	if !ok {
		return token, id, &dto.HttpErr{
			HttpCode: 400,
			Message: "no user registered on this username",
		}
	}
	ok = utils.CompareHashAndPassword(trustedUsers[uLogin.Name], uLogin.PasswordUnHashed)
	if !ok {
		return token, id, &dto.HttpErr{
			HttpCode: 400,
			Message: "password mismatch",
		}
	}
	token, authErr := s.authService.GenerateToken(uLogin.Name)
	if authErr != nil {
		return token, id, &dto.HttpErr{HttpCode: 400, Message: authErr.Error()}
	}
	user, _ := s.userRepo.GetByName(ctx, uLogin.Name)
	return token, user.ID, nil
}


func (s *userService) GetByName(ctx context.Context, name string) (*dto.UserView, *dto.HttpErr){
	user, err := s.userRepo.GetByName(ctx, name)
	if err != nil{
		return nil, &dto.HttpErr{
			HttpCode: 400,
			Message: "user not found",
		}
	}
	return &dto.UserView{
		Id: user.ID,
		Name: user.Name,
		PasswordHashed: user.Password,
	}, nil	
}

