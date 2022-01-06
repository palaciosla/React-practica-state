import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function ToDo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        isComplete: false
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
            isComplete: false
        })
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    if(todos.length === 0) {
        return (
            <h3 className='no-task'>I don't have any task :)</h3>
        )
    }

    return todos.map((todo, index) => {
        return(
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    <h3>{todo.text}</h3>
                </div>
                 <div className='icons'>
                    <RiCloseCircleLine 
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon' 
                    />
                    <TiEdit 
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className='edit-icon'
                    />
                </div>
            </div>
        )
    })
}

export default ToDo
