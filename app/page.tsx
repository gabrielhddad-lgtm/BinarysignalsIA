import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <span className="text-xl font-bold">BinarysignalsIA</span>
          </div>
          <div className="flex gap-4">
            <Link href="/todo" className="px-4 py-2 text-gray-400 hover:text-white transition">
              Meus Todos
            </Link>
            <Link href="/todo" className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition">
              Começar
            </Link>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            Sinais Binários Inteligentes
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Análise em tempo real com IA para identificar as melhores oportunidades de trading binário.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/todo" className="px-8 py-3 bg-accent text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              Acessar Tarefas
            </Link>
            <button className="px-8 py-3 border border-accent text-accent rounded-lg text-lg font-semibold hover:bg-accent hover:text-primary transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Recursos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '📊', title: 'Análise em Tempo Real', desc: 'Monitoramento contínuo do mercado' },
            { icon: '🤖', title: 'IA Avançada', desc: 'Algoritmos de machine learning' },
            { icon: '✓', title: 'Gerenciador de Tarefas', desc: 'Organize suas atividades' },
          ].map((feature, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-lg hover:border-accent transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-gray-400">
          <p>© 2026 BinarysignalsIA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
