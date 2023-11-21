import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';


function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const Submit = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  const Change = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Typography variant="h3">Todo List</Typography>
      <form>
        <TextField
          label="Todo"
          variant="filled"
          value={input} onChange={Change}/>
        <Button variant="contained" color="primary" onClick={Submit}>Add Todo </Button>
      </form>
      <List>
        {todos.map((todo, index) => (
          <List key={index}>
            <ListItemText primary={todo} />
          </List>
        ))}
      </List>
    </div>
  );
}

export default Todo;
