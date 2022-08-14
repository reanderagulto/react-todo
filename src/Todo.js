import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Icon } from '@mui/material';

function Todo( props ) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={ props.text } />
      </ListItem>
    </List>
  )
}

export default Todo