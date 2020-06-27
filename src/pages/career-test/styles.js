export const styles = {
  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "2rem 0 1.6rem"
  },
  h2: {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1.6rem 0 1.4rem"
  },
  box: {
    boxSizing: "border-box",
    padding: "2rem 0"
  },
  page: {
    padding: 0
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "rgb(110,110,110)",
    textAlign: "center",
    margin: 0,
    padding: "3rem",
    paddingTop: "5rem"
  },
  p: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "justify",
    margin: 0,
    padding: "1rem 0",
    lineHeight: "1.5rem"
  },
  image: {
    background: "rgb(220,220,220)",
    height: 320,
    width: 480
  },
  button: {
    border: "1px solid rgb(100,100,100)",
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: ".5rem 1rem",
    width: "max-content",
    margin: "2rem auto",
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "center",
    transition: "color .5s, background .5s",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)",
      transition: "color .5s, background .5s"
    }
  }
};
