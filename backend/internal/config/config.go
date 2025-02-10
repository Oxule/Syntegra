package config

import (
	"fmt"
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	ServerAddr  string
	PostgresUrl string `mapstructure:"POSTGRES_CONN"`
	SecretKey   string `mapstructure:"SECRET_KEY"`
}

var trustedUsers = map[string]string{
	"msa":   "C9VZvUFc17t0ejxeOD+2clqS+H8AN+nhTYknawnQHGs",
	"Oxule": "lEcxeuN37OsyfvWPSuNeZ91SIwwfbK4tIDkJX8M1anQ",
	"test_user": "WG7aNa/UoqeZW5XSn1McCfKHZzpKSFjubDatTsWxhO4",
}

func New() *Config {
	var config Config = Config{}
	viper.SetConfigFile(".env")
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalf("Config error: %s", err.Error())
		return nil
	}
	err = viper.Unmarshal(&config)
	if err != nil {
		log.Fatalf("Config error: %s", err.Error())
		return nil
	}
	config.ServerAddr = fmt.Sprintf("%s:%s", viper.Get("SERVER_HOST"), viper.Get("SERVER_PORT"))

	return &config
}

func (c *Config) TrustedUsers() map[string]string {
	return trustedUsers
}
