import React, { useState } from "react";

const Facebook = function(props) {
  const [hover, setHover] = useState(false);

  const color = props.color || "rgb(160,160,160)";
  const hoverColor = props.hoverColor || "rgb(191,159,37)";

  return (
    <a
      href={props.link || "https://www.facebook.com/styleschool.ru/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width={props.size || "20px"}
        height={props.size || "20px"}
        viewBox="0 0 24 24"
        style={{ marginBottom: -4, ...props.style }}
        onMouseOver={() => setHover(!hover)}
        onMouseOut={() => setHover(!hover)}
      >
        <path
          fill={hover ? hoverColor : color}
          d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6C10,3.79 11.79,2 14,2H17Z"
        />
      </svg>
    </a>
  );
};

export default Facebook;
