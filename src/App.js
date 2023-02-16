import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ToDos from "./components/ToDos";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([{ key: "1", name: "Makan" }]);
  const addTodo = (value) => {
    setToDos([...toDos, { key: Math.random().toString(), name: value }]);
  };

  const deleteTodo = (key) => {
    setToDos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };
  return (
    <div className="wrapper">
      <Header />
      <InputTodo submitHandler={addTodo} />
      <ToDos deleteHandler={deleteTodo} ToDos={toDos} />
    </div>
  );
}

export default App;
