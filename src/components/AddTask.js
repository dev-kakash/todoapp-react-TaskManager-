import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task");
    }

    onAdd({
      text,
      day,
      remainder,
    });
    setText("");
    setDay("");
    setRemainder(false);
  };
  return (
    <div className="row">
      <form className="add-form col-10 mx-auto" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Day and Time</label>
          <input
            type="text"
            placeholder="Add day and time"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Remainder</label>
          <input
            type="checkbox"
            checked={remainder}
            value={remainder}
            onChange={(e) => {
              setRemainder(e.currentTarget.checked);
            }}
          />
        </div>
        <input type="submit" value="save task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
