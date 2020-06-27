export const styles = {
  tile: {
    boxSizing: "border-box",
    padding: "1.5rem",
    boxShadow: "0px 0px 10px 2px rgba(0,0,0,.15)",
    background: "rgba(255,255,255,1)",
    maxWidth: 460,
    maxHeight: "100%"
  },
  h1: {
    fontFamily: "PT Sans Narrow",
    fontSize: "4rem",
    color: "rgb(122,101,89)",
    textShadow: "4px 4px 0px rgba(0,0,0,.15)",
    textAlign: "center",
    fontWeight: 700,
    margin: 0,
    padding: "4rem 0 3.2rem"
  },
  h2: {
    fontFamily: "PT Sans Narrow",
    fontSize: "1.6rem",
    color: "rgb(122,101,89)",
    textAlign: "center",
    margin: 0,
    padding: "2rem 0 1.4rem",
    fontWeight: 700
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.1rem",
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1rem 0",
    fontWeight: 700
  },
  duration: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    lineHeight: "1.4rem",
    color: "rgb(160,160,160)",
    fontWeight: 500,
    textAlign: "center",
    margin: 0,
    padding: 0,
    paddingBottom: "1rem"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    lineHeight: "1.4rem",
    color: "rgb(100,100,100)",
    fontWeight: 400,
    textAlign: "justify",
    margin: 0,
    padding: ".5rem 0"
  },
  button: {
    fontFamily: "Roboto",
    padding: ".7rem 1rem",
    width: 120,
    margin: "0 auto",
    textAlign: "center",
    fontSize: "1rem",
    color: "rgb(100,100,100)",
    border: "1px solid rgb(100,100,100)",
    background: "rgb(255,255,255)",
    transition: "color .5s, background .5s",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)"
    }
  },
  link: {
    color: "rgb(100,100,100)",
    textDecoration: "none",
    transition: "color .5s",
    "&:hover": {
      color: "rgb(50,50,50)"
    }
  },
  "@media (max-width: 959px)": {
    title: {
      maxWidth: "90%"
    },
    button: {
      width: "max-content"
    }
  }
};
