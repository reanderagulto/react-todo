import React, { useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';


function App() {

const [ todos, setTodos ] = useState(['Take Dogs for a walk', 'Take the rubbish out', 'Study React']);
const [ input, setInput ] = useState('');

const addTodo = (event) => {
  // This will fire off when we click the button 
  event.preventDefault();
  setTodos([...todos, input]); 
  setInput('');
}

return (
  <div className="App">
    <h1>Hello Clever Programmers !!</h1>
    <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input onChange={ event => setInput( event.target.value )} value={input} label="Todo" variant="outlined" />
      </FormControl>
      <Button type="submit" disabled={ !input } onClick={ addTodo } variant="contained">
      Add Todo
      </Button>   
    </form>
    <ul>
    {
      todos.map(todo => (
        <Todo text={todo}/>
        
        // <li>{ todo }</li>
      ))
    }
    </ul>
  </div>
  );
}

export default App;
