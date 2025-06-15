import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border rounded-xl px-4 py-2 gap-x-3 shadow-lg duration-300 text-purple-900 font-medium items-center justify-between transition-all ease-in-out ${
        todo.completed ? 'bg-pink-200/60' : 'bg-pink-100'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-pink-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-lg focus:ring-2 ring-pink-400 ${
          isTodoEditable ? 'border-pink-300 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through text-gray-500' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="w-8 h-8 rounded-full text-sm border border-pink-300 text-pink-600 bg-pink-50 hover:bg-pink-200 shrink-0"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        title={isTodoEditable ? 'Save' : 'Edit'}
      >
        {isTodoEditable ? '💾' : '🖊️'}
      </button>
      <button
        className="w-8 h-8 rounded-full text-sm border border-pink-300 text-pink-600 bg-pink-50 hover:bg-pink-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
        title="Delete"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;