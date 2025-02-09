build: fmt swag sqlc
	@echo "[+] DONE"

swag:
	@echo "[+] GENERATING SWAGGER DOC"
	@pkg/swaggo/swag fmt
	@pkg/swaggo/swag init -g cmd/main.go



sqlc:
	@echo "[+] GENERATING SQL"
	@cd internal/infrastructure/database/sqlc;	bash generate.sh


fmt:
	@echo "[+] GO-FMT"
	@gofmt -w .
