
# Configurações

## Backend
O backend está configurado para rodar com o Go. As configurações importantes estão no arquivo `config.go`.

- **Banco de dados**: O Go se conecta ao banco de dados PostgreSQL configurado pela variável `DATABASE_URL` no arquivo `.env`.
- **Autenticação**: Utilizamos JWT para autenticação. As chaves secretas são configuráveis em `config.go`.

## Frontend
- **Variáveis de ambiente**: O Next.js utiliza variáveis de ambiente para configurar a conexão com a API e outras configurações.
- **Banco de dados**: As conexões com o backend são feitas através de chamadas HTTP utilizando `axios`.
```
