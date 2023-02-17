import React, { useState, useMemo } from "react";

const InputTodo = ({ submitHandler }) => {
  const [todo, setTodo] = useState("");
  console.log("ini dirender");
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          submitHandler(todo);
          setTodo("");
        }}
      >
        submit
      </button>
    </div>
  );
};
export default React.memo(InputTodo);
