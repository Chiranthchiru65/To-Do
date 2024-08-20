import Header from "./Header";
import Input from "./input";

import ToDoItems from "./To-Do-Items";

function ToDo() {
  return (
    <>
      <div className="bg-neutral-400 place-self-center w-11/12 max-w-lg flex flex-col p-7 min-h-[550px] rounded-xl">
        <Header />
        {/* input field */}
        <Input />
        {/* input items */}
        <>
          <ToDoItems text="learn coding" />
          <ToDoItems text="learn coding today  " />
        </>
      </div>
    </>
  );
}

export default ToDo;
