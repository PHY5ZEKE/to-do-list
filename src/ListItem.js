import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

function ListItem({ itemList, onDelete, onUpdateItems, items }) {
  const [isDone, setIsDone] = useState(itemList.isChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(itemList.name);

  function done(e) {
    e.stopPropagation();
    const updatedIsDone = !isDone;
    setIsDone(updatedIsDone);
    onUpdateItems(
      items.map((item) =>
        item.id === itemList.id ? { ...item, isChecked: updatedIsDone } : item
      )
    );
  }

  function DeleteItem(e) {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(itemList.id);
    }
  }

  function ToggleEdit(e) {
    e.stopPropagation();
    setIsEditing(!isEditing);
  }

  function SaveEdit(e) {
    e.stopPropagation();
    if (editInput.trim() !== "") {
      setIsEditing(false);
      onUpdateItems(
        items.map((item) =>
          item.id === itemList.id ? { ...item, name: editInput } : item
        )
      );
    } else {
      setEditInput(itemList.name); // Reset editInput to the original value
      setIsEditing(false);
    }
  }

  return (
    <li
      className={`my-3 py-3 shadow list-group-item`}
      id={`list${itemList.id}`}
    >
      <div className="row">
        <div className="col-1">
          <input
            className=""
            type="checkbox"
            id={`check${itemList.id}`}
            checked={isDone}
            onChange={(e) => done(e)}
          />
        </div>
        <div className="col-6">
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              id={`edit${itemList.id}`}
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          ) : (
            <span
              className={`h4 ${isDone ? "text-decoration-line-through" : ""}`}
              onClick={ToggleEdit}
            >
              {itemList.name}
            </span>
          )}
        </div>
        <div className="col-4 d-flex justify-content-end">
          <button
            className="btn btn-danger me-2"
            onClick={(e) => DeleteItem(e)}
          >
            <FaTrash />
          </button>
          {isEditing ? (
            <button className="btn btn-success" onClick={(e) => SaveEdit(e)}>
              <FaSave />
            </button>
          ) : (
            <button className="btn btn-warning" onClick={(e) => ToggleEdit(e)}>
              <FaEdit />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
