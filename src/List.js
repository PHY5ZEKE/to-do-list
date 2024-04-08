import { useState } from "react";
import ListItem from "./ListItem.js";
import Form from "./Form.js";
import { FaTrashAlt } from "react-icons/fa";

function List({ items, onDelete, onUpdateItems }) {
  const [sortBy, setSortBy] = useState("input");
  const [filterBy, setFilterBy] = useState("all");

  function sortItems(items, sortBy) {
    let sortedItems = [...items];

    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "isChecked") {
      sortedItems.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
    }

    return sortedItems;
  }

  function filterItems(items, filterBy) {
    if (filterBy === "done") {
      return items.filter((item) => item.isChecked);
    } else if (filterBy === "not-done") {
      return items.filter((item) => !item.isChecked);
    } else {
      return items;
    }
  }

  const sortedItems = sortItems(items, sortBy);
  const filteredItems = filterItems(sortedItems, filterBy);

  function clearItems() {
    if (items.length === 0) {
      alert("The list is already empty.");
    } else {
      const confirmed = window.confirm(
        "Are you sure you want to delete all exercises?"
      );
      if (confirmed) {
        onUpdateItems([]);
      }
    }
  }

  return (
    <div className="row rounded bg-white-neon text-center">
      <div className="col-12">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="col-8 me-2">
            <Form
              onAddItem={(newItem) => {
                const newItems = [...items, newItem];
                onUpdateItems(newItems);
              }}
              onClearAll={clearItems}
              sortBy={sortBy}
              setSortBy={setSortBy}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
            />
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              itemList={item}
              onDelete={onDelete}
              onUpdateItems={onUpdateItems}
              items={items} // Pass the items prop to ListItem
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
