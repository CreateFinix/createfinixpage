# CreateFinix - Soluções Tecnológicas Personalizadas

CreateFinix é um projeto focado em fornecer soluções tecnológicas inovadoras para empresas, oferecendo serviços como desenvolvimento de sistemas, design UX/UI e consultoria tecnológica. O objetivo é transformar negócios por meio de tecnologias avançadas e personalizadas.

## Funcionalidades

- **Desenvolvimento de Sistemas**: Construímos sistemas sob medida para atender às necessidades específicas de cada cliente.
- **Design UX/UI**: Criamos experiências de usuário intuitivas e designs inovadores.
- **Consultoria Tecnológica**: Oferecemos consultoria para otimização de processos e integração de tecnologias no seu negócio.

Além disso, o projeto também inclui um chatbot integrado com a API para interação com os usuários e redirecionamento para o WhatsApp quando necessário.

## Tecnologias Utilizadas

- **Frontend**: Next.js (React)
- **Backend**: Go (Gin Framework)
- **Banco de Dados**: PostgreSQL (em futuro desenvolvimento)
- **Outras**: Tailwind CSS, FontAwesome

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Go](https://golang.org/)
- [PostgreSQL](https://www.postgresql.org/) (caso queira configurar o banco de dados futuramente)

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/CreateFinix/createfinixpage.git
cd createfinixpage
```

### Passo 2: Configuração do Backend

1. Acesse a pasta do backend e instale as dependências:

```bash
cd backend
go mod tidy
```

2. Execute o servidor backend:

```bash
go run main.go
```

O servidor backend estará rodando na porta `15000`.

### Passo 3: Configuração do Frontend

1. Acesse a pasta do frontend e instale as dependências:

```bash
cd frontend
npm install
```

2. Execute o servidor frontend:

```bash
npm run dev
```

O servidor frontend estará rodando na porta `3000`.

### Passo 4: Rodando ambos os servidores simultaneamente

Para rodar o frontend e o backend simultaneamente, você pode usar o `concurrently`:

```bash
npm run dev
```

Isso irá iniciar ambos os servidores automaticamente.

## Como Interagir com o ChatBot

- O chatbot está disponível na interface do frontend. Ao enviar uma mensagem, ele irá responder automaticamente com base no conteúdo da mensagem.
- O chatbot pode redirecionar o usuário para o WhatsApp caso seja necessário entrar em contato diretamente com um especialista.

## Documentação Adicional

Para informações mais detalhadas sobre a arquitetura, configuração do banco de dados ou como contribuir para o projeto, consulte a documentação adicional abaixo:
- [Instalação](docs/01-Instalacao.md)
- [Dependencias](docs/02-Dependencias.md)
- [Configuração](docs/03-configuracao.md)
- [Replicando](docs/04-Replicando.md)
- [Soluções Comuns](docs/05-Solucoes.md)
- [Guia de Desenvolvimento](docs/06-Guia-de-Desenvolvimento.md)

## Contribuições

Se você deseja contribuir para o projeto, fique à vontade para abrir issues ou enviar pull requests. Para mais informações sobre como contribuir, acesse a seção de [Como Contribuir](docs/Contribuir.md).

## Licença

Este projeto está licenciado sob a [GNU v3](LICENSE).
