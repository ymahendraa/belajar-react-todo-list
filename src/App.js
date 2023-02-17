import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ToDos from "./components/ToDos";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([{ id: "1", name: "Makan" }]);
  const [count, setCount] = useState(0);
  // const addTodo = (value) => {
  //   // make functon to add new todo to existing todo
  // };

  const addTodo = useCallback((value) => {
    setToDos([...toDos, { key: Math.random().toString(), name: value }]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  // const deleteTodo = (key) => {
  //   setToDos((prev) => {
  //     return prev.filter((todo) => todo.key === key);
  //   });
  // };

  const deleteTodo = useCallback((key) => {
    setToDos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <InputTodo submitHandler={addTodo} />
      {/* <ToDos ToDos={toDos} /> */}
      <ToDos deleteHandler={deleteTodo} ToDos={toDos} />
    </div>
  );
}

export default App;
