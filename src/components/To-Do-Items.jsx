import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
function ToDoItems({ id, text, isComplete, deleteTodo }) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex1 items-center cursor-pointer">
        <img src={tick} alt="tick.img" className="w-7" />
        <p className="tex-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <div className="w-3.9 cursor-pointer ml-auto h-5.5 w-5  rounded">
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={delete_icon}
          alt="img"
        />
      </div>
    </div>
  );
}

export default ToDoItems;
