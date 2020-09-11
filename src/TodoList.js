import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
// import './TodoList.css'

const TodoList = ()=> {
    const [todos, setTodos]=useState([]);

    const addTodo=( text )=>{
        const id = uuidv4();
        setTodos(todos=>[...todos,{id, text}]);

    }

    const deleteTodo=(id)=>{
        const idx = todos.findIndex((t)=>t.id===id);
        todos.splice(idx,1);
        setTodos(todos=>[...todos]);
    }

    return(
        <>

        <NewTodoForm addTodo={addTodo}/>
        <div className="TodoList">
            <h2>Todos</h2>
            <ul>
        {todos.map(t=> (<Todo key={t.id} 
            text={t.text} 
            id={t.id}
            deleteTodo={deleteTodo}/>))}
            </ul>
            </div>
        
        </>
    )
}
export default TodoList;
