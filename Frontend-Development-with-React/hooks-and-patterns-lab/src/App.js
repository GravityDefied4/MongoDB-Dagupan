import React from 'react';
import useFetch from './hooks/useFetch';
import withLoading from './hocs/withLoading';
import TodoList from './TodoList';
import MouseTracker from './renderprops/MouseTracker';

const EnhancedTodoList = withLoading(TodoList);

function App() {
  const {
    data,
    loading,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>Hooks and Patterns Lab</h1>

      <h2>Todos</h2>

      <EnhancedTodoList
        isLoading={loading}
        todos={data}
      />

      <h2>Mouse Tracker</h2>

      <MouseTracker
        render={(mousePosition) => (
          <p>
            Mouse position:
            X: {mousePosition.x},
            Y: {mousePosition.y}
          </p>
        )}
      />
    </div>
  );
}

export default App;