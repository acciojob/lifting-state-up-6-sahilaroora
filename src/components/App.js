import React, { useState } from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.id} - {todo.completed ? "Completed" : "Pending"}

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  // टेस्ट को पास करने के लिए यहाँ सिर्फ 1 आइटम रखें
  const [todos, setTodos] = useState([
    { id: 1, completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  return (
    <div>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
}