import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  var styles = {
    card: {
      boxSizing: "border-box",
      width: 200,
      height: "auto",
      margin: 0,
      padding: 0,
      display: "inline-block",
      lineHeight: 0
    },
    head: {
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: 500,
      color: "rgb(50,50,50)",
      textAlign: "left",
      background: "rgba(200,200,200,1)",
      padding: 4,
      margin: 0,
      lineHeight: "normal"
    },
    image: {
      margin: 0,
      width: 200,
      height: "auto"
    },
    descript: {
      // fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: 400,
      color: "rgb(50,50,50)",
      textAlign: "left",
      background: "rgba(230,230,230,1)",
      margin: 0,
      padding: 4,
      lineHeight: "normal"
    }
  };

  return (
    <Link to={props.link}>
      <div style={styles.card}>
        <img src={props.image} style={styles.image} alt="" />
        <h4 style={styles.head}>{props.head}</h4>
        <p style={styles.descript}>{props.descript}</p>
      </div>
    </Link>
  );
}
