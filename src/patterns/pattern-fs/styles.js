const gold = "rgb(122,101,89)";

export const styles = {
  h1: {
    fontFamily: "Roboto",
    fontSize: "4em",
    fontWeight: 500,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: "1rem 0 2rem 0"
  },
  h1d: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    paddingTop: "1rem"
  },
  h2: {
    fontSize: "1.6em",
    fontWeight: 700,
    color: gold,
    textAlign: "center",
    margin: 0,
    padding: "3.2rem 0 1.4rem"
  },
  h3format: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1rem 0 1rem"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1rem 0"
  },
  h3Big: {
    fontFamily: "Roboto",
    fontSize: "1.3em",
    fontWeight: 700,
    color: gold,
    textAlign: "center",
    margin: 0,
    padding: "1rem 0"
  },
  gray: {
    backgroundColor: "rgb(220,220,220)"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    lineHeight: "1.5em"
  },
  descriptionTop: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 500,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  quote: {
    textAlign: "left",
    fontStyle: "italic",
    fontFamily: "Lora"
  },
  author: {
    textAlign: "right"
  },
  pCenter: {
    textAlign: "center"
  },
  pJust: {
    textAlign: "justify"
  },
  spaceBot: {
    paddingBottom: "1em"
  },
  spaceBot14: {
    paddingBottom: "1.4em"
  },
  spaceBot16: {
    paddingBottom: "1.6em"
  },
  space: {
    height: "1.6em"
  },
  imgBox: {
    textAlign: "center"
  },
  stratchBox: {
    position: "sticky",
    top: 1
  },
  image: {
    maxWidth: "100%"
  },
  box: {
    padding: 0,
    maxWidth: "100vw",
    margin: 0,
    boxSizing: "border-box"
    // overflow: "hidden"
  },
  paperOne: {
    padding: "1rem"
  },
  paper: {
    height: "7rem",
    padding: "1rem"
  },
  paper5: {
    height: "5rem",
    padding: "1rem"
  },
  paper4: {
    height: "4rem",
    padding: "1rem"
  },
  iconPaper: {
    textAlign: "center",
    paddingTop: "2em"
  },
  button: {
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: "0.5rem",
    fontSize: "1rem",
    transition: "1s color, 1s background",
    cursor: "pointer",
    borderRadius: "50%",
    border: "1px solid rgb(160,160,160)",
    width: "max-content",
    boxSizing: "border-box",
    margin: "0 auto",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(123,143,87)"
    }
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 1rem"
    },
    descriptionTop: {
      padding: "1em 10px"
    },
    paper: {
      height: "auto"
    },
    paper4: {
      height: "auto"
    },
    paper5: {
      height: "auto"
    }
  }
};
