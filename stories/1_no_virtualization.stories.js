import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";

import "./styles.css";

storiesOf("VirtualizedList", module).add("1: no virtualization", () => {
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
      <div className="scroll">
        <div className="inner">
          {items.map(i => (
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
          ))}
        </div>
      </div>
    </div>
  );
});
