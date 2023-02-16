const ToDo = ({ id, toDoName, deleteHandler }) => {
  console.log(id);
  return (
    <div
      style={{
        width: "30%",
        background: "yellow",
        display: "flex",
        flexDirection: "row",
      }}
      key={id}
      onClick={() => deleteHandler(id)}
    >
      <p>{toDoName}</p>
    </div>
  );
};
export default ToDo;
