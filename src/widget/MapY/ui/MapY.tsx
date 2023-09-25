import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

export const MapY = () => {
  return (
    <div id="map">
      <YMaps query={{ lang: "en_US" }}>
        <Map
          width="600px"
          height="450px"
          defaultState={{
            center: [25.27241, 55.37508],
            zoom: 12,
            controls: [],
          }}
        >
          <Placemark geometry={[25.27241, 55.37508]} />
          <ZoomControl options={{ position: { top: "20px", left: "5px" } }} />
        </Map>
      </YMaps>
    </div>
  );
};
