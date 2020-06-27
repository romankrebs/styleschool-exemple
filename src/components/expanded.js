import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Expanded extends React.Component {
  state = {
    panel: this.props.expand ? this.props.expand : false
  };

  togglePanel = () => {
    this.setState({ panel: !this.state.panel });
  };

  render() {
    return (
      <ExpansionPanel
        expanded={this.state.panel}
        onChange={this.props.details.text !== "" ? this.togglePanel : null}
      >
        <ExpansionPanelSummary
          expandIcon={this.props.details.text !== "" ? <ExpandMoreIcon /> : ""}
          style={this.props.summary.style}
        >
          {this.props.summary.text}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={this.props.details.style}>
          {this.props.details.text}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
