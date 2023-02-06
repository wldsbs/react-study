import { useState } from "react";

function Chapter7() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do ..."
          value={todo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default Chapter7;
