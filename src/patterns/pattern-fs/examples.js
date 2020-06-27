import React from "react";
import Slider from "./slider";
import Paragraph from "../../components/p-array";

const styles = {
  imageBox: {
    display: "inline-block",
    textAlign: "center",
    maxWidth: "50%"
  },
  image: {
    maxWidth: "100%"
  },
  descriptBox: {
    display: "inline-block",
    padding: "1rem",
    fontFamily: "Roboto",
    fontSize: "1rem",
    color: "rgb(100,100,100)"
  }
};

function Slides(arr) {
  let conts = [];

  arr.map(
    (el, k) =>
      (conts[k] = (
        <div>
          <div style={styles.imageBox}>
            <img src={el.image} alt="" style={styles.image} />
          </div>
          <div style={styles.descriptBox}>
            <Paragraph content={el.description} />
          </div>
        </div>
      ))
  );
  return conts;
}

function Examples(props) {
  return <Slider slides={Slides(props.content)} />;
}

export default Examples;
