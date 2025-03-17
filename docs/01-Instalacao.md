# Instruções de Instalação

Para instalar o projeto, siga as etapas abaixo:

1. **Clone o repositório**
   ```
   git clone https://github.com/usuario/projeto.git
   cd projeto
   ```

2. **Instale as dependências do Backend (Go)**
   - Certifique-se de ter o Go instalado. Caso não tenha, siga o guia de instalação do Go [aqui](https://golang.org/doc/install).
   - Instale as dependências do Go:
     ```
     go mod tidy
     ```

3. **Instale as dependências do Frontend (Next.js)**
   - Instale o Node.js (recomenda-se a versão LTS). Se necessário, baixe [aqui](https://nodejs.org/).
   - Instale as dependências do Next.js:
     ```
     npm install
     ```

4. **Configure o ambiente**
   - Adicione as variáveis de ambiente no arquivo `.env`:
     ```bash
     DATABASE_URL=seu_banco_de_dados
     API_KEY=chave_da_api
     ```

5. **Execute o projeto**
   - Para iniciar o backend:
     ```
     go run main.go
     ```

   - Para iniciar o frontend:
     ```
     npm run dev
     ```

Agora o projeto deve estar rodando em `http://localhost:3000`.
```
