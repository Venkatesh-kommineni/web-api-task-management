export default {
  openapi: "3.0.0",
  info: {
    title: "Task API",
    version: "1.0.0",
    description: "Simple RESTful API for managing tasks"
  },
  servers: [
    { url: "http://localhost:3000" }
  ],
  paths: {
    "/api/tasks": {
      get: {
        summary: "Get all tasks",
        responses: {
          200: {
            description: "List of tasks",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    message: { type: "string" },
                    data: {
                      type: "array"
                    }
                  }
                },
                example: {
                  success: true,
                  message: "Tasks fetched successfully.",
                  data: [
                    {
                      id: 1,
                      title: "Migrate authentication to OAuth 2.0",
                      description: "Replace legacy session-based auth with OAuth 2.0 + PKCE flow across all microservices.",
                      priority: "Critical",
                      status: "In Progress"
                    }
                  ]
                }
              }
            }
          }
        }
      },
      post: {
        summary: "Create a new task",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              type: "array",
              example: {
                title: "New Task",
                description: "Example description",
                priority: "High",
                status: "Open"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Task created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    message: { type: "string" },
                    data: {
                      type: "array"
                    }
                  }
                },
                example: {
                  success: true,
                  message: "Task created successfully.",
                  data: {
                    id: 10,
                    title: "New Task",
                    description: "Example description",
                    priority: "High",
                    status: "Open"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/tasks/{id}": {
      delete: {
        summary: "Delete a task (requires x-custom-auth header)",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          },
          {
            name: "x-custom-auth",
            in: "header",
            required: true,
            schema: { type: "string" },
            example: "secure-delete"
          }
        ],
        responses: {
          200: {
            description: "Task deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    message: { type: "string" }
                  }
                },
                example: {
                  success: true,
                  message: "Task deleted successfully."
                }
              }
            }
          },
          403: {
            description: "Unauthorized request",
            content: {
              "application/json": {
                example: {
                  success: false,
                  message: "Unauthorized request. Missing or invalid header."
                }
              }
            }
          }
        }
      }
    }
  },
  
};
