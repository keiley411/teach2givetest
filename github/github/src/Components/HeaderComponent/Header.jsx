import React, { useState } from "react";
import "./index.css";
function HeaderComponent({ onSearch }) {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    onSearch(text);
  }
  return (
    <div className="major">
      <h1>GITHUB SEARCH TOOL</h1>

      <div className="text">
        <input type="text" value={text} onChange={handleChange} />
        <input 
          type="button"
          value="Search a github user"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default HeaderComponent;
