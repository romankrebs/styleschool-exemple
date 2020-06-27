import React from "react";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";

import Cards1 from "../modern-fashion-style/cards/cards-list";
import Cards2 from "./cards/cards-list";

function Page(props) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <Top />
      <Cards1 />
      <Cards2 />
      <div style={{ height: "1em" }} />
      <Footer />
    </div>
  );
}

export default Page;
