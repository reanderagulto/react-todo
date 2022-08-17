import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import db from './Firebase.js'
import firebase from 'firebase/compat/app';

function App() {

  const [ todos, setTodos ] = useState([]);
  const [ input, setInput ] = useState('');

  // When the app loads, listen the database and get todos.
  useEffect(() => {
    // This code here... fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    });
  }, []);

  console.log(todos);

  const addTodo = (event) => {
    // This will fire off when we click the button 
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }); 

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
          <Todo todo={todo}/>
        ))
      }
      </ul>
    </div>
    );
}

export default App;
