package config

import (
	"fmt"
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	ServerAddr  string
	PostgresUrl string `mapstructure:"POSTGRES_CONN"`
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
