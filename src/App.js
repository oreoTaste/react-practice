import propTypes from "prop-types";
import React, { memo, useState } from "react";

function Btn({text, onClick, bgColor="tomato", fontColor="white"}) {
  return (
    <button style={{
      background:bgColor,
      color: fontColor}}
      onClick={onClick}>{text}</button>
  )
}
Btn.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
  bgColor: propTypes.string,
  fontColor: propTypes.string,
}
const MemoBtn = memo(Btn);
function Todo({todo, time, delTodo, bgColor, fontColor}) {
  return (
    <li data-time={time}>{todo}
      <MemoBtn onClick={delTodo} text="-" bgColor={bgColor} fontColor={fontColor}/>
    </li>
  );
}
Todo.propTypes = {
  todo: propTypes.string.isRequired,
  time: propTypes.number.isRequired,
  delTodo: propTypes.func.isRequired
}
const MemoTodo = memo(Todo);
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
  } 
  const onClick = () => {
    if(todo.length <=0) {
      return;
    }
    setTodos((cur) => [{"todo":todo, "time": new Date().getTime()}, ...cur]);
    setTodo("")
  }
  const onChange = (e) => setTodo(e.target.value)
  const delTodo = (e) => {
    let t = parseInt(e.target.parentNode["dataset"].time);
    setTodos((cur) => cur.filter((el) => el["time"] !== t))
  }
  return (
    <>
    <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange} value={todo}/>
    <MemoBtn onClick={onClick} text="Click"/>
    </form>
    <hr/>
    <ul>
    {todos.map(({todo, time}, ind) => <MemoTodo key={ind} todo={todo} time={time} delTodo={delTodo} bgColor={"white"} fontColor={"black"} />)}
    </ul>
    </>
  );
}

export default App;
