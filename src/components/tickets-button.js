import React from "react";

function Button(props) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        padding: "0.5rem 0 1rem 0"
      }}
    >
      <button
        type="button"
        class="tc-background-default"
        data-tc-event={props.event} // "5e6a411d9ac894fc1968700a"
        data-tc-token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSJ9.eyJwIjoiNWRmZTJiNjM3MWZlZmI2MWNkY2U1MWEzIn0.PbqNyoJClC5TMaIahG9T0HQBCKDHmB1BIM4mzjCpQu4"
      >
        <span
          style={{
            fontSize: "1rem"
          }}
        >
          Купить билет
        </span>
      </button>
    </div>
  );
}

export default Button;
