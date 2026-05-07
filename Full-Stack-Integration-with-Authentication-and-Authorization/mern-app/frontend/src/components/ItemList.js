import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/items/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Item List</h2>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;