import React from "react";
import _ from "lodash";

const axios = require("axios");

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  render() {
    return null;
    let callTouchOptions;
    if (_.get(process, "browser"))
      callTouchOptions = {
        method: "get",
        url:
          "https://api-node13.calltouch.ru/calls-service/RestAPI/requests/35712/register/",
        params: {
          subject: window.location.href.split("?")[0],
          sessionId: window.call_value,
          comment: "to_billing"
        }
      };
    if (!this.state.redirect) {
      return (
        <a
          href={this.props.link}
          onClick={e => {
            e.preventDefault();
            axios(callTouchOptions);
            this.setState({ redirect: true });
          }}
        >
          <div
            style={{
              background: "rgb(123,143,87)",
              color: "rgb(255,255,255)",
              fontSize: "1em",
              textAlign: "center",
              padding: 8,
              borderRadius: 4,
              maxWidth: 200,
              margin: "0 auto"
            }}
          >
            Забронировать
          </div>
        </a>
      );
    } else {
      window.location.href = this.props.link;
      return null;
    }
  }
}

export default Button;
