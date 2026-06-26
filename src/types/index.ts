// Signal Types
export interface Signal {
  symbol: string;
  timeframe: string;
  timestamp: Date;
  type: 'BUY' | 'SELL' | 'HOLD';
  strength: number; // 0-1
  confidence: number; // 0-1
  indicators: IndicatorResult[];
}

export interface IndicatorResult {
  name: string;
  value: number;
  signal: 'BUY' | 'SELL' | 'HOLD';
}

// Analysis Types
export interface AnalysisRequest {
  symbol: string;
  timeframe: string;
  indicators?: string[];
  period?: number;
}

export interface AnalysisResult {
  symbol: string;
  timeframe: string;
  analysis: Signal;
  marketContext: MarketContext;
  recommendation: TradeRecommendation;
}

export interface MarketContext {
  trend: 'UPTREND' | 'DOWNTREND' | 'SIDEWAYS';
  volatility: number;
  support: number[];
  resistance: number[];
  pivotPoints: PivotPoint[];
}

export interface PivotPoint {
  level: string;
  price: number;
}

export interface TradeRecommendation {
  action: 'BUY' | 'SELL' | 'HOLD';
  entryPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  riskRewardRatio?: number;
  confidence: number;
}

// Strategy Types
export interface Strategy {
  id: string;
  name: string;
  description?: string;
  parameters: StrategyParameter[];
  rules: StrategyRule[];
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  targetProfit: number;
  maxDrawdown: number;
}

export interface StrategyParameter {
  name: string;
  type: string;
  value: any;
  min?: number;
  max?: number;
}

export interface StrategyRule {
  condition: string;
  action: 'BUY' | 'SELL' | 'HOLD';
  priority: number;
}

// MCP Protocol Types
export interface MCPRequest {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params?: Record<string, any>;
}

export interface MCPResponse {
  jsonrpc: '2.0';
  id: string | number;
  result?: any;
  error?: MCPError;
}

export interface MCPError {
  code: number;
  message: string;
  data?: any;
}

// Tool Types
export interface Tool {
  name: string;
  description: string;
  execute: (params: Record<string, any>) => Promise<any>;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}
