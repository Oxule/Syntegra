package utils

import (
	"crypto/subtle"
	"encoding/base64"

	"golang.org/x/crypto/argon2"
)

const (
	memory      uint32 = 16 * 1024
	iterations  uint32 = 1
	parallelism uint8  = 1
	hashLength  uint32 = 32
)

func HashPassword(password string) string {
	hash := argon2.IDKey([]byte(password), []byte{}, iterations, memory, parallelism, hashLength)

	b64Hash := base64.RawStdEncoding.EncodeToString(hash)
	return b64Hash
}

func CompareHashAndPassword(hash, password string) bool {
	other := HashPassword(password)
	if ok := subtle.ConstantTimeCompare([]byte(hash), []byte(other)); ok == 1 {
		return true
	}
	return false
}
