  import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Icon, Button, Modal, Box, Typography, FormControl, Input } from '@mui/material';
import db from './Firebase.js'

function Todo( props ) {

  const [ open, setOpen ] = useState(false);
  const [ input, setInput ] = useState(props.todo.todo);

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true} );
    setOpen(false);
  }

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 20,
    p: 5
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={ boxStyle }>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Todo
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <FormControl>
                <Input value={ input } label="Todo" variant="outlined" onChange={ event => setInput(event.target.value) }/>
              </FormControl>
            </Typography>
            <Button type="submit" disabled={ !input } onClick={ updateTodo } variant="contained" color="success"  sx={{ mt: 2 }}>
              Update
            </Button>   
          </Box>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Icon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Todo" secondary={ props.todo.todo } />
          <Button 
            variant="outlined"
            color="success" 
            onClick={ e => setOpen(true) }
          >
            Edit
          </Button>
          <Button 
            onClick={event => db.collection('todos').doc(props.todo.id).delete()}
            variant="outlined" color="error"
          >
            Delete Me
          </Button>
        </ListItem>
      </List>
    </>
  )
}

export default Todo