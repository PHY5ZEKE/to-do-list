import React, { useState } from "react";
import Header from "./Header.js";
import Form from "./Form.js";
import List from "./List.js";
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(updatedItems) {
    setItems(updatedItems);
  }

  function clearItems() {
    if (items.length === 0) {
      alert("The list is already empty.");
    } else {
      const confirmed = window.confirm(
        "Are you sure you want to delete all exercises?"
      );
      if (confirmed) {
        setItems([]);
      }
    }
  }

  return (
    <div>
      <div className="bg-dark-neon text-neon min-vh-100 d-flex flex-column">
        <div className="flex-grow-1">
          <div className="container my-5">
            <Header />
            <List
              items={items}
              onDelete={handleDeleteItem}
              onUpdateItems={handleUpdateItems}
              onClearAll={clearItems}
              clearItems={clearItems}
            />
            <Footer items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
