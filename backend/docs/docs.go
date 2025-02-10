// Package docs Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/project": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "project"
                ],
                "summary": "create new project",
                "parameters": [
                    {
                        "description": "create new project for authenticated user",
                        "name": "RequestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/dto.ProjectCreate"
                        }
                    },
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/dto.ProjectView"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            },
            "patch": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "project"
                ],
                "summary": "edit existing project",
                "parameters": [
                    {
                        "description": "edit project info",
                        "name": "RequestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/dto.ProjectEdit"
                        }
                    },
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/dto.ProjectView"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/project/{project_id}/contributors": {
            "get": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "project"
                ],
                "summary": "list project members",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Project id",
                        "name": "project_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dto.ProjectMember"
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/project/{project_id}/invite/{username}": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "project"
                ],
                "summary": "invite to project",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Project id",
                        "name": "project_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "User name",
                        "name": "username",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/dto.OkResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "project"
                ],
                "summary": "delete user from project",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Project id",
                        "name": "project_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "User name",
                        "name": "username",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/dto.OkResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/schema/{schema_id}/endpoint": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "endpoint"
                ],
                "summary": "create new endpoint",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    },
                    {
                        "description": "body",
                        "name": "RequestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/dto.EndpointCreate"
                        }
                    },
                    {
                        "type": "string",
                        "description": "Schema Id",
                        "name": "schema_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/dto.OkResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/schema/{schema_id}/endpoint/{endpoint_id}/assign/{username}": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "endpoint"
                ],
                "summary": "assign endpoint to contributor",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Schema Id",
                        "name": "schema_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Endpoint Id",
                        "name": "endpoint_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "username",
                        "name": "username",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/dto.OkResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/shema": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "endpoint"
                ],
                "summary": "create new schema inside of project",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    },
                    {
                        "description": "schema body",
                        "name": "RequestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/dto.SchemaCreate"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/dto.OkResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    },
                    "403": {
                        "description": "Forbidden",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/user/projects": {
            "get": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "get list of user projects",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dto.ProjectView"
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/user/projects/{project_id}/endpoints": {
            "get": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "get list of user endpoints inside given project",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Project Id",
                        "name": "project_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dto.ProjectView"
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/user/projects/{project_id}/endpoints/{endpoint_id}": {
            "post": {
                "security": [
                    {
                        "Bearer": []
                    }
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "submit completion of endpoint",
                "parameters": [
                    {
                        "type": "string",
                        "description": "access token 'Bearer {token}'",
                        "name": "Authorization",
                        "in": "header",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Project Id",
                        "name": "project_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Endpoint Id",
                        "name": "endpoint_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/dto.ProjectView"
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        },
        "/user/sign-in": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "login existed user",
                "parameters": [
                    {
                        "description": "Logins existed user and returns access token",
                        "name": "RequestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/dto.UserLogin"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/dto.UserAuthResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/dto.HttpErr"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "dto.EndpointCreate": {
            "type": "object",
            "required": [
                "method",
                "name",
                "path"
            ],
            "properties": {
                "method": {
                    "type": "string",
                    "enum": [
                        "GET",
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE"
                    ],
                    "example": "POST"
                },
                "name": {
                    "type": "string",
                    "example": "user sign-up endpoint"
                },
                "path": {
                    "type": "string",
                    "example": "/user/sign-up"
                }
            }
        },
        "dto.HttpErr": {
            "type": "object",
            "required": [
                "err"
            ],
            "properties": {
                "err": {
                    "type": "string",
                    "example": "some err description"
                }
            }
        },
        "dto.OkResponse": {
            "type": "object",
            "required": [
                "status"
            ],
            "properties": {
                "status": {
                    "type": "string",
                    "example": "ok"
                }
            }
        },
        "dto.ProjectCreate": {
            "type": "object",
            "required": [
                "description",
                "name"
            ],
            "properties": {
                "description": {
                    "type": "string",
                    "example": "simple team project managing tool"
                },
                "name": {
                    "type": "string",
                    "example": "Project Syntegra"
                }
            }
        },
        "dto.ProjectEdit": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string",
                    "example": "simple team project managing tool"
                },
                "name": {
                    "type": "string",
                    "example": "Project Syntegra"
                }
            }
        },
        "dto.ProjectMember": {
            "type": "object",
            "required": [
                "member_id",
                "name"
            ],
            "properties": {
                "member_id": {
                    "type": "string",
                    "example": "member_id"
                },
                "name": {
                    "type": "string",
                    "example": "msa"
                }
            }
        },
        "dto.ProjectView": {
            "type": "object",
            "required": [
                "description",
                "project_id",
                "project_name"
            ],
            "properties": {
                "description": {
                    "type": "string",
                    "example": "simple team project managing tool"
                },
                "project_id": {
                    "type": "string",
                    "format": "uuid",
                    "example": "550e8400-e29b-41d4-a716-446655440000"
                },
                "project_name": {
                    "type": "string",
                    "example": "Project Syntegra"
                }
            }
        },
        "dto.SchemaCreate": {
            "type": "object",
            "required": [
                "details",
                "name",
                "project_id"
            ],
            "properties": {
                "details": {
                    "type": "object",
                    "additionalProperties": {}
                },
                "name": {
                    "type": "string",
                    "example": "user"
                },
                "needs_auth": {
                    "type": "boolean",
                    "example": false
                },
                "project_id": {
                    "type": "string",
                    "format": "uuid",
                    "example": "550e8400-e29b-41d4-a716-446655440000"
                },
                "service_tag": {
                    "type": "string"
                }
            }
        },
        "dto.UserAuthResponse": {
            "type": "object",
            "required": [
                "id",
                "token"
            ],
            "properties": {
                "id": {
                    "type": "string",
                    "format": "uuid",
                    "example": "550e8400-e29b-41d4-a716-446655440000"
                },
                "token": {
                    "type": "string"
                }
            }
        },
        "dto.UserLogin": {
            "type": "object",
            "required": [
                "name",
                "password"
            ],
            "properties": {
                "name": {
                    "type": "string",
                    "example": "yoyoyo@femail.ru"
                },
                "password": {
                    "type": "string",
                    "example": "qwerty234sraiekvaroisehw{}$"
                }
            }
        }
    },
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "localhost:3000",
	BasePath:         "/api/v1",
	Schemes:          []string{},
	Title:            "Syntegra backend",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
