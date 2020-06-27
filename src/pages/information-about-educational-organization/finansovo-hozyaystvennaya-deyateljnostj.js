import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const FinHoz = props => {
  return (
    <div>
      <Pattern
        title="Финансово-хозяйственная деятельность"
        content={
          <div>
            <h3 style={style.h3}>
              Информация о поступлении финансовых и материальных средств и об их
              расходовании по итогам финансового года
            </h3>
            <p style={style.text}>
              <a href="/download/buhgaltersky-otchet-po-itogam-2018-goda.pdf">
                Отчет о поступлении и расходовании финансовых средств за период
                с 01.01.2018 по 31.12.2018
              </a>
            </p>
            <p style={style.text}>
              Информация об объеме образовательной деятельности, финансовое
              обеспечение которой осуществляется за счет бюджетных ассигнований
              федерального бюджета, бюджетов субъектов Российской Федерации,
              местных бюджетов, по договорам об образовании за счет средств
              физических и (или) юридических лиц представлена в файле{" "}
              <a href="/download/info-ob-objeme-finansirovaniya-obrazovateljnoy-deyateljnosti.xls">
                Информация об объеме финансирования образовательной деятельности
              </a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default FinHoz;
