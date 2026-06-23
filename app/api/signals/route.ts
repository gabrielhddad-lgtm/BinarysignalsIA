import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simular sinais de trading
    const signals = [
      {
        id: 1,
        symbol: 'EURUSD',
        direction: 'CALL',
        confidence: 0.92,
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        symbol: 'GBPUSD',
        direction: 'PUT',
        confidence: 0.85,
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        symbol: 'USDJPY',
        direction: 'CALL',
        confidence: 0.78,
        timestamp: new Date().toISOString(),
      },
    ]

    return NextResponse.json(signals)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar sinais' },
      { status: 500 }
    )
  }
}
