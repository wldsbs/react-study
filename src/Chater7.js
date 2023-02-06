import { useState } from "react";

function Chapter7() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //submit 해도 새로고침하지 않도록
    if (todo === "") return;
    // setTodos((currentArray) => [todo, ...currentArray]); //나중에 추가한 순서대로
    setTodos((currentArray) => [...currentArray, todo]); //먼저 추가한 순서대로
    setTodo("");
  };
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
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chapter7;
