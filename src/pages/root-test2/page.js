import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { stylesDark } from "./styles";
import { withStyles } from "@material-ui/styles";
// import Blocks from "./blocks";
import ScrollableAnchor from "react-scrollable-anchor";
import { content } from "./contents";
import { Vk, Facebook, Instagram, Youtube, Path, Login2 } from "./icons";

const wStyles = theme => stylesDark;
const font = "Alegreya Sans";

const Blocks = withStyles({
  padding: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    padding: {
      padding: "1rem"
    }
  }
})(props => {
  const { classes } = props;

  return (
    <div style={props.styleBox}>
      {props.mobileReverse ? (
        <div>
          <Hidden mdUp>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6} className={classes.padding}>
                {props.right}
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                {props.left}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid container alignItems="stretch">
              <Grid item xs={12} md={6} className={classes.padding}>
                <div
                  style={{
                    position: "sticky",
                    top: 0
                  }}
                >
                  {props.left}
                </div>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <div
                  style={{
                    position: "sticky",
                    top: 0
                  }}
                >
                  {props.right}
                </div>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      ) : (
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={6} className={classes.padding}>
            <div
              style={{
                position: "sticky",
                top: 0
              }}
            >
              {props.left}
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding}>
            <div
              style={{
                position: "sticky",
                top: 0
              }}
            >
              {props.right}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
});

function Top(props) {
  const { classes } = props;

  const MobileLeft = props => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background: "rgb(255,255,255)",
            padding: "2rem",
            paddingBottom: 0
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              paddingTop: "4rem",
              paddingBottom: 0,
              background: "rgb(25,25,25)"
            }}
          >
            <img
              src="/img/root-test2/emblema-3d-5.png"
              alt="Высшая школа стилистики, дитзайна и технологий"
              style={{
                maxWidth: "100%"
              }}
            />
            <div style={{ height: "3rem" }} />
            <div className={classes.icons}>
              <a href="https://www.instagram.com/styleschool_msk/">
                <Instagram color="rgb(200,200,200)" size="16px" />
              </a>
              &ensp;
              <a href="https://vk.com/stylemsk">
                <Vk color="rgb(200,200,200)" size="24px" width="1.2" />
              </a>
              &ensp;
              <a href="https://www.facebook.com/styleschool.ru/">
                <Facebook color="rgb(200,200,200)" size="16px" />
              </a>
              &ensp;
              <a href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ">
                <Youtube color="rgb(200,200,200)" size="20px" />
              </a>
              &ensp;
              <img
                src="/img/root-test2/vshsdt.png"
                alt="#ВШСДТ"
                style={{
                  height: 14 // 18
                }}
              />
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  };

  const MobileRight = props => {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} style={{ background: "rgb(255,255,255)" }}>
          <div
            className={classes.nameSchool}
            style={{
              fontFamily: "PT Sans Narrow",
              textAlign: "center"
            }}
          >
            Высшая школа стилистики,
            <br />
            дизайна и технологий
          </div>
          <div
            className={classes.descriptSchool}
            style={{
              fontFamily: font
            }}
          >
            Профессиональное образование и<br />
            повышение квалификации в индустрии моды и дизайна
          </div>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Grid container justify="space-between" alignItems="stretch">
          <Hidden smDown>
            <Grid
              item
              md={12}
              style={{ background: "rgb(255,255,255)" }}
              className={classes.spaceTop}
            />
            <Grid
              item
              md={12}
              style={{
                backgroundImage:
                  "url('/img/root-test2/emblema-3d-5.png'),linear-gradient(to right, rgb(255,255,255) 0, rgb(255,255,255) 460px, rgb(25,25,25) 460px, rgb(25,25,25) 1000px)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 116px top 80px, left center",
                backgroundSize: "auto 393px, auto"
              }}
            >
              <div
                className={classes.nameSchool}
                style={{
                  fontFamily: "PT Sans Narrow", // "Alice",
                  fontSize: "3.7rem",
                  textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
                  position: "sticky",
                  top: 0
                }}
              >
                Высшая школа стилистики,
                <br />
                дизайна и технологий
              </div>
              <div
                className={classes.descriptSchool}
                style={{
                  fontFamily: font
                }}
              >
                Профессиональное образование и<br />
                повышение квалификации в индустрии моды и дизайна
              </div>
            </Grid>
            <Grid
              item
              md={6}
              style={{
                background:
                  "linear-gradient(to right, rgb(255,255,255) 0, rgb(255,255,255) 460px, rgb(25,25,25) 460px, rgb(25,25,25) 500px)"
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  paddingTop: "2.3rem"
                }}
              >
                <a href="#next">
                  <Path color="rgb(100,100,100)" size={32} />
                </a>
              </div>
            </Grid>
            <Grid
              item
              md={6}
              style={{
                background: "rgb(25,25,25)"
              }}
            >
              <div className={classes.icons}>
                <a href="https://www.instagram.com/styleschool_msk/">
                  <Instagram color="rgb(200,200,200)" size="16px" />
                </a>
                &ensp;
                <a href="https://vk.com/stylemsk">
                  <Vk color="rgb(200,200,200)" size="24px" width="1.2" />
                </a>
                &ensp;
                <a href="https://www.facebook.com/styleschool.ru/">
                  <Facebook color="rgb(200,200,200)" size="16px" />
                </a>
                &ensp;
                <a href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ">
                  <Youtube color="rgb(200,200,200)" size="20px" />
                </a>
                &ensp;
                <img
                  src="/img/root-test2/vshsdt.png"
                  alt="#ВШСДТ"
                  style={{
                    height: 14
                  }}
                />
              </div>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <MobileLeft />
            <MobileRight />
          </Hidden>
          <Grid item xs={12} md={12} className={classes.space} />
          <ScrollableAnchor id="next">
            <div style={{ height: 1 }} />
          </ScrollableAnchor>
          <Grid item xs={12} md={12} className={classes.space} />
          <Grid item xs={12} md={12}>
            <Blocks
              left={content.screen1.left}
              right={content.screen1.right}
              mobileReverse
            />
          </Grid>
          <Grid item xs={12} md={12} className={classes.space} />
          <Grid item xs={12} md={12} className={classes.space} />
          <Grid item xs={12} md={12}>
            <Blocks left={content.screen2.left} right={content.screen2.right} />
          </Grid>
          <Grid item xs={12} md={12} className={classes.space} />
          <Grid item xs={12} md={12} className={classes.space} />
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(wStyles)(Top);
