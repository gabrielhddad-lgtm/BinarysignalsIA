# BinarySignalsIA - MCP Server

BinarySignalsIA é um Model Context Protocol (MCP) server para análise de sinais binários e estratégias de negociação, integrado com OpenAI.

## Visão Geral

Este projeto fornece:
- Análise de sinais de trading binários
- Integração com OpenAI GPT
- Protocolo MCP para comunicação estruturada
- Configuração para o MCP Market

## Estrutura do Projeto

```
.
├── README.md
├── LICENSE
├── package.json
├── tsconfig.json
├── .gitignore
├── .env.example
├── config/
│   ├── openai.config.ts
│   ├── mcp.config.ts
│   └── server.config.ts
├── src/
│   ├── index.ts
│   ├── server.ts
│   ├── handlers/
│   │   ├── signals.handler.ts
│   │   ├── analysis.handler.ts
│   │   └── trading.handler.ts
│   ├── tools/
│   │   ├── signal-analyzer.ts
│   │   ├── market-analyzer.ts
│   │   └── strategy-builder.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── validators.ts
│   │   └── converters.ts
│   └── types/
│       └── index.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── setup.ts
└── docker/
    ├── Dockerfile
    └── docker-compose.yml
```

## Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- OpenAI API Key

### Setup

1. Clone o repositório:
```bash
git clone https://github.com/gabrielhddad-lgtm/BinarysignalsIA.git
cd BinarysignalsIA
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Preencha as credenciais no `.env`:
```
OPENAI_API_KEY=seu_api_key_aqui
MCP_SERVER_PORT=3000
MCP_SERVER_HOST=localhost
```

5. Inicie o servidor:
```bash
npm run start
```

## Uso

### Como MCP Server

O servidor está configurado para funcionar com o MCP Market:

```
URL: https://app.mcpmarket.com/medmetodovendas/mcp/binarysignalsia
```

### Ferramentas Disponíveis

1. **Signal Analyzer** - Analisa sinais de trading
2. **Market Analyzer** - Análise de mercado em tempo real
3. **Strategy Builder** - Construtor de estratégias personalizadas

### Exemplo de Uso

```typescript
import { BinarySignalsIA } from './src/index';

const signals = new BinarySignalsIA();

const analysis = await signals.analyzeSignal({
  symbol: 'EURUSD',
  timeframe: '15m',
  indicators: ['RSI', 'MACD', 'Bollinger Bands']
});
```

## Configuração OpenAI

O servidor integra-se com OpenAI para análise avançada:

- Modelo: `gpt-4` ou `gpt-3.5-turbo`
- Função: Análise contextual de sinais
- Tokens: Configurável via ambiente

## Configuração MCP

Arquivos de configuração MCP:
- `config/mcp.config.ts` - Configuração do protocolo
- `config/openai.config.ts` - Integração com OpenAI
- `config/server.config.ts` - Configuração do servidor

## Ambiente de Desenvolvimento

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Testes
npm run test

# Lint
npm run lint
```

## Docker

```bash
# Build da imagem
docker build -t binarysignalsia .

# Executar container
docker run -e OPENAI_API_KEY=your_key -p 3000:3000 binarysignalsia
```

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## Suporte

Para suporte, abra uma issue no repositório ou visite:
- MCP Market: https://app.mcpmarket.com/medmetodovendas/mcp/binarysignalsia
- Documentação: [adicionar link]

## Autor

**gabrielhddad-lgtm** - [GitHub](https://github.com/gabrielhddad-lgtm)
