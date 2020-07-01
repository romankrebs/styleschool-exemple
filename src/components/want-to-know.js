import React from "react";
import { Grid } from "@material-ui/core";
import Socnets from "./socnets-icons-buttons";
import { withStyles } from "@material-ui/styles";
import Phones from "./phones-icons";
import { eventLinks } from "../analitics";

const styles = theme => ({
  phones: {
    textAlign: "left"
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.8em",
    textAlign: "center",
    fontWeight: 500,
    margin: 8,
    padding: "24px 0"
  },
  button: {
    padding: ".5rem 1rem",
    width: "max-content",
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    transition: "color .5s, background .5s",
    fontSize: "1rem",
    fontFamily: "Roboto",
    margin: "0 auto",
    cursor: "pointer",
    border: "1px solid rgb(100,100,100)",
    "&:hover": {
      background: "rgb(0,0,0)",
      color: "rgb(255,255,255)"
    }
  },
  "@media (max-width: 959px)": {
    phones: {
      textAlign: "center"
    }
  }
});

function SocnetsComponent(props) {
  const { classes } = props;
  const [phone, setPhone] = React.useState(false);

  return (
    <Grid container justify="center" alignItems="center" style={{}}>
      <Grid item xs={12} md={props.fullWidth || 6} style={{ maxWidth: 500 }}>
        {props.noSpace ? null : <div style={{ height: 40 }} />}
        {props.noHead ? null : (
          <h2
            className={classes.h2}
            style={{
              fontFamily: props.fontHead || "inherit", // "Lora",
              color: props.colorHead || "rgb(100,100,100)",
              ...props.styleHead
            }}
          >
            Хотите узнать подробнее?
          </h2>
        )}
        {/* <Socnets link={props.link} /> */}
        <div style={{ margin: "0 auto", padding: 20, textAlign: "center" }}>
          <h3
            style={{
              fontSize: "1em",
              fontWeight: 500,
              textAlign: "center",
              color: "rgb(100,100,100)"
            }}
          >
            Специалисты учебного отдела
          </h3>
          <div
            style={{
              textAlign: "center",
              fontSize: "1em",
              color: "rgb(21,101,192)",
              fontWeight: 400
            }}
          >
            <p>
              <span style={{ color: "rgb(100,100,100)" }}>Ольга</span>
              &ensp;
              <span className="call_phone_3">
                {phone ? (
                  <span>
                    <a
                      href="tel:+79160580029"
                      style={{ color: "rgb(21,101,192)" }}
                      onClick={() =>
                        eventLinks(`click_phone_olga_${props.target}_complete`)
                      }
                    >
                      +7 (916) 058-00-29
                    </a>
                    &ensp;
                    <Phones size={20} color="rgb(0,0,100)" link="79160580029" />
                  </span>
                ) : (
                  <span onClick={() => setPhone(!phone)}>+7 (916)…</span>
                )}
              </span>
            </p>
            <p>
              <span style={{ color: "rgb(100,100,100)" }}>Евгения</span>
              &ensp;
              <span className="call_phone_3">
                {phone ? (
                  <span>
                    <a
                      href="tel:+79160580092"
                      style={{ color: "rgb(21,101,192)" }}
                      onClick={() =>
                        eventLinks(
                          `click_phone_evgeniya1_${props.target}_complete`
                        )
                      }
                    >
                      +7 (916) 058-00-92&ensp;
                    </a>
                    <Phones size={20} color="rgb(0,0,100)" link="79160580092" />
                  </span>
                ) : (
                  <span onClick={() => setPhone(!phone)}>+7 (916)…</span>
                )}
              </span>
            </p>
            <p>
              <span className="call_phone_3">
                {phone ? (
                  <a
                    href="tel:+74952218935"
                    style={{ color: "rgb(21,101,192)" }}
                    onClick={() =>
                      eventLinks(
                        `click_phone_evgeniya2_${props.target}_complete`
                      )
                    }
                  >
                    +7 (495) 221-89-35
                  </a>
                ) : (
                  <span onClick={() => setPhone(!phone)}>+7 (495)…</span>
                )}
              </span>
            </p>
            <p>
              <span className="call_phone_hide">
                {phone ? (
                  <a
                    href="tel:+78005507893"
                    style={{ color: "rgb(21,101,192)" }}
                  >
                    8 (800) 550-78-93
                  </a>
                ) : (
                  <span onClick={() => setPhone(!phone)}>+7 (800)…</span>
                )}
              </span>
            </p>
            {phone ? null : (
              <div className={classes.button} onClick={() => setPhone(!phone)}>
                показать телефоны
              </div>
            )}
          </div>
        </div>
        {props.noSpace ? null : <div style={{ height: 40 }} />}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SocnetsComponent);
