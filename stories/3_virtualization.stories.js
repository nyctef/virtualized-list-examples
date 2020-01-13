import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";

import "./styles.css";

const VirtualizedList = props => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%"
        }
      })
    );
  }

  const onScroll = e => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
      <div
        className="inner"
        style={{ position: "relative", height: `${innerHeight}px` }}
      >
        {items}
      </div>
    </div>
  );
};

storiesOf("VirtualizedList", module).add("3: virtualization", () => {
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
        itemHeight={40}
        windowHeight={400}
        renderItem={({ index, style }) => {
          const i = items[index];
          return (
            <div key={i.name} className="item" style={style}>
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
