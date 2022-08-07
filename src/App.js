import React, { useState } from 'react';
import './App.css';

function App() {

  const [ todos, setTodos ] = useState(['Take Dogs for a walk', 'Take the rubbish out', 'Study React']);

  return (
    <div className="App">
      <h1>Hello Clever Programmers !!</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {
          todos.map(todo => (
            <li>{ todo }</li>
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
