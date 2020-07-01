import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "../../components/list";

export default function Contents() {
  return (
    <div style={{ padding: 20 }}>
      <ScrollableAnchor id="programma">
        <h2 style={{ textAlign: "center" }}>Программа курса</h2>
      </ScrollableAnchor>
      <div style={{ padding: 16, textAlign: "left" }}>
        <List
          arr={[
            <span>
              Обзор рынка франшиз fashion рынка. Тренды и текущее состояние
              отрасли.
            </span>,
            <span>
              Критерии выбора партнера: что важно знать о компании франчайзи и
              как найти информацию.
            </span>,
            <span>
              Бизнес-модель франчайзинга. Торговая площадь. Критерии выбора
              площадки. Важные пункты договора с арендодателем.
            </span>,
            <span>
              Торговое оборудование. Виды торгового оборудования и Правила
              мерчандайзинга в fashion магазине &ndash; Как следовать
              инструкциям мерчбука.
            </span>,
            <span>
              Штатное расписание. Организация бизнеса. &ndash; Организация
              работы продавцов. Основные критерии отбора. Обучение и мотивация
              продавцов.
            </span>,
            <span>
              Маркетинг для франчайзера: методы продвижения. Трейд-маркетинговый
              календарь. Работа с клиентской базой.
            </span>,
            <span>
              Работа с Ассортиментом: Правила закупки коллекции. Работа с
              коллекцией в сезоне. Маржинальность. Скидки и акции. Остатки
              коллекции &ndash; варианты решения проблемы.
            </span>
          ]}
          num="decimal"
          style={{ lineHeight: "1.5em", padding: 8 }}
        />
      </div>
    </div>
  );
}
