package routes

import (
	"github.com/gin-gonic/gin"
	"your_project_name_here/controllers" // Altere para o caminho correto dos controllers
)

// SetupRoutes configura as rotas do servidor
func SetupRoutes(r *gin.Engine) {
	// Rota para boas-vindas
	r.GET("/welcome", controllers.WelcomeHandler)

	// Rota para processar mensagens de chat
	r.POST("/chat", controllers.ChatHandler)
}
