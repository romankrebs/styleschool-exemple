import React from "react";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

function Inner(props) {
  return (
    <div
      style={{
        padding: 10,
        paddingTop: 16,
        paddingBottom: 4,
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        color: props.color,
        background: props.bkg,
        borderRadius: 6,
        width: "auto",
        minWidth: 96,
        height: 40,
        textAlign: "center",
        marginRight: 20
      }}
    >
      {props.text}
    </div>
  );
}

class Box extends React.Component {
  state = {
    color: "rgba(255,250,246)"
  };
  style = {
    background: "rgba(255,250,246,1)",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 6
  };
  hover = () => {
    this.setState({ color: this.props.color });
  };
  out = () => {
    this.setState({ color: "rgba(255,250,246,1)" });
  };
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ ...this.style, background: this.state.color }}
        onMouseOver={this.hover}
        onMouseOut={this.out}
      >
        <Grid item xs={3} sm={3} md={3}>
          <Inner
            text={this.props.price}
            color={this.props.textInnerColor}
            bkg={this.props.bkgInner}
          />
        </Grid>
        <Grid item xs={9} sm={9} md={9}>
          <div style={{ paddingLeft: 20 }}>{this.props.text}</div>
        </Grid>
      </Grid>
    );
  }
}

export default function Price() {
  var styles = {
    title: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: 700,
      color: "rgb(110,110,110)",
      textAlign: "left",
      padding: 5,
      paddingLeft: 25,
      margin: 0
    },
    text: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "rgb(110,110,110)",
      textAlign: "left",
      padding: 5,
      paddingLeft: 25,
      margin: 0
    }
  };
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "1.6em",
            fontWeight: 700,
            color: "rgb(80,80,80)",
            textAlign: "center"
          }}
        >
          Стоимость
        </h2>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          text={<p style={styles.title}>РАЗОВАЯ</p>}
          color="rgb(230,255,250)"
          price="от 600₽"
          bkgInner="rgb(222,239,244)"
          textInnerColor="rgb(69,217,255)"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          text={
            <div>
              <p style={styles.title}>ПОДПИСКА НА 6 МЕСЯЦЕВ</p>
              {/* <p style={styles.text}>Доступ без ограничений</p> */}
            </div>
          }
          color="rgb(250,245,255)"
          price="6 900₽"
          bkgInner="rgb(230,243,218)"
          textInnerColor="rgb(126,198,94)"
        />
      </Grid>

      {/* <Grid item xs={12} md={6}>
        <Box
          text={
            <div>
              <p style={styles.title}>В МЕСЯЦ</p>
              <p style={styles.text}>Для выпускников</p>
            </div>
          }
          color="rgb(255,240,230)"
          price="от 900₽"
          bkgInner="rgb(243,230,218)"
          textInnerColor="rgb(199,128,95)"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          text={
            <div>
              <p style={styles.title}>ПОДПИСКА НА МЕСЯЦ</p>
              // <p style={styles.text}>Доступ без ограничений</p> //
            </div>
          }
          color="rgb(255,254,225)"
          price="5 990₽"
          bkgInner="rgb(254,254,194)"
          textInnerColor="rgb(189,189,91)"
        />
      </Grid> */}
      <Grid item md={5} />
    </Grid>
  );
}
