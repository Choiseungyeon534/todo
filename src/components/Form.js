import axios from "axios";
import React from "react";


const Form = ({setInputText, todos, setTodos,setInsert,insert, inputText, setStatus}) => {
    //Here I can write javascript code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        // let {value} = e.target
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();

        let body = {
          today : inputText,
          clear: false
        }
        axios.post('/api/todoInsert',body).then((res) => {
          if (res.data.status === "성공") {
            alert("성공");
            setInsert(!insert);
          } else {
            alert("실패");
          }
        })
        setInputText("")
    };
    const statusHandler = (e) => {
      setStatus(e.target.value);
    };
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;

