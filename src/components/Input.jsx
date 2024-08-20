import { useState } from "react";

function Input() {
  const [searchInput, setSearchInput] = useState();
  console.log(searchInput);
  return (
    <div className="flex items-center my-7 bg-gray-200 rounded-full">
      <input
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="border-none bg-orange-600 w-32 h-14 rounded-full text-white text-lg font-medium cursor-pointer">
        ADD +
      </button>
    </div>
  );
}

export default Input;
