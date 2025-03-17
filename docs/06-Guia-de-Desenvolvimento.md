# Guia de Desenvolvimento

## Estrutura de Diretórios

- `/backend`: Código do servidor Go.
- `/frontend`: Código do cliente Next.js.
- `/docs`: Documentação do projeto.

## Convenções de Commit

- Use mensagens de commit claras e concisas, como:
  - `feat: Adiciona nova funcionalidade X`
  - `fix: Corrige bug na funcionalidade Y`
  - `docs: Atualiza documentação de instalação`

## Testes
Para rodar os testes no Go, use o comando:
```
go test ./...
```

Para rodar os testes no frontend, use:
```
npm test
```