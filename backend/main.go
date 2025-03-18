package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	//"time"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type ChatRequest struct {
	Message string `json:"message"`
}

type ChatResponse struct {
	Response string `json:"response"`
}

func processChatMessage(message string) (ChatResponse, error) {
	// Chama o servidor Python para obter a resposta da IA
	response, err := getAIResponseFromPython(message)
	if err != nil {
		return ChatResponse{}, err
	}

	return ChatResponse{Response: response}, nil
}

// Função que chama o servidor Python (Flask) para processar a mensagem
func getAIResponseFromPython(message string) (string, error) {
	// Endpoint do servidor Python que processa a mensagem
	url := "http://localhost:5000/get_response"

	// Cria o corpo da requisição
	reqBody := fmt.Sprintf(`{"message": "%s"}`, message)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer([]byte(reqBody)))
	if err != nil {
		return "", err
	}

	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var response map[string]string
	if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
		return "", err
	}

	// Supondo que a resposta da IA seja algo como {"response": "Texto da IA"}
	return response["response"], nil
}

func main() {
	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/welcome", func(c *gin.Context) {
		// Exibe a resposta de boas-vindas para o usuário
		c.JSON(http.StatusOK, ChatResponse{Response: "Olá! Como posso ajudar?"})
	})

	r.POST("/chat", func(c *gin.Context) {
		var chatReq ChatRequest
		if err := c.ShouldBindJSON(&chatReq); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"response": "Por favor, envie uma mensagem válida."})
			return
		}

		// Processa a mensagem com o backend Go (que chama o Python)
		chatResp, err := processChatMessage(chatReq.Message)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"response": "Erro ao processar a mensagem."})
			return
		}

		// Retorna a resposta ao usuário
		c.JSON(http.StatusOK, chatResp)
	})

	port := "15000"
	fmt.Printf("Servidor rodando na porta %s...\n", port)
	if err := r.Run(":" + port); err != nil {
		fmt.Println("Erro ao iniciar o servidor:", err)
	}
}
