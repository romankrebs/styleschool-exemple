import React from "react";
import styles from "../../components/styles-for-types";

const Paragraph = function(props) {
  return (
    <div>
      <h2 style={styles.h2garamond}>{props.head}</h2>
      {props.text.map((d, i) => (
        <div style={styles.pPaddingBottom}>{d}</div>
      ))}
    </div>
  );
};

export default Paragraph;
