import * as dotenv from 'dotenv';

dotenv.config();

export interface ServerConfig {
  environment: string;
  logLevel: string;
  port: number;
  host: string;
  corsEnabled: boolean;
  corsOrigins: string[];
  requestTimeout: number;
  maxRequestSize: string;
  rateLimitEnabled: boolean;
  rateLimitWindowMs: number;
  rateLimitMaxRequests: number;
}

const serverConfig: ServerConfig = {
  environment: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
  port: parseInt(process.env.MCP_SERVER_PORT || '3000'),
  host: process.env.MCP_SERVER_HOST || 'localhost',
  corsEnabled: true,
  corsOrigins: [
    'https://app.mcpmarket.com',
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  requestTimeout: 30000,
  maxRequestSize: '10mb',
  rateLimitEnabled: true,
  rateLimitWindowMs: 60000,
  rateLimitMaxRequests: 100,
};

export default serverConfig;
