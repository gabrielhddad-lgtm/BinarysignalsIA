'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">⚡</span>
          </div>
          <span className="text-xl font-bold">BinarysignalsIA</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <Link href="/todo" className="text-gray-400 hover:text-white transition">
            Meus Todos
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  )
}
