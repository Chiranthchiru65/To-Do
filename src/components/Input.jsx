import { useRef } from "react";

function Input({ setTodoList }) {
  const inputRef = useRef();

  function add() {
    const inputText = inputRef.current.value;

    const newTodo = {
      id: crypto.randomUUID(),
      text: inputText,
      isCompleted: false,
    };
    // const updatedTodoList = [...todoList, newTodo];
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  return (
    <div className="flex items-center my-7 bg-gray-200 rounded-full">
      <input
        ref={inputRef}
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task..."
      />
      <button
        onClick={add}
        className="border-none bg-orange-600 w-32 h-14 rounded-full text-white text-lg font-medium cursor-pointer"
      >
        ADD +
      </button>
    </div>
  );
}

export default Input;
