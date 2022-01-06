import React, {useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'
import './Form.css'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        if(!todo.text) {
            return 
        }

        const newTodos = [...todos, todo]

        setTodos(newTodos)
        // console.log(todo)
        // console.log(...todos)
        // console.log(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text) {
            return 
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })

        setTodos(updatedTodos);
    }


    return (
        <div className='form-container'>
            <h1 className='title-form'>What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addToDo} />
            <ToDo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default ToDoList
