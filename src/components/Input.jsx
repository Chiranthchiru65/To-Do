import { useState } from "react";

function Input() {
  const [searchInput, setSearchInput] = useState();
  console.log(searchInput);
  return (
    <div>
      <input
        type="text"
        placeholder="Add task..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Input;
