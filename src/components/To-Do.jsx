import { useState } from "react";
import Header from "./Header";
import Input from "./input";

import ToDoItems from "./To-Do-Items";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  return (
    <>
      <div className="bg-neutral-400 place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl">
        <Header />
        {/* input field */}
        <Input setTodoList={setTodoList} />
        {/* input items */}
        <>
          <ToDoItems text="learn coding" />
          {todoList.map((item) => (
            <ToDoItems key={item.id} text={item.text} />
          ))}
        </>
      </div>
    </>
  );
}

export default ToDo;
