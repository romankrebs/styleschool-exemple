import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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

function ButtonComp(props) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%" }}
          >
            УЧИТЕСЬ СЕЙЧАС! Обучение в рассрочку...
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withTheme(ButtonComp);
