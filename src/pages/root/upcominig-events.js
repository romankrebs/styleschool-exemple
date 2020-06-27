import React from "react";
import { Grid } from "@material-ui/core";
import OpenLectures from "../master-class/open-lectures";
import Cot from "../../components/cot";
import { HorizontalForm } from "../../components/forms";
import { Link } from "react-router-dom";

function Events(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <OpenLectures />
          {/* <MasterClasses /> */}
          <Cot textButton="Записаться" text={<HorizontalForm />} />
          <Link to="/master-class">
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                margin: 0,
                padding: "1em 0"
              }}
            >
              Все лекции и мастер-классы
            </p>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Events;
