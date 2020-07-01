import React from "react";

import Subscribe from "../../components/subscribe";

export default function SubscribeComponent() {
  const content = {
    text: (
      <div style={{ fontSize: "1.2em" }}>
        {" "}
        Подпишитесь на новости ВШС
        <br />
        Или запишитесь на консультацию
        <br />
        После нашего общения мы сможем:
        <br />
        <ul>
          <li>отправить Вам видео про обучение</li>
          <li>открыть Вам доступ к двум занятиям из курса</li>
        </ul>
      </div>
    )
  };
  return <Subscribe text={content.text} />;
}
