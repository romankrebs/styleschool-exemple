import React from "react";
import Grid from "@material-ui/core/Grid";

export default function TextImage(props) {
  let orient,
    leftSize,
    rightSize,
    styleImage,
    styleText,
    left,
    right,
    verticalAlign,
    head = "",
    style;
  props.style !== undefined ? (style = props.style) : (style = {});
  props.orient === undefined ? (orient = "right") : (orient = props.orient);
  props.size.left === undefined ? (leftSize = 6) : (leftSize = props.size.left);
  props.size.right === undefined
    ? (rightSize = 6)
    : (rightSize = props.size.right);
  props.vAlign === undefined
    ? (verticalAlign = "center")
    : (verticalAlign = props.vAlign);
  styleText = {
    // fontFamily: "Roboto",
    fontSize: "1.2em",
    textAlign: "left",
    ...props.text.style
  };
  styleImage = {
    border: "none",
    position: "sticky",
    maxWidth: "100%",
    top: 4,
    ...props.image.style
  };

  const image = (
    <div style={{ textAlign: props.image.align, height: "100%" }}>
      {props.link ? (
        <a href={props.link}>
          <img
            src={props.image.src}
            alt={props.image.altText}
            style={styleImage}
          />
        </a>
      ) : (
        <img
          src={props.image.src}
          alt={props.image.altText}
          style={styleImage}
        />
      )}
    </div>
  );

  const text = <div style={styleText}>{props.text.content}</div>;
  if (orient === "left") {
    left = image;
    right = text;
  } else {
    left = text;
    right = image;
  }

  if (props.head !== "") {
    head = (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontSize: "2em",
              fontFamily: props.fontHead ? props.fontHead : null,
              ...props.styleHead
            }}
          >
            {props.head}
          </h2>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Grid
      container
      justify="center"
      alignItems={verticalAlign}
      style={style}
      spacing={3}
    >
      {head}
      <Grid item xs={12} md={leftSize}>
        {left}
      </Grid>
      <Grid item xs={12} md={rightSize}>
        {right}
      </Grid>
    </Grid>
  );
}
