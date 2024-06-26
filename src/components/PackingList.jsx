import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onResetList }) => {
  const [sortBy, setSortBy] = useState("input");

  const sortingFunctions = {
    input: (a, b) => a.id - b.id,
    packed: (a, b) => Number(a.packed) - Number(b.packed) || a.id - b.id,
    description: (a, b) =>
      a.description.localeCompare(b.description) || a.id - b.id,
  };

  const sortedItems = items.toSorted(sortingFunctions[sortBy]);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={() => onDeleteItem(item.id)}
            onToggleItem={() => onToggleItem(item.id)}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onResetList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
