# Soluções Comuns

## Erro: "go: module cache is already up to date"
- Solução: Tente rodar o comando `go clean -modcache` para limpar o cache do módulo.

## Erro: "Error: Cannot find module 'axios'"
- Solução: Execute `npm install` para garantir que todas as dependências do frontend foram instaladas corretamente.

## Problema com o banco de dados
- Certifique-se de que as credenciais no `.env` estão corretas e que o PostgreSQL está rodando.
```
