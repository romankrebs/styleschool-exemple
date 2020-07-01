import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default class Component extends React.Component {
  state = {
    hover: false
  };

  toggleState = () => {
    return this.setState({ hover: !this.state.hover });
  };
  render() {
    let styleBlock = {
      background: this.props.bkgImage,
      backgroundSize: "cover",
      backgroundPosition: "", // "left 0px top 0px",
      backgroundRepeat: "no-repeat",
      transition: "background-position 0.5s",
      cursor: "default",
      filter: "brightness(100%)",
      height: 260,
      ...this.props.styleImg
    };
    let styleContent = {
      color: "rgb(255,255,255)",
      opacity: 0,
      fontFamily: "Roboto",
      transition: "opacity 0.5s",
      textAlign: "center",
      margin: 0
    };
    let styleSlide = {
      color: "rgb(0,0,0)",
      width: "100%",
      marginLeft: "calc(-100% - 60px)",
      paddingTop: 0,
      fontSize: 12,
      fontFamily: "Roboto",
      transition: "margin-left 0.5s"
    };
    let styleInBlock = {
      backgroundColor: "rgba(0,0,0,0)",
      transition: "background-color 0.5s",
      padding: 0,
      margin: 0
    };
    if (this.state.hover) {
      //styleBlock.backgroundSize = "cover";
      styleBlock.backgroundPosition = this.props.bkgPosHover
        ? this.props.bkgPosHover
        : "left 0px top -5px";
      styleBlock.cursor = "pointer";
      styleInBlock.backgroundColor = "rgba(0,0,0,0.4)";
      styleContent.opacity = 1.0;
      styleSlide.marginLeft = 0;
    } else {
      //styleBlock.backgroundSize = "cover"; //"auto 100%";
      styleBlock.backgroundPosition = this.props.bkgPos
        ? this.props.bkgPos
        : "left 0px top 0";
      styleBlock.cursor = "default";
      styleInBlock.backgroundColor = "rgba(0,0,0,0)";
      styleContent.opacity = 0;
      styleSlide.marginLeft = "calc(-100% - 60px)";
    }
    return (
      <Link to={this.props.link}>
        <Grid
          container
          style={{ overflow: "hidden", ...styleBlock }}
          direction="row"
          justify="space-between"
          onMouseOver={this.toggleState}
          onMouseOut={this.toggleState}
        >
          <Grid item xs={12} md={12} style={{ height: "80%", ...styleInBlock }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                style={{ padding: 10, ...styleContent }}
              >
                {this.props.content}
              </Grid>
              <Grid item xs={12} md={12}>
                <div style={styleSlide}>{this.props.slide}</div>
              </Grid>
            </Grid>
            {this.props.message ? (
              <Grid
                item
                xs={12}
                md={12}
                style={{ position: "relative", bottom: -48 }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    color: "rgb(120,0,0)",
                    fontWeight: 700,
                    fontFamily: "Roboto",
                    textShadow: "1px 1px 3px 5px rgba(0,0,0,0.8)",
                    textAlign: "center",
                    padding: 8,
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                >
                  {this.props.message}
                </div>
              </Grid>
            ) : null}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              background: this.props.bkgHead,
              color: "rgb(0,0,0)",
              textAlign: "center",
              padding: 0,
              fontSize: 18,
              margin: 0,
              height: "20%"
            }}
          >
            <div
              style={{
                padding: 12,
                paddingTop: 4,
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 15,
                fontWeight: 700,
                color: this.props.colorText
                  ? this.props.colorText
                  : "rgb(20,20,20)"
              }}
            >
              {this.props.head}
            </div>
          </Grid>
        </Grid>
      </Link>
    );
  }
}

export const BannerBadge = ({ style, ...props }) => {
  return (
    <div>
      <div
        {...props}
        style={{
          padding: 6,
          marginBottom: 6,
          background: "rgba(255,255,255,0.7)",
          whiteSpace: "nowrap",
          display: "inline-block",
          color: "rgb(0,0,0)",
          style
        }}
      />
    </div>
  );
};
