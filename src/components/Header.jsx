import todo_icon from "../assets/todo_icon.png";
function Header() {
  return (
    <header className="flex items-center mt-7 gap-2">
      <img src={todo_icon} alt="todo-img" className="w-8" />
      <h1 className="text-3xl font-semibold">To-Do List</h1>
    </header>
  );
}

export default Header;
