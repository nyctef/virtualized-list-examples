import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import "./styles.css";

storiesOf("VirtualizedList", module).add("1: no virtualization", () => {
  const [count, setCount] = useState(1000);
  console.log({ count });
  const items = new Array(count).fill(null).map((_, i) => `Item ${i}`);

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
            <div key={i} className="item">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
