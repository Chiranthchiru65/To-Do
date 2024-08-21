import { useState } from "react";
import Header from "./Header";
import Input from "./input";

import ToDoItems from "./To-Do-Items";

function ToDo() {
  const [todoList, setTodoList] = useState([]);

  function deleteTodo(id) {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div className="bg-neutral-400 place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl">
        <Header />
        {/* input field */}
        <Input setTodoList={setTodoList} />
        {/* input items */}
        <>
          {todoList.map((item) => (
            <ToDoItems
              key={item.id}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </>
      </div>
    </>
  );
}

export default ToDo;
