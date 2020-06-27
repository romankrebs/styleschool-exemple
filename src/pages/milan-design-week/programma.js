import React from "react";
import { withStyles } from "@material-ui/styles";
import { style } from "./styles";
import List from "../../components/list";

const wStyles = theme => style;

const Element = withStyles(wStyles)(props => {
  const { classes } = props;
  return (
    <div>
      <h3
        className={classes.p}
        style={{ paddingTop: props.one ? 0 : "1.1em", fontWeight: 700 }}
      >
        {props.title}
      </h3>
      <List arr={props.list} style={style.pEnd} />
    </div>
  );
});

const Programma = function(props) {
  const { classes } = props;
  return (
    <div>
      <h2
        className={classes.h2small}
        style={props.descript ? { paddingBottom: 0 } : {}}
      >
        {props.title}
      </h2>
      {props.descript ? <p className={classes.p}>{props.descript}</p> : null}
      {props.content.map((d, i) => (
        <Element title={d.title} list={d.list} one={i == 0 ? true : false} />
      ))}
      <div style={{ height: "1.4em" }} />
      {/* <p className={classes.pEnd} style={{ color: "rgb(160,100,100)" }}>
        В программе могут быть небольшие изменения, мы можем поехать в аутлет в
        другой день и пр.
      </p> */}
    </div>
  );
};

export default withStyles(wStyles)(Programma);
