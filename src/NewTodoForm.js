import React, { useState } from "react";

/** Form for creating a new box.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    setText(evt.target.value);
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo:</label>
      <input
        id="text"
        name="text"
        value={text}
        onChange={handleChange}
      />


      <button>Add Todo!</button>
    </form>
  );
};

export default NewTodoForm;
