import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

function Form({
  onAddItem,
  onClearAll,
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
}) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, isChecked: false, id: Date.now() };
    setName("");
    onAddItem(newItem);
    console.log(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 mb-3">
          <input
            className="py-3 form-control shadow"
            placeholder="Input your exercise"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="inputText"
          />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="col-2">
            <button className="btn btn-dark btn-lg" type="submit">
              <FaPlus /> Add
            </button>
          </div>
          <div className="col-2 ms-2">
            <button onClick={onClearAll} className="btn btn-danger btn-lg">
              <FaTrashAlt /> Clear All
            </button>
          </div>
          <div className="col-3 d-flex align-items-center">
            <span className="me-2">Filter By:</span>
            <select
              className="form-select form-select-sm"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value="all">All</option>
              <option value="done">Done</option>
              <option value="not-done">Not Done</option>
            </select>
          </div>
          <div className="col-3 d-flex align-items-center">
            <span className="me-2">Sort By:</span>
            <select
              className="form-select form-select-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="input">Input</option>
              <option value="name">Name</option>
              <option value="isChecked">Checked</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
