import axios from 'axios';
import React from 'react';

const Todo = ({text, todo, todos, setTodos,setInsert,insert}) => {
    
    const completeHandler = () => {
        let body;
        if(todo.clear==="false") {
            todo.clear = true
        } else {
            todo.clear = false
        }

        body = {
            id: todo.id,
            clear: todo.clear
        }

        axios.post('/api/completeButtonClick',body).then(res => {
            console.log(res)
            if(res.data.status==="성공") {
                // axios.get('/api/info').then(res => {
                //     setTodos(res.data)
                //   })
                setInsert(!insert)

            } else {
                alert("에러")
            }
        })

    }

    const deleteHandler = () => {
        let body = {
            id : todo.id
        }
        axios.post('/api/deleteButtonClick', body).then(res => {
            if(res.data.status === "성공") {
                setInsert(!insert)   
            }
        })
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.clear=="true" ? "" : "completed"} `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>

    );
}

export default Todo;