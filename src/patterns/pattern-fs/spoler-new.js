import React from "react";

function Spoler(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{}}>
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "1rem",
          lineHeight: "1.4rem",
          textAlign: "justify",
          color: "rgb(100,100,100)"
        }}
      >
        {props.short}
        &emsp;
        {props.detail ? (
          <div
            style={{
              fontFamily: "Roboto",
              fontSize: ".9rem",
              color: "rgb(160,100,100)",
              display: "inline",
              opacity: open ? 0.0 : 1.0,
              transition: ".5s opacity",
              cursor: "pointer"
            }}
            onClick={() => setOpen(!open)}
          >
            {props.next || "читать далее…"}
          </div>
        ) : null}
      </div>
      {props.detail ? (
        <div
          style={{
            fontFamily: "Roboto",
            fontSize: "1rem",
            color: "rgb(100,100,100)",
            padding: 0,
            lineHeight: "1.4rem",
            maxHeight: open ? 2000 : 0,
            transition: ".5s max-height",
            overflow: "hidden"
          }}
        >
          {props.detail}
          <div
            style={{
              fontFamily: "Roboto",
              fontSize: ".9rem",
              color: "rgb(160,100,100)",
              cursor: "pointer"
            }}
            onClick={() => setOpen(false)}
          >
            {props.back || "свернуть"}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Spoler;
