import React from "react";
import Todo from "./Todo";
const TodoList = ({todos, setTodos,setInsert,insert}) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo setInsert={setInsert} insert={insert} setTodos={setTodos} todos={todos} key={todo.id} text={todo.today} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;