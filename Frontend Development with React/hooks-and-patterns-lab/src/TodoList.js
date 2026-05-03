import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.slice(0, 10).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
  );
};

export default TodoList;