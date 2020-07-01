import React from "react";
import { withRouter } from "react-router";
// import { isBrowser } from "react-device-detect";

import ReactPixel from "react-facebook-pixel";
import ya, { YMInitializer } from "react-yandex-metrika";
import ym from "react-yandex-metrika";
import ReactGA from "react-ga";

const FP = 556647711153866;
const GA = "UA-64254068-3";
const YM = 53888251;

var Chance = require("chance");
var chance = new Chance();

const advancedMatching = {};
if (typeof localStorage === "object") {
  if (!localStorage.userId)
    localStorage.setItem("userId", `${new Date().valueOf()}${chance.fbid()}`);
  advancedMatching.userId = localStorage.getItem("userId");
  ReactGA.initialize(GA, {
    // debug: true,
    gaOptions: {
      userId: localStorage.getItem("userId")
    }
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export class Analitics extends React.Component {
  trackPage = page => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };
  componentDidMount() {
    const page = this.props.location.pathname;
    this.trackPage(page);

    ReactPixel.init(FP, advancedMatching, {
      autoConfig: true, // set pixel's autoConfig
      debug: false // enable logs
    });
    ReactPixel.pageView();
  }

  componentDidUpdate(prevProps) {
    const currentPage = prevProps.location.pathname;
    const nextPage = this.props.location.pathname;

    if (currentPage !== nextPage) {
      this.trackPage(nextPage);
      ReactPixel.pageView();
    }
  }

  render() {
    return (
      GA &&
      YM &&
      typeof localStorage === "object" && (
        <YMInitializer
          accounts={[YM]}
          options={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            trackHash: true,
            userParams: {
              userId: localStorage.getItem("userId")
            }
          }}
          version="2"
        />
      )
    );
  }
}

export default withRouter(Analitics);

export const event = action => {
  try {
    ReactGA.event({ category: "actions", action });
    ya("reachGoal", action);
    ReactPixel.trackCustom(action);
  } catch (error) {
    console.error(error);
  }
};

export const eventLinks = eventName => {
  ym("reachGoal", eventName);
  ReactGA.event({
    category: eventName,
    action: "click",
    label: "main"
  });
  return true;
};
