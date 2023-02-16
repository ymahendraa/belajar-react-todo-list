import ToDo from "./ToDo";

const ToDos = ({ ToDos, deleteHandler }) => {
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
export default ToDos;
