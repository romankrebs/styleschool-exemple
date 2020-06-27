import React from "react";

export default class TextBackComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    const element = this.ref.current;
    var options = {
      widgetId: "dda658b6-d776-5de0-69e2-01629bcd78ce",
      element,
      data: { userId: localStorage.getItem("userId") }
    };
    // eslint-disable-next-line no-undef
    new TextBack.NotificationWidget(options);
  }

  ref = React.createRef();

  render() {
    return <div ref={this.ref} />;
  }
}
