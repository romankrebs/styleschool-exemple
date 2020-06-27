export const style = {
  h1: {
    fontFamily: "Roboto",
    fontSize: "2.5em",
    fontWeight: 700,
    textAlign: "center",
    padding: "1em 0",
    margin: 0
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.4em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: "1.4em 0",
    margin: 0
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: "1.1em 0",
    margin: 0
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "1.5em"
  },
  fullscreen: {
    maxHeight: "calc(100vh - 35px - 9em)",
    maxWidth: 1000,
    padding: "4em",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  headBox: {
    padding: "0 1em",
    textAlign: "center",
    maxWidth: "100%"
  },
  "@media (max-width: 959px)": {
    h1: {
      fontSize: "1.4em"
    },
    fullscreen: {
      backgroundSize: "100% auto"
    },
    headBox: {
      padding: 12
    }
  },
  "@media (max-width: 499px)": {
    fullscreen: {
      backgroundSize: "auto 100%"
    }
  }
};
