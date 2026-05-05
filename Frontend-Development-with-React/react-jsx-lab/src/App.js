import React from 'react';
import Item from './Item';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>My Items:</h1>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;