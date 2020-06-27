const gold = {
  footer: "rgb(187, 144, 41)",
  page: "rgb(122,101,89)"
};

export const stylesDark = {
  topLink: {
    fontFamily: "Ubuntu",
    fontSize: "0.85rem",
    color: "rgb(180,180,180)",
    borderBottom: "none",
    transition: "0.5s color",
    "&:hover": {
      borderBottom: "1px solid rgb(180,180,180)",
      color: "rgb(240,240,240)"
    }
  },
  topBox: {
    // position: "sticky",
    // top: 0,
    maxWidth: 1000,
    margin: "0 auto",
    padding: "0.25rem 10px 0.5rem 10px",
    height: "2rem",
    background: "rgba(0,0,0,1)",
    boxSizing: "border-box"
  },
  topLine: {
    background: "rgb(0,0,0)",
    position: "sticky",
    top: 0,
    height: "2rem",
    width: "100%",
    padding: 0,
    zIndex: 1000
  },
  head: {
    fontFamily: "Alice",
    fontSize: "3rem",
    color: "rgb(255,255,255)",
    textAlign: "left",
    lineHeight: "3rem"
  },
  descript: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 500,
    color: "rgb(255,255,255)",
    textAlign: "left"
  },
  footerTitle: {
    fontFamily: "Ubuntu",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "rgb(40,40,40)",
    textAlign: "left"
  },
  footerLink: {
    fontFamily: "Ubuntu",
    fontSize: "0.95rem",
    color: "rgb(87,123,143)",
    borderBottom: "1px solid rgb(87,143,143)",
    transition: "0.5s color",
    "&:hover": {
      borderBottom: 0,
      color: "rgb(87,143,163)"
    }
  },
  footerText: {
    fontFamily: "Ubuntu",
    fontSize: ".95rem",
    fontWeight: 400,
    color: "rgb(70,70,70)",
    textAlign: "left",
    lineHeight: "1rem",
    padding: 0,
    margin: 0
  },
  footerGold: {
    fontFamily: "Ubuntu",
    fontSize: ".95rem",
    fontWeight: 400,
    lineHeight: "1.2rem",
    color: gold.footer,
    textAlign: "left",
    padding: 0,
    margin: 0
  },
  footer: {
    background: "rgb(255,255,255)",
    padding: "4rem 0"
  },
  nameSchool: {
    textAlign: "left",
    fontFamily: "Alice",
    fontSize: "4rem",
    color: gold.page,
    padding: "20vh 0 10vh 0",
    margin: 0
  },
  descriptSchool: {
    textAlign: "left",
    fontSize: "1rem",
    lineHeight: "1.6rem",
    color: "rgb(100,100,100)", // "rgb(200,200,200)",
    padding: 0,
    paddingTop: "3rem",
    paddingBottom: "1rem",
    margin: 0
  },
  login: {
    position: "relative",
    top: -22,
    right: -970,
    padding: "0.2rem 0",
    maxWidth: "max-content"
  },
  scroll: {
    fontSize: "0.85rem",
    color: "rgb(100,100,100)", // "rgb(180,180,180)",
    textAlign: "left",
    padding: 0,
    paddingBottom: "1.6rem"
  },
  icons: {
    // background: "rgb(0,0,0)",
    textAlign: "right",
    padding: 0,
    paddingRight: "1rem",
    paddingTop: "1.5rem",
    paddingBottom: "1rem"
  },
  geo: {
    display: "inline-block",
    width: 120,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  adress: {
    display: "inline-block",
    width: 200,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  time: {
    display: "inline-block",
    width: 230,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  contacts: {
    display: "inline-block",
    width: 130,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  services: {
    display: "inline-block",
    width: 240,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  space: {
    height: "6rem"
  },
  spaceTop: {
    height: "2rem"
  },
  "@media (max-height: 600px)": {
    space: {
      height: "3rem"
    },
    spaceTop: {
      height: "2rem"
    }
  },
  "@media (heigth: 1024px) and (width: 768px)": {
    space: {
      height: "1rem"
    },
    spaceTop: {
      height: "2rem"
    }
  },
  "@media (heigth: 1280px) and (width: 768px)": {
    space: {
      height: "1rem"
    },
    spaceTop: {
      height: "2rem"
    }
  },
  "@media (heigth: 1280px) and (width: 800px)": {
    space: {
      height: "1rem"
    },
    spaceTop: {
      height: "2rem"
    }
  },
  "@media (min-height: 800px) and (min-width: 1200px)": {
    space: {
      height: "8rem"
    },
    spaceTop: {
      height: "8rem"
    }
  },
  "@media (max-width: 959px)": {
    geo: {
      maxWidth: "100%",
      padding: "1rem"
    },
    adress: {
      maxWidth: "100%",
      padding: "1rem"
    },
    time: {
      maxWidth: "100%",
      padding: "1rem"
    },
    contacts: {
      maxWidth: "100%",
      padding: "1rem"
    },
    services: {
      maxWidth: "100%",
      padding: "1rem"
    },
    nameSchool: {
      padding: "2rem",
      fontSize: "3.5rem"
    },
    descriptSchool: {
      paddingLeft: "2rem"
    },
    login: {
      position: "absolute",
      top: 4,
      right: 10
    },
    scroll: {
      paddingLeft: "1rem"
    },
    icons: {
      paddingRight: "1rem"
    },
    footer: {
      padding: "4rem 1rem"
    }
  }
};

export const styles = {
  head: {
    fontFamily: "PT Sans Narrow",
    fontSize: "2.5rem",
    fontWeight: 500,
    color: "rgb(50,50,50)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "2rem",
    paddingBottom: "3rem"
  },
  title: {
    fontWeight: 700,
    fontSize: "1.2rem",
    fontFamily: "PT Sans Narrow",
    paddingBottom: "0.2rem",
    color: gold.page
  },
  text: {
    fontFamily: "Alegreya Sans",
    fontSize: "1rem",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "1.2rem"
  },
  link: {
    fontFamily: "Alegreya Sans",
    fontSize: "1rem",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "1.2rem"
  }
};

export const stylesLite = {
  footerTitle: {
    fontFamily: "Ubuntu",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "rgb(187,144,41)", // "rgb(240,240,240)",
    textAlign: "left"
  },
  footerLink: {
    fontFamily: "Ubuntu",
    fontSize: "0.95rem",
    color: "rgb(160,160,160)",
    borderBottom: "1px solid rgb(160,160,160)", // "1px solid rgb(87,143,143)",
    transition: "0.5s color",
    "&:hover": {
      borderBottom: 0,
      color: "rgb(87,143,163)"
    }
  },
  footerText: {
    fontFamily: "Ubuntu",
    fontSize: ".95rem",
    fontWeight: 400,
    color: "rgb(220,220,220)",
    textAlign: "left",
    lineHeight: "1rem",
    padding: 0,
    margin: 0
  },
  footerGold: {
    fontFamily: "Ubuntu",
    fontSize: ".95rem",
    fontWeight: 400,
    lineHeight: "1.2rem",
    color: "rgb(187, 144, 41)",
    textAlign: "left",
    padding: 0,
    margin: 0
  },
  footer: {
    background: "rgb(0,0,0)",
    padding: "4rem 0"
  },
  geo: {
    display: "inline-block",
    width: 120,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  adress: {
    display: "inline-block",
    width: 200,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  time: {
    display: "inline-block",
    width: 230,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  contacts: {
    display: "inline-block",
    width: 130,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  services: {
    display: "inline-block",
    width: 240,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top"
  },
  "@media (max-width: 959px)": {
    footer: {
      padding: "4rem 1rem"
    }
  }
};
