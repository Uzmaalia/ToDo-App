import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write something magical... ✨"
        className="w-full border border-pink-400 rounded-l-xl px-4 py-2 outline-none bg-pink-800 text-white placeholder-pink-300 focus:ring-2 focus:ring-pink-400 focus:bg-pink-700 shadow-inner"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-xl px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm; 