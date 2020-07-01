import React from "react";
import { Link } from "react-router-dom";

const Map = props => {
  const style = {
    link: {
      fontFamily: "inherit",
      fontSize: props.inner ? "1.2em" : "1.6em",
      fontWeight: props.inner ? 500 : 700
    },
    noLink: {
      fontFamily: "inherit",
      fontSize: "1.2em",
      fontWeight: 500,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div>
      {props.mapLinks.map((el, i) => (
        <p>
          {i === props.index ? (
            <span style={style.noLink}>&bull; {el.text}</span>
          ) : (
            <Link to={el.link}>
              <span style={style.link}>{el.text}</span>
            </Link>
          )}
        </p>
      ))}
    </div>
  );
};

export default Map;
