import React from 'react';

const Todo = ({text, id, deleteTodo}) => { 
    return (
        <li id={id}>{text}
            <button onClick={()=>deleteTodo(id)}>X</button>
        </li>
)
}

export default Todo;