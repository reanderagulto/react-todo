import React, { useState } from 'react';
import './App.css';

function App() {

  const [ todos, setTodos ] = useState(['Take Dogs for a walk', 'Take the rubbish out', 'Study React']);
  const [ input, setInput ] = useState('');
  
  const addTodo = (event) => {
    // This will fire off when we click the button 
    setTodos([...todos, input]); 
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmers !!</h1>
      <input value={input} onChange={ event => setInput( event.target.value )} />
      <button onClick={ addTodo }>Add Todo</button>
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
