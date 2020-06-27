import React from "react";

import Message from "../../components/message";

export default function MesageComponent() {
  const content = {
    message: (
      <React.Fragment>
        <h4>Спикеры:</h4>
        <ul>
          <li>Татьяна Фомина &ndash; ведущий преподаватель ВШСДТ</li>
          <li>
            Руслан Мигранов &ndash; историк моды и куратор креативных практик
            ВШСДТ
          </li>
          <li>
            Яна Жбанова &ndash; vip консультант, куратор практик
            консультирования ВШСДТ
          </li>
        </ul>
        <p>
          Мы знаем, что вы стильные. Мы дадим вам этого еще больше! Вы сможете
          консультировать и даже обучать стилю. Позвольте себе это, быть у
          истоков стиля, учится в любой точке мира ...
        </p>
        <p>Зарегистрируйтесь и получите персональное приглашение</p>
      </React.Fragment>
    )
  };
  return (
    <Message
      head="Открытая встреча с экспертами и практиками имидж-консультирования + online трансляция"
      date="13 февраля в 19:00, Москва"
      message={content.message}
    />
  );
}