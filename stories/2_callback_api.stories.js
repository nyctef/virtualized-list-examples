import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";

import "./styles.css";

const VirtualizedList = props => {
  const { numItems, renderItem } = props;

  const items = [];

  for (let i = 0; i < numItems; i++) {
    items.push(renderItem({ index: i }));
  }

  return (
    <div className="scroll">
      <div className="inner">{items}</div>
    </div>
  );
};

storiesOf("VirtualizedList", module).add("2: callback api", () => {
  const [count, setCount] = useState(1000);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // repopulate the list when count changes
    setItems(
      new Array(count)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}`, checked: false }))
    );
  }, [count]);

  const toggleChecked = i => {
    const newItems = items.slice();
    newItems[i].checked = !newItems[i].checked;
    setItems(newItems);
  };

  return (
    <div className="page">
      <label htmlFor="count-input" />
      <input
        id="count-input"
        value={count}
        onChange={e => {
          setCount(parseInt(e.currentTarget.value));
        }}
      />
      <VirtualizedList
        numItems={items.length}
        renderItem={({ index }) => {
          const i = items[index];
          return (
            <div key={i.name} className="item">
              <label>
                <input
                  type="checkbox"
                  value={i.checked}
                  onChange={() => toggleChecked(i.index)}
                />
                {i.name}
              </label>
            </div>
          );
        }}
      />
    </div>
  );
});
