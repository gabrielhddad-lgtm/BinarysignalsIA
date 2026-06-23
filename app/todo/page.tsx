'use client'

import { useState, useEffect } from 'react'
import { TrashIcon, CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [loaded, setLoaded] = useState(false)

  // Carregar todos do localStorage ao montar
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Erro ao carregar todos:', error)
      }
    }
    setLoaded(true)
  }, [])

  // Salvar todos no localStorage sempre que mudar
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos, loaded])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input,
      completed: false,
      createdAt: new Date(),
    }

    setTodos([newTodo, ...todos])
    setInput('')
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  if (!loaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md">
        <nav className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
            <span className="text-xl font-bold">Meus Todos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {completedCount} de {totalCount}
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Adicione uma nova tarefa..."
              className="flex-1 px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition font-semibold flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Adicionar
            </button>
          </div>
        </form>

        {/* Stats */}
        {totalCount > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-secondary border border-gray-700 rounded-lg text-center">
              <div className="text-2xl font-bold text-accent">{totalCount}</div>
              <div className="text-sm text-gray-400 mt-1">Total de Tarefas</div>
            </div>
            <div className="p-4 bg-secondary border border-gray-700 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-500">{completedCount}</div>
              <div className="text-sm text-gray-400 mt-1">Concluídas</div>
            </div>
            <div className="p-4 bg-secondary border border-gray-700 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-500">{totalCount - completedCount}</div>
              <div className="text-sm text-gray-400 mt-1">Pendentes</div>
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-gray-400 text-lg">Nenhuma tarefa ainda</p>
              <p className="text-gray-500 text-sm mt-2">Adicione uma tarefa para começar</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="p-4 bg-secondary border border-gray-700 rounded-lg hover:border-accent transition flex items-center gap-4"
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                    todo.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-600 hover:border-accent'
                  }`}
                >
                  {todo.completed && <CheckIcon className="w-4 h-4 text-white" />}
                </button>
                <span
                  className={`flex-1 text-lg ${
                    todo.completed
                      ? 'text-gray-500 line-through'
                      : 'text-white'
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
