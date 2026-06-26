import * as dotenv from 'dotenv';

dotenv.config();

export interface MCPConfig {
  serverName: string;
  serverVersion: string;
  port: number;
  host: string;
  protocol: string;
  capabilities: string[];
  tools: ToolDefinition[];
  resources: ResourceDefinition[];
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, any>;
}

export interface ResourceDefinition {
  name: string;
  type: string;
  description: string;
}

const mcpConfig: MCPConfig = {
  serverName: process.env.MCP_SERVER_NAME || 'BinarySignalsIA',
  serverVersion: process.env.MCP_SERVER_VERSION || '1.0.0',
  port: parseInt(process.env.MCP_SERVER_PORT || '3000'),
  host: process.env.MCP_SERVER_HOST || 'localhost',
  protocol: 'mcp/1.0',
  capabilities: [
    'tools',
    'resources',
    'prompts',
    'notifications',
  ],
  tools: [
    {
      name: 'analyze_signal',
      description: 'Analyzes binary signals for trading opportunities',
      inputSchema: {
        type: 'object',
        properties: {
          symbol: { type: 'string', description: 'Trading pair symbol (e.g., EURUSD)' },
          timeframe: { type: 'string', description: 'Timeframe (1m, 5m, 15m, 1h, 4h, 1d)' },
          indicators: { type: 'array', items: { type: 'string' }, description: 'Technical indicators to analyze' },
          period: { type: 'number', description: 'Analysis period in minutes' },
        },
        required: ['symbol', 'timeframe'],
      },
    },
    {
      name: 'market_analysis',
      description: 'Performs comprehensive market analysis',
      inputSchema: {
        type: 'object',
        properties: {
          symbol: { type: 'string', description: 'Trading pair symbol' },
          analysisType: { type: 'string', enum: ['technical', 'fundamental', 'sentiment'] },
          depth: { type: 'string', enum: ['basic', 'detailed', 'comprehensive'] },
        },
        required: ['symbol', 'analysisType'],
      },
    },
    {
      name: 'build_strategy',
      description: 'Builds custom trading strategies',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Strategy name' },
          parameters: { type: 'object', description: 'Strategy parameters' },
          riskLevel: { type: 'string', enum: ['low', 'medium', 'high'] },
          targetProfit: { type: 'number', description: 'Target profit percentage' },
        },
        required: ['name', 'parameters'],
      },
    },
  ],
  resources: [
    {
      name: 'market_data',
      type: 'data_stream',
      description: 'Real-time market data stream',
    },
    {
      name: 'signal_history',
      type: 'database',
      description: 'Historical signal data',
    },
    {
      name: 'strategy_templates',
      type: 'library',
      description: 'Pre-built strategy templates',
    },
  ],
};

export default mcpConfig;
