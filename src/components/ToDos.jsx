import React from "react";
import ToDo from "./ToDo";

const ToDos = ({ ToDos, deleteHandler }) => {
  console.log("ini terender");
  return (
    <div>
      {ToDos?.map((todo) => (
        <ToDo
          id={todo.key}
          toDoName={todo.name}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};
// export default ToDos;
export default ToDos;
