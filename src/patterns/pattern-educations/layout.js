import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import List from "../../components/list";
import { Link } from "react-router-dom";
import Tile from "./tile";
import { styles } from "./style";

const wStyles = theme => styles;

function Layout(props) {
  const { classes } = props;

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <h1 className={classes.h1} style={{ fontFamily: styles.h1.fontFamily }}>
        {props.content.head}
      </h1>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        {props.content.tiles.map((el, key) => (
          <Grid item xs={12} md={6}>
            <Tile
              key={key}
              head={el.head}
              typeEducation={el.typeEducation}
              duration={el.duration}
              specialisation={el.specialisation}
              price={el.price}
              process={el.process}
              diplom={el.diplom}
              link={{
                type: el.link.type,
                text: el.link.text,
                link: el.link.link
              }}
              link2={
                el.link2
                  ? {
                      type: el.link2.type,
                      text: el.link2.text,
                      link: el.link2.link
                    }
                  : null
              }
              space={el.space ? el.space : false}
            />
          </Grid>
        ))}
        {props.content.descript ? (
          <Grid item xs={12} md={12}>
            <p className={classes.p}>{props.content.descript}</p>
          </Grid>
        ) : null}
        {props.content.subMenu ? (
          <Grid item xs={12} md={12}>
            <h2
              className={classes.h2}
              style={{ textAlign: "left", paddingLeft: "2.3rem" }}
            >
              Перейти в раздел
            </h2>
            <List
              style={{
                fontSize: "1rem",
                color: "rgb(100,100,100)",
                padding: 0,
                paddingBottom: ".5rem",
                lineHeight: "2rem"
              }}
              num="none"
              arr={[
                <Link to="/pr-education">
                  <span className={classes.link}>
                    Репутационные технологии, PR
                  </span>
                </Link>,
                <Link to="/fashion-education">
                  <span className={classes.link}>
                    История моды, креативные технологии
                  </span>
                </Link>,
                <Link to="/interior-education">
                  <span className={classes.link}>
                    Дизайн интерьера, креативные технологии
                  </span>
                </Link>,
                <Link to="/fashion-retail">
                  <span className={classes.link}>
                    Fashion retail, технологии продаж
                  </span>
                </Link>
              ]}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Layout);
