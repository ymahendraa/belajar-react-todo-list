import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ToDos from "./components/ToDos";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([{ id: "1", name: "Makan" }]);
  const addTodo = (value) => {
    // make functon to add new todo to existing todo
  };

  const deleteTodo = (key) => {
    setToDos((prev) => {
      return prev.filter((todo) => todo.key === key);
    });
  };
  return (
    <div className="wrapper">
      <Header />
      <InputTodo submitHandler={addTodo} />
      <ToDos ToDos={toDos} />
    </div>
  );
}

export default App;
