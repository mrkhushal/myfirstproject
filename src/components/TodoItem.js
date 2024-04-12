import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [text, setText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
