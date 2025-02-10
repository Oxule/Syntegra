package dto

type HttpErr struct {
	HttpCode int    `json:"-"`
	Message  string `json:"err" validate:"required" example:"some err description"`
}

func (err *HttpErr) Error() string{
	return err.Message
}

type OkResponse struct {
	Status string `json:"status" validate:"required" example:"ok"`
}
