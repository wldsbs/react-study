// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("i run all the time");
  // useEffect : 무조건 한번만 실행된다(state가 바뀌어도)
  // deps로 어떤 걸 관찰하느냐에 따라 다름
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'counter' changeds");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword' changeds");
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
