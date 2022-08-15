import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Icon, Button } from '@mui/material';
import db from './Firebase.js'

function Todo( props ) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={ props.todo.todo } />
        <Button 
          onClick={event => db.collection('todos').doc(props.todo.id).delete()}
          variant="outlined" color="error"
        >
          Delete Me
        </Button>
      </ListItem>
    </List>
  )
}

export default Todo