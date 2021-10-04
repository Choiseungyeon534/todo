import axios from "axios";
import React,{useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [insert, setInsert] = useState(false);

  //RUN ONCE when the app start



  useEffect(() => {
    axios.get('/api/info').then(res => {
      setTodos(res.data)
    })
  },[insert])

  useEffect(() => {
    let body = {
      status:status
    }
    axios.post('/api/filter',body).then(res => {
      setTodos(res.data)
    })
  },[status])

  return (
    <div className="App">
          <header>
            <h1>SY's Todo List</h1>
          </header>
          <Form 
            inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
            insert={insert}
            setInsert={setInsert}
          />
          <TodoList insert={insert} setInsert={setInsert} setTodos={setTodos} todos={todos} />
        </div>
  );
}

export default App;
