import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import ButtonsSpoler from "./buttons-with-spoler";

const wStyles = theme => styles;

const Price = props => {
  const { classes } = props;
  const content = props.content;

  return (
    <div className={classes.box}>
      <h2 className={classes.h2} style={{ fontFamily: "PT Sans Narrow" }}>
        Стоимость обучения
      </h2>
      {props.pay == 3 ? (
        <ButtonsSpoler
          button1={content.ofline.textButton}
          spoler1={content.ofline.text}
          button2={content.online.textButton}
          spoler2={content.online.text}
          button3={content.distant.textButton}
          spoler3={content.distant.text}
          count={3}
        />
      ) : (
        <ButtonsSpoler
          button1={content.ofline.textButton}
          spoler1={content.ofline.text}
          button2={content.online.textButton}
          spoler2={content.online.text}
          button3={content.distant.textButton}
          spoler3={content.distant.text}
          button4={content.free.textButton}
          spoler4={content.free.text}
        />
      )}
    </div>
  );
};

export default withStyles(wStyles)(Price);
