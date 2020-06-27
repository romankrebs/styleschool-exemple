import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./style";
import { withStyles } from "@material-ui/styles";
import LinkCreater from "./links";

const wStyles = theme => styles;
const font = { fontFamily: "PT Sans Narrow" };

function Tile(props) {
  const { classes } = props;

  return (
    <div style={{ padding: "1rem" }}>
      <div className={classes.tile}>
        <h2 className={classes.h2} style={font}>
          {props.head}
        </h2>
        <h3 className={classes.h3}>{props.typeEducation}</h3>
        <div className={classes.duration}>{props.duration}</div>
        <p className={classes.p}>
          <b>Специализация</b>
          <br />
          {props.specialisation}
        </p>
        <p className={classes.p}>
          <b>Стоимость:</b> {props.price}
        </p>
        <p className={classes.p}>
          <b>В процессе обучения</b>
          <br />
          {props.process}
        </p>
        {props.diplom ? (
          <p className={classes.p}>
            <b>Получите:</b> {props.diplom}
          </p>
        ) : null}
        {props.space ? <div style={{ height: props.space }} /> : null}
        <div style={{ padding: "1rem 0" }}>
          {props.link2 ? (
            <Grid container>
              <Grid item xs={6}>
                <LinkCreater link={props.link} />
              </Grid>
              <Grid item xs={6} style={{ paddingLeft: "1rem" }}>
                <LinkCreater link={props.link2} />
              </Grid>
            </Grid>
          ) : (
            <LinkCreater link={props.link} />
          )}
        </div>
      </div>
    </div>
  );
}

export default withStyles(wStyles)(Tile);
