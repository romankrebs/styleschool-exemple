import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withTheme } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(255,180,50)",
      main: "rgb(255,125,0)",
      dark: "rgb(230,105,0)",
      contrastText: "rgb(255,255,255)"
    },
    secondary: {
      light: "rgb(143,163,107)",
      main: "rgb(123,143,87)",
      dark: "rgb(100,123,67)",
      contrastText: "rgb(255,255,255)"
    }
  }
});

function Buttons(props) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Button variant="contained" color="primary" style={{ width: "100%" }}>
            от 10 000 ₽ в месяц
          </Button>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%" }}
          >
            <Icon
              style={{
                fontFamily: "Material Icons",
                color: "rgb(255,255,255)"
              }}
            >
              call
            </Icon>
            &nbsp; Обратный звонок
          </Button>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Button variant="contained" color="primary" style={{ width: "100%" }}>
            <SvgIcon>
              <path
                fill="rgb(255,255,255)"
                d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z"
              />
            </SvgIcon>
            &nbsp; Записаться
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withTheme(Buttons);
