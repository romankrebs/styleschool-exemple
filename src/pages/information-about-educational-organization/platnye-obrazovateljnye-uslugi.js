import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const Platnye = props => {
  return (
    <div>
      <Pattern
        title="Платные образовательные услуги"
        content={
          <div>
            {/* <h3 style={style.h3}>Платные образовательные услуги</h3> */}
            <p style={style.text}>
              Образцы договоров об оказании платных услуг:
            </p>
            <List
              arr={[
                <a href="/download/obrazets-dogovora-ob-okazanii-platnyh-obrazovateljnyh-uslug-fizlitsu.pdf">
                  Образец договора об оказании платных образовательных услуг
                  физическому лицу
                </a>,
                <a href="/download/obrazets-dogovora-ob-okazanii-platnyh-obrazovateljnyh-uslug-urlitsu.pdf">
                  Образец договора об оказании платных образовательных услуг
                  юридическому лицу
                </a>
              ]}
              style={style.text}
            />
          </div>
        }
      />
    </div>
  );
};

export default Platnye;
