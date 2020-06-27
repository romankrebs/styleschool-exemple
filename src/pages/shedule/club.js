import React from "react";
import { Link } from "react-router-dom";

export default class Club extends React.Component {
  state = {
    hover: false
  };

  toggle = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <div
        style={{
          background: this.state.hover
            ? "rgb(255,255,255)"
            : "rgb(230,230,230)",
          fontFamily: "Roboto",
          fontSize: "1.2em",
          textAlign: "center",
          margin: "0 auto",
          padding: 8,
          maxWidth: 180
        }}
        onMouseOver={this.toggle}
        onMouseOut={this.toggle}
      >
        <Link to="/club" style={{ color: "rgb(80,80,80)" }}>
          Клуб выпускников
        </Link>
      </div>
    );
  }
}
