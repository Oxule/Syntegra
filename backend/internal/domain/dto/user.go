package dto

import "github.com/google/uuid"

type UserLogin struct {
	Name             string `json:"name" validate:"required,required" example:"yoyoyo@femail.ru"`
	PasswordUnHashed string `json:"password" validate:"required,password" example:"qwerty234sraiekvaroisehw{}$"`
}

type UserAuthResponse struct {
	Token string    `json:"token" validate:"required"`
	Id    uuid.UUID `json:"id" validate:"required" example:"550e8400-e29b-41d4-a716-446655440000" format:"uuid"`
}

type UserView struct{
	Id uuid.UUID
	Name string
	PasswordHashed string
}
