import React, { useState } from "react";
import "./CheckList.css";
export default function CheckList() {
  const checkList = ["Buy milk", "Go to the gym", "Study some more javascript"];

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="container">
      <h1>Todo</h1>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
