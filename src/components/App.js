import React, { useState } from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>
            {todo.text} {todo.completed ? "✅ Completed" : ""}
          </span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn JavaScript", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;