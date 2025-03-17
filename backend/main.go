package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

// Estrutura para receber mensagens do usuário
type ChatRequest struct {
	Message string `json:"message"`
}

// Estrutura para resposta do chatbot
type ChatResponse struct {
	Response    string   `json:"response"`
	Suggestions []string `json:"suggestions,omitempty"`
	Action      string   `json:"action,omitempty"`
	WhatsAppLink string  `json:"whatsappLink,omitempty"`
}

// Simula respostas do chatbot
func processChatMessage(message string) string {
	responses := map[string][]string{
		"default": {
			"Desculpe, não entendi sua mensagem. Poderia ser mais específico?",
			"Não consegui compreender. Você pode tentar reformular sua pergunta?",
		},
		"greeting": {
			"Olá! 👋 Como posso ajudar você hoje?",
			"Oi! Tudo bem? Estou aqui para te ajudar! 😊",
		},
		"services": {
			"Oferecemos Desenvolvimento de Sistemas, UX/UI Design e Consultoria Tecnológica. Qual deles interessa?",
		},
		"pricing": {
			"Para informações sobre preços, entre em contato conosco para um orçamento personalizado!",
		},
		"forwardToWhatsApp": {
			"Entendi! Vou preparar sua solicitação e redirecioná-lo para o WhatsApp.",
		},
	}

	normalizedMessage := strings.ToLower(message)

	switch {
	case strings.Contains(normalizedMessage, "oi") || strings.Contains(normalizedMessage, "olá"):
		return getRandomResponse(responses["greeting"])
	case strings.Contains(normalizedMessage, "serviços"):
		return getRandomResponse(responses["services"])
	case strings.Contains(normalizedMessage, "preço") || strings.Contains(normalizedMessage, "valor"):
		return getRandomResponse(responses["pricing"])
	case strings.Contains(normalizedMessage, "clínica") || strings.Contains(normalizedMessage, "demanda"):
		return getRandomResponse(responses["forwardToWhatsApp"])
	default:
		return getRandomResponse(responses["default"])
	}
}

// Retorna uma resposta aleatória
func getRandomResponse(options []string) string {
	rand.Seed(time.Now().UnixNano())
	return options[rand.Intn(len(options))]
}

// Gera link do WhatsApp
func generateWhatsAppLink(userMessage string) string {
	phoneNumber := "5521966311677"
	message := fmt.Sprintf("Olá! Recebemos a seguinte demanda: \"%s\". Por favor, entre em contato.", userMessage)
	return fmt.Sprintf("https://wa.me/%s?text=%s", phoneNumber, message)
}

func main() {
	r := gin.Default()
	r.POST("/chat", func(c *gin.Context) {
		var chatReq ChatRequest
		if err := c.ShouldBindJSON(&chatReq); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"response": "Por favor, envie uma mensagem válida."})
			return
		}

		response := processChatMessage(chatReq.Message)
		chatResp := ChatResponse{Response: response, Suggestions: []string{"Serviços", "Preços", "Falar com Especialista"}}

		// Verifica se precisa redirecionar para WhatsApp
		if strings.Contains(response, "redirecioná-lo para o WhatsApp") {
			chatResp.Action = "forward_to_whatsapp"
			chatResp.WhatsAppLink = generateWhatsAppLink(chatReq.Message)
		}

		time.Sleep(1 * time.Second) // Simula um delay antes de responder
		c.JSON(http.StatusOK, chatResp)
	})

	port := "15000"
	fmt.Println("Servidor rodando na porta " + port + "...")
	r.Run(":" + port)
}
