import React from "react";

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Socnet from "./socnet";

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  headerTitle: {
    fontSize: 24,
    fontFamily: "Roboto Slab",
    "@media(max-width: 1025px)": {
      fontSize: 18
    },
    "@media(max-width: 325px)": {
      fontSize: 14
    }
  },

  avatar: {
    width: 35,
    height: 40,
    "@media(max-width: 1025px)": {
      width: 30,
      height: 35
    },
    "@media(max-width: 325px)": {
      width: 20,
      height: 25
    }
  },

  leftMenuContent: {
    width: "100vw",
    maxWidth: 300
  },

  burgerButton: {}
});

function LeftMenu(props) {
  return (
    <div>
      <SwipeableDrawer
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
      >
        <div className={props.classes.leftMenuContent} />
        <Grid
          item
          spacing={1}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          style={{ padding: "11px 16px" }}
        >
          <Grid item md={1}>
            <Link to="/">
              <Avatar
                alt="Логотип Высшей Школы Стилистики"
                src="/img/logo.png"
                style={{ width: 25, height: 30 }}
              />
            </Link>
          </Grid>
          <Grid item md={11}>
            <Link to="/" style={{ color: "rgb(80,80,80)" }}>
              <h1 style={{ fontSize: 14, marginLeft: 12 }}>
                Высшая школа стилистики,
                <br />
                дизайна и технологий
              </h1>
            </Link>
          </Grid>
        </Grid>
        <List component="nav">
          <ListItem button value="shedule" component={Link} to="/shedule">
            <ListItemText
              primary="Расписание курсов"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="order" component={Link} to="/order">
            <ListItemText
              primary="Запись на обучение"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="about" component={Link} to="/about">
            <ListItemText
              primary="О школе"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="contacts" component={Link} to="/contacts">
            <ListItemText
              primary="Контакты"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>

        <List component="nav">
          <ListItem
            button
            value="styleschool"
            component={Link}
            to="/styleschool"
          >
            <ListItemText
              primary="Школа стиля"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="fashionschool"
            component={Link}
            to="/fashionschool"
          >
            <ListItemText
              primary="Школа моды"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="schoolofdesign"
            component={Link}
            to="/schoolofdesign"
          >
            <ListItemText
              primary="Школа дизайна"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="artschool" component={Link} to="/artschool">
            <ListItemText
              primary="Школа искусств"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="schoolofmanagement"
            component={Link}
            to="/schoolofmanagement"
          >
            <ListItemText
              primary="Школа управления"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>

        <List component="nav">
          <ListItem button value="training" component={Link} to="/training">
            <ListItemText
              primary="Профподготовка"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="increase-qualifications"
            component={Link}
            to="/increase-qualifications"
          >
            <ListItemText
              primary="Повышение квалификации"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="special-courses"
            component={Link}
            to="/special-courses"
          >
            <ListItemText
              primary="Краткосрочные курсы"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="master-class"
            component={Link}
            to="/master-class"
          >
            <ListItemText
              primary="Лекции и мастер-классы"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="corporate" component={Link} to="/corporate">
            <ListItemText
              primary="Корпоративные проекты"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="network-educational-programs"
            component={Link}
            to="network-educational-programs"
          >
            <ListItemText
              primary="Сетевые образовательные программы"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>
        {/* <Divider variant="middle" /> */}
        {/* <Hidden implementation="css" mdUp>
          <List component="nav">
            <ListItem button value="shedule" component={Link} to="/shedule">
              <ListItemText
                primary="Расписание"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem button value="training" component={Link} to="/training">
              <ListItemText
                primary="Профподготовка"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem
              button
              value="special-courses"
              component={Link}
              to="/special-courses"
            >
              <ListItemText
                primary="Курсы"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem
              button
              value="modern-fashion-style"
              component={Link}
              to="/modern-fashion-style"
            >
              <ListItemText
                primary="Мастер-классы"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            {/* <ListItem
              button
              value="consulting"
              component={Link}
              to="/consulting"
            >
              <ListItemText primary="Консалтинг" />
            </ListItem> 
          </List>
        </Hidden> */}
      </SwipeableDrawer>
    </div>
  );
}

class TopMenu extends React.Component {
  state = {
    switch: false
  };

  toggleMenu = () => {
    this.setState({ switch: !this.state.switch });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(255,255,255,0.8)",
            zIndex: 100,
            maxWidth: 1000,
            margin: "0 auto"
          }}
        >
          <LeftMenu
            open={this.state.switch}
            onClose={this.toggleMenu}
            onOpen={this.toggleMenu}
            classes={classes}
          />
          <Grid
            container
            className={classes.root}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div style={{ position: "absolute", left: 0, top: 0 }}>
              <Button
                onClick={this.toggleMenu}
                className={classes.burgerButton}
              >
                <Menu />
              </Button>
            </div>
            <Grid item>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <h1
                    className={classes.headerTitle}
                    style={{ textAlign: "center", fontSize: "0.85em" }}
                  >
                    <Link to="/" style={{ color: "rgb(80,80,80)" }}>
                      #ВШСДТ |&ensp;
                    </Link>
                    {this.props.faqultet ? (
                      this.props.faqultet === "socnet" ? (
                        <span>
                          <Socnet />
                        </span>
                      ) : (
                        this.props.faqultet
                      )
                    ) : null}
                  </h1>
                </Grid>
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 10,
                    textAlign: "center",
                    lineHeight: "0.8em"
                  }}
                >
                  <a href="https://billing.styleschool.ru">
                    <Hidden implementation="css" mdUp>
                      <img
                        src="/img/green/account.svg"
                        alt="Войти в личный кабинет"
                        style={{ height: 24 }}
                      />
                    </Hidden>
                    <Hidden implementation="css" smDown>
                      <img
                        src="/img/green/account.svg"
                        alt="Войти в личный кабинет"
                        style={{ height: 20 }}
                      />
                      {/* <br />
                      <span
                        style={{
                          fontSzie: "0.5em",
                          color: "rgb(123,143,87)"
                        }}
                      >
                        войти
                      </span> */}
                    </Hidden>
                  </a>
                </div>
              </Grid>
            </Grid>
            {/* <Grid
              item
              lg={3}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Hidden implementation="css" lgDown>
                  <Tabs style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Tab
                      value=""
                      label="8 800 550-78-93"
                      style={{
                        minWidth: 0,
                        textTransform: "none",
                        fontSize: "1.2em"
                      }}
                    />
                  </Tabs>
                </Hidden>
              </Grid>
            </Grid> */}
          </Grid>
        </div>
        {/* <div style={{ background: "rgba(255,255,255,0.8)" }}>
          <Hidden implementation="css" smDown lgUp>
            {SecondMenu("center")}
          </Hidden>
          <Hidden implementation="css" mdDown>
            {SecondMenu("flex-end")}
          </Hidden>
        </div> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TopMenu);
