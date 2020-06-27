import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
// import List from "../../components/list";
import Expand from "../../components/expanded";

export default function Contents(props) {
  return (
    <div>
      <ScrollableAnchor id="programma">
        <h2 style={{ textAlign: "left" }}>Содержание курса</h2>
      </ScrollableAnchor>
      <div style={{ padding: "16px 0", textAlign: "left" }}>
        {props.content.map((el, i) => (
          <Expand
            summary={{
              text: el.title,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 600,
                background: "rgb(245,245,245)"
              }
            }}
            details={{
              text: el.list,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 400
              }
            }}
            key={i}
            expand={true}
          />
        ))}
      </div>
    </div>
  );
}
