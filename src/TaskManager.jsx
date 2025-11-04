import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function TaskManager() {
    let [todos, setTodos] = useState([{task:"Make a to-do list app", id: uuidv4(), markAsDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), markAsDone: false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id)=> {
        setTodos((prevTodos)=>todos.filter((prevTodos) => prevTodos.id != id));
    };


    let markDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
            todo.id === id ? { ...todo, markAsDone: true } : todo
            )
        );
    };

    return(
        <div>
            
            <h3 style={{color:"maroon", textDecoration: "underline"}}>Tasks Todo</h3>

            <div className="to-do">
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="to-do-task">
                            <span style={todo.markAsDone?{textDecoration: "line-through"}:{}}>{todo.task}</span>
                            <div className="to-do-task-buttons">
                                
                                <Button
                                    variant="contained"
                                    onClick={() => markDone(todo.id)}
                                    className="task-button-markdone"
                                >
                                    Mark as Done
                                </Button> 

                                <Button
                                    variant="contained"
                                    onClick={() => deleteTodo(todo.id)}
                                    className="task-button-delete"
                                >
                                    Delete Task
                                </Button>
                                                               
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <br />
            <br />

            <br />

            <Box className="add-task" gap={2}>
                <TextField
                    id="standard-basic"
                    label="Write task"
                    variant="outlined"
                    value={newTodo}
                    onChange={updateTodoValue}
                    className="add-task-input"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "maroon",
                        },
                        "&:hover fieldset": {
                            borderColor: "maroon",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "maroon",
                        },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                        color: "maroon",
                        },
                    }}
                />
                <Button
                    variant="contained"
                    onClick={addNewTask}
                    className="add-task-button"
                >
                    Add Task
                </Button>
            </Box>

            
        </div>
    );
}