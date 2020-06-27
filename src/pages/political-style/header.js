import React from "react";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1="Формирование имиджа. Инструменты политтехнологий"
      descript="Звезды создаются конкретными людьми"
      background="url(/img/political-style/fullscreen.jpg) center top 10%/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(128,128,128,0.4)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Очно | Дистанционно }"
      bottomLine={<div style={{ height: 48 }} />}
    />
  );
}
