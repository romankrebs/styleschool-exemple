import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function Maps() {
  return (
    <YMaps>
      <Map
        width={"100%"}
        height={"50%"}
        defaultState={{ center: [55.809856, 37.638899], zoom: 16 }}
      >
        <Placemark geometry={[55.811897, 37.63642]} />
      </Map>
    </YMaps>
  );
}
